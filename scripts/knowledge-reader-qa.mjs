import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

/** Book-specific checks retain concept coverage while using the shared article sidebar. */
export async function auditKnowledgeReader(sequence) {
  const base = 'http://127.0.0.1:4321/blogs/';
  const root = base + 'topics/' + sequence.id + '/';
  const output = 'artifacts/' + sequence.id;
  await mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const report = {
    routes: [],
    accessibility: [],
    errors: [],
    interactions: [],
  };
  page.on('pageerror', (error) => report.errors.push(error.message));
  page.on('response', (response) => {
    if (response.url().startsWith(base) && response.status() >= 400)
      report.errors.push(response.url());
  });
  try {
    for (const theme of ['light', 'dark']) {
      await page.emulateMedia({ colorScheme: theme });
      await page.addInitScript(
        (value) => localStorage.setItem('publication-theme', value),
        theme,
      );
      for (const width of [375, 1440]) {
        await page.setViewportSize({ width, height: 960 });
        for (const section of sequence.sections) {
          await page.goto(root + section.slug + '/');
          await page.evaluate(() => document.fonts.ready);
          await expect(page.locator('h1')).toHaveText(section.title);
          await expect(page.locator('.knowledge-concept')).toHaveCount(
            section.concepts.filter((concept) => concept.status !== 'draft')
              .length,
          );
          assert(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth + 1,
            ),
          );
          await expect(
            page.locator('[data-chapter-link][aria-current=page]'),
          ).toHaveAttribute('data-chapter-link', section.slug);
          await expect(
            page.locator('[data-chapter="' + section.slug + '"]'),
          ).toHaveAttribute('open', '');
          assert.equal(
            await page.locator('[data-browse-topic]').isVisible(),
            width <= 1000,
          );
          assert.equal(
            await page
              .locator(
                '.knowledge-concept:has([data-concept-status=planned]) a',
              )
              .count(),
            0,
          );
          if (width > 1000)
            await expect(
              page.locator('[data-chapter-link="' + section.slug + '"]'),
            ).toBeInViewport({ ratio: 1 });
          if (
            section === sequence.sections[0] ||
            section === sequence.sections.at(-1)
          ) {
            const audit = await new AxeBuilder({ page })
              .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
              .analyze();
            report.accessibility.push({
              theme,
              width,
              section: section.slug,
              violations: audit.violations.map((item) => item.id),
            });
            assert.equal(
              audit.violations.length,
              0,
              `${sequence.id}: ${audit.violations.map((item) => item.id).join(', ')}`,
            );
          }
          report.routes.push({ theme, width, section: section.slug });
        }
      }
    }
    const section = sequence.sections.find((chapter) =>
      chapter.concepts.some((concept) => concept.status === 'planned'),
    );
    const concept = section.concepts.find((item) => item.status === 'planned');
    await page.goto(root + section.slug + '/#' + concept.slug);
    await expect(page.locator('#' + concept.slug)).toBeFocused();
    await page.reload();
    await expect(page.locator('#' + concept.slug)).toBeFocused();
    const next = sequence.sections[sequence.sections.indexOf(section) + 1];
    if (next) {
      await page.locator('.book-pagination [rel=next]').click();
      await expect(page).toHaveURL(root + next.slug + '/');
      await page.goBack();
      await expect(page).toHaveURL(root + section.slug + '/#' + concept.slug);
    }
    for (const [fragment, target] of Object.entries(
      sequence.legacyHashes || {},
    ).slice(0, 4)) {
      await page.goto(root + '#' + fragment);
      await expect(page).toHaveURL(
        root + target + (target.includes('/') ? '' : '/'),
      );
    }
    await page.goto(
      base +
        'search/?q=' +
        encodeURIComponent(concept.title) +
        '&topic=' +
        encodeURIComponent(sequence.title),
    );
    const result = page
      .locator(
        '.search-result a[href$="/' +
          sequence.id +
          '/' +
          section.slug +
          '/#' +
          concept.slug +
          '"]',
      )
      .first();
    await expect(result).toBeVisible();
    await result.click();
    await expect(page.locator('#' + concept.slug)).toBeVisible();
    const published = sequence.sections
      .flatMap((chapter) => chapter.concepts)
      .find((item) => item.status === 'published');
    await page.goto(base + 'articles/' + published.articleSlug + '/');
    await expect(
      page.locator('[data-topic-article][aria-current=page]'),
    ).toHaveAttribute('data-topic-article', published.articleSlug);
    await expect(page.locator('.reader-breadcrumb')).toContainText(
      sequence.title,
    );
    const plainContext = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 375, height: 960 },
    });
    const plain = await plainContext.newPage();
    await plain.goto(root + section.slug + '/');
    await expect(plain.locator('.knowledge-concept')).toHaveCount(
      section.concepts.filter((item) => item.status !== 'draft').length,
    );
    const destination = sequence.sections.at(-1);
    await plain
      .locator('[data-chapter-link="' + destination.slug + '"]')
      .click();
    await expect(plain.locator('h1')).toHaveText(destination.title);
    await plainContext.close();
    report.interactions.push(
      'All section routes and concepts; publication-safe reading; direct concept focus, reload, next/back, legacy links, concept search, article breadcrumbs, and no-JavaScript section links',
    );
    assert.deepEqual(report.errors, []);
    console.log(
      `${sequence.title} reader QA passed: ${report.routes.length} viewport/theme section routes, ${report.accessibility.length} accessibility audits, concept/search compatibility, article navigation, and no-JavaScript fallback.`,
    );
  } finally {
    await writeFile(
      output + '/report.json',
      JSON.stringify(report, null, 2) + '\n',
    );
    await browser.close();
  }
}

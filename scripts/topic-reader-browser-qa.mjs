import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base = 'http://127.0.0.1:4321/blogs/';
const output = 'artifacts/topic-navigation';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const report = { layouts: [], accessibility: [], interactions: [], errors: [] };
page.on('pageerror', (error) => report.errors.push(error.message));
page.on('response', (response) => {
  if (response.url().startsWith(base) && response.status() >= 400)
    report.errors.push(response.url());
});
const routes = [
  'topics/',
  'topics/artificial-intelligence/',
  'topics/machine-learning/ml-foundations/',
  'topics/deep-learning/',
  'articles/context-is-a-design-decision/',
  'articles/your-ai-model-is-fast-why-are-users-still-waiting/',
  'articles/how-rag-actually-works/',
];
try {
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    await page.addInitScript(
      (value) => localStorage.setItem('publication-theme', value),
      theme,
    );
    for (const width of [375, 768, 1280, 1600]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of routes) {
        await page.goto(base + route);
        await page.evaluate(() => document.fonts.ready);
        await expect(page.locator('h1')).toHaveCount(1);
        assert.equal(
          await page.locator('html').getAttribute('data-theme'),
          theme,
        );
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
          `${route} overflows at ${width}`,
        );
        if (route === 'topics/') {
          await expect(page.locator('[data-reader-sidebar]')).toHaveCount(0);
        } else if (width <= 1000) {
          await expect(
            page.getByRole('button', { name: 'Browse topic', exact: true }),
          ).toBeVisible();
          await expect(page.locator('dialog')).not.toBeVisible();
          await page
            .getByRole('button', { name: 'Browse topic', exact: true })
            .click();
          await expect(page.locator('dialog')).toBeVisible();
          await expect(page.locator('[data-sidebar-navigation]')).toHaveCount(
            1,
          );
          await page.keyboard.press('Escape');
          await expect(page.locator('dialog')).not.toBeVisible();
          await expect(
            page.getByRole('button', { name: 'Browse topic', exact: true }),
          ).toBeFocused();
        } else {
          await expect(
            page.locator('[data-sidebar-desktop] [data-sidebar-navigation]'),
          ).toBeVisible();
          await expect(
            page.getByRole('button', { name: 'Browse topic', exact: true }),
          ).not.toBeVisible();
        }
        if (route.startsWith('articles/') && width > 1000) {
          await expect(
            page.locator('[data-topic-article][aria-current=page]'),
          ).toHaveCount(1);
          const current = page.locator(
            '[data-topic-article][aria-current=page]',
          );
          assert(
            await current.evaluate((node) => node.closest('details').open),
          );
        }
        if (width === 375 || width === 1600) {
          const result = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
            .analyze();
          report.accessibility.push({
            route,
            theme,
            width,
            violations: result.violations.map((item) => ({
              id: item.id,
              nodes: item.nodes.map((node) => node.target),
            })),
          });
          assert.equal(
            result.violations.length,
            0,
            `${route}: ${result.violations.map((item) => item.id).join(', ')}`,
          );
        }
        report.layouts.push({ route, width, theme });
      }
    }
  }
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto(
    base + 'articles/your-ai-model-is-fast-why-are-users-still-waiting/',
  );
  await expect(page.locator('[data-chapter=model-serving]')).toHaveAttribute(
    'open',
    '',
  );
  await page.locator('[data-chapter=model-serving] > summary').focus();
  await page.keyboard.press('Enter');
  await expect(
    page.locator('[data-chapter=model-serving]'),
  ).not.toHaveAttribute('open', '');
  await page.keyboard.press('Enter');
  await expect(page.locator('[data-chapter=model-serving]')).toHaveAttribute(
    'open',
    '',
  );
  const heading = page.locator('.prose h2').nth(2);
  const headingId = await heading.getAttribute('id');
  await heading.evaluate((node) =>
    node.scrollIntoView({ block: 'start', behavior: 'instant' }),
  );
  await expect(
    page.locator('.reader-toc a[aria-current=location]'),
  ).toHaveAttribute('href', '#' + headingId);
  assert.equal(
    await page
      .locator('[data-reader-sidebar]')
      .evaluate((node) => getComputedStyle(node).position),
    'sticky',
  );
  await expect(page.locator('[data-sidebar-desktop]')).toBeInViewport();
  await page.screenshot({ path: output + '/reader-desktop-dark.png' });
  const articleHref = await page
    .locator('.article-previous-next [rel=next]')
    .getAttribute('href');
  await page.locator('.article-previous-next [rel=next]').click();
  await expect(page).toHaveURL(new URL(articleHref, base).href);
  await expect(
    page.locator('[data-topic-article][aria-current=page]'),
  ).toHaveAttribute(
    'data-topic-article',
    'when-caching-makes-an-ai-answer-fast-and-wrong',
  );
  report.interactions.push(
    'Section keyboard toggle, sticky sidebar, TOC scroll spy, and cross-section next article',
  );

  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(base + 'articles/how-rag-actually-works/');
  await page.getByRole('button', { name: 'Browse topic', exact: true }).click();
  await expect(page.locator('[data-chapter=rag]')).toHaveAttribute('open', '');
  const focus = page.locator('dialog :focus');
  await expect(focus).toHaveCount(1);
  for (let index = 0; index < 35; index++) {
    await page.keyboard.press('Tab');
    assert(
      await page.evaluate(() =>
        document.querySelector('dialog').contains(document.activeElement),
      ),
      'Focus must remain in the modal drawer',
    );
  }
  await page.screenshot({ path: output + '/drawer-mobile-dark.png' });
  await page
    .locator(
      'dialog [data-topic-article=when-a-document-assistant-answers-without-evidence]',
    )
    .click();
  await expect(page).toHaveURL(
    base + 'articles/when-a-document-assistant-answers-without-evidence/',
  );
  await expect(page.locator('dialog')).not.toBeVisible();
  report.interactions.push(
    'One navigation DOM, mobile focus trap, active-section expansion, Escape restoration, and article selection',
  );

  await page.goto(base + 'topics/artificial-intelligence/#foundations');
  await expect(page.locator('#foundations')).toBeVisible();
  await expect(page.locator('[data-chapter=foundations]')).toHaveAttribute(
    'open',
    '',
  );
  await page.goto(base + 'topics/machine-learning/#start-here');
  await expect(page).toHaveURL(
    base + 'topics/machine-learning/ml-foundations/',
  );
  report.interactions.push(
    'Existing topic anchors and legacy section redirects preserved',
  );
  assert.deepEqual(report.errors, []);
  console.log(
    `Topic reader browser QA passed: ${report.layouts.length} viewport/theme routes, ${report.accessibility.length} accessibility audits, keyboard navigation, mobile drawer, article selection, legacy anchors, and scroll spy.`,
  );
} finally {
  await writeFile(
    output + '/browser-report.json',
    JSON.stringify(report, null, 2) + '\n',
  );
  await browser.close();
}

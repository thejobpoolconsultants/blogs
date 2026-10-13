import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import {
  insideAiLessons,
  insideAiSeriesTitle,
} from '../src/data/inside-ai-systems.ts';

const base = 'http://127.0.0.1:4321/blogs/';
const output = 'artifacts/inside-ai-systems';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const report = {
  responsive: [],
  accessibility: [],
  articles: [],
  interactions: [],
  errors: [],
};
page.on('pageerror', (error) => report.errors.push(error.message));
page.on('response', (response) => {
  if (response.url().startsWith(base) && response.status() >= 400)
    report.errors.push(response.url());
});
const seriesRoute = 'series/inside-ai-systems/';
const routes = [
  '',
  seriesRoute,
  'articles/',
  'programs/ai-systems-performance/',
  ...insideAiLessons.map((lesson) => `articles/${lesson.slug}/`),
];

try {
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    await page.addInitScript(
      (value) => localStorage.setItem('publication-theme', value),
      theme,
    );
    for (const width of [375, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of routes) {
        const response = await page.goto(base + route);
        assert.equal(response.status(), 200, route);
        await page.evaluate(() => document.fonts.ready);
        assert.equal(
          await page.locator('html').getAttribute('data-theme'),
          theme,
        );
        assert.equal(await page.locator('h1').count(), 1, route);
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
          `${route} overflows at ${width}`,
        );
        report.responsive.push({ route, width, theme });
        if (width === 1440) {
          const result = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
            .analyze();
          report.accessibility.push({
            route,
            theme,
            violations: result.violations.map((item) => ({
              id: item.id,
              targets: item.nodes.map((node) => node.target),
            })),
          });
          assert.equal(
            result.violations.length,
            0,
            `${theme} ${route}: ${result.violations.map((item) => item.id).join(', ')}`,
          );
        }
        if (
          route === seriesRoute ||
          route === `articles/${insideAiLessons[0].slug}/`
        ) {
          await page.screenshot({
            path: `${output}/${route === seriesRoute ? 'series' : 'day-1'}-${theme}-${width}.png`,
            fullPage: true,
          });
        }
      }
    }
  }

  await page.goto(base + seriesRoute);
  assert.equal(await page.locator('h1').textContent(), insideAiSeriesTitle);
  assert.equal(await page.locator('.daily-lessons h3 a').count(), 7);
  assert.equal(await page.locator('.daily-lessons li').count(), 7);
  for (const [index, lesson] of insideAiLessons.entries()) {
    await page.goto(base + `articles/${lesson.slug}/`);
    assert.equal(await page.locator('h1').textContent(), lesson.title);
    const prose = page.locator('.prose');
    const words = (await prose.innerText()).split(/\s+/).length;
    assert(words >= 850, `${lesson.slug} needs substantial content: ${words}`);
    assert(
      await prose
        .getByRole('heading', { name: 'The practical problem', exact: true })
        .count(),
    );
    assert(
      await prose
        .getByRole('heading', {
          name: 'One lesson to carry forward',
          exact: true,
        })
        .count(),
    );
    assert((await page.locator('#sources a[href^="https://"]').count()) >= 2);
    const diagram = page.locator(
      `a[href="/blogs/diagrams/inside-ai-systems/day-${index + 1}.html"]`,
    );
    assert.equal(await diagram.count(), 1);
    if (index > 0)
      assert(
        await page
          .locator(
            `a[href="/blogs/articles/${insideAiLessons[index - 1].slug}/"]`,
          )
          .count(),
      );
    if (index < 6)
      assert(
        await page
          .locator(
            `a[href="/blogs/articles/${insideAiLessons[index + 1].slug}/"]`,
          )
          .count(),
      );
    assert.equal(
      await page
        .getByRole('link', { name: 'Enquire About Guidance', exact: false })
        .count(),
      1,
    );
    const receipt = JSON.parse(
      await readFile(
        `.archify/architecture-inside-ai-day-${index + 1}-20261012-090000/day-${index + 1}.finalize.json`,
        'utf8',
      ),
    );
    assert.equal(receipt.ok, true);
    const actual = createHash('sha256')
      .update(
        await readFile(
          `public/diagrams/inside-ai-systems/day-${index + 1}.html`,
        ),
      )
      .digest('hex');
    assert.equal(
      actual,
      receipt.artifact.sha256,
      'Viewer bytes must match the independently validated diagram',
    );
    report.articles.push({ day: index + 1, words, diagramValidated: true });
  }

  await page.goto(base + 'articles/?program=ai-systems-performance');
  const visible = page.locator('[data-article-program]:visible');
  assert.equal(await visible.count(), 2);
  await page.locator('#level-filter').selectOption('intermediate');
  assert.equal(await visible.count(), 1);
  await page.locator('#article-topic-filter').selectOption('generative-ai');
  assert.equal(await visible.count(), 0);
  assert(await page.locator('#article-filter-empty').isVisible());
  await page.getByRole('button', { name: 'Clear filters' }).click();
  assert.equal(await visible.count(), 16);
  await page.locator('#program-filter').focus();
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Tab');
  assert.equal(
    await page
      .locator('#article-topic-filter')
      .evaluate((node) => node === document.activeElement),
    true,
  );
  report.interactions.push(
    'Filters: initial program URL, combined filters, empty state, reset, keyboard focus',
  );

  await page.goto(base + 'programs/ai-systems-performance/#articles');
  assert.equal(await page.locator('#articles .article-card').count(), 2);
  await page.goto(base + 'search/?q=bounded');
  await page
    .locator(
      '#search-results a[href*="why-ai-requests-wait-bounded-queues-and-deadlines"]',
    )
    .first()
    .waitFor();
  report.interactions.push(
    'Program collection includes assigned lessons; full-text search finds the queue lesson',
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base + seriesRoute);
  assert.equal(await page.locator('.daily-lessons h3 a').count(), 7);
  report.interactions.push('Reduced motion preserves all reading links');
  assert.deepEqual(report.errors, []);
  console.log(
    `Inside AI Systems QA passed: ${report.responsive.length} responsive views, ${report.accessibility.length} accessibility scans, 7 substantial lessons, validated viewer bytes, filters, reading navigation, and search.`,
  );
} finally {
  await writeFile(
    `${output}/report.json`,
    JSON.stringify(report, null, 2) + '\n',
  );
  await browser.close();
}

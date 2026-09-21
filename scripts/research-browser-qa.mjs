import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base = 'http://127.0.0.1:4321/blogs/';
const output = 'artifacts/research';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const report = {
  responsive: [],
  accessibility: [],
  errors: [],
  interactions: [],
};
page.on('pageerror', (error) => report.errors.push(error.message));
page.on('response', (response) => {
  if (response.url().startsWith(base) && response.status() >= 400)
    report.errors.push(response.url());
});
const routes = [
  '',
  'research/',
  'topics/research/',
  'articles/attention-paper-to-product/',
  'articles/how-rag-actually-works/',
  'articles/how-machines-represent-words/',
  'articles/production-rag-architecture/',
  'articles/context-is-a-design-decision/',
];
try {
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    for (const width of [375, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of routes) {
        await page.goto(base + route);
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator('h1').count(), 1);
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          route + ': overflow',
        );
        if (route.startsWith('articles/')) {
          assert.equal(
            await page.locator('.research-editorial-note').count(),
            1,
          );
          assert(
            (await page
              .locator(
                '#sources [data-source-role="primary"][data-source-kind="paper"]',
              )
              .count()) > 0,
          );
          const anchors = await page
            .locator('.toc a')
            .evaluateAll((links) =>
              links.map((link) => link.getAttribute('href')),
            );
          for (const anchor of anchors)
            assert(
              (await page.locator(anchor).count()) > 0,
              'Missing section: ' + anchor,
            );
        }
        if (
          [
            'research/',
            'articles/attention-paper-to-product/',
            'articles/how-machines-represent-words/',
            'articles/how-rag-actually-works/',
          ].includes(route)
        ) {
          const audit = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
            .analyze();
          report.accessibility.push({
            route,
            width,
            theme,
            violations: audit.violations.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => n.target),
            })),
          });
        }
        if (route === 'research/')
          await page.screenshot({
            path: `${output}/research-${width}-${theme}.png`,
          });
        if (route === 'articles/attention-paper-to-product/') {
          await page
            .locator('[data-provenance="source"]')
            .screenshot({ path: `${output}/summary-${width}-${theme}.png` });
          await page
            .locator('[data-provenance="experiment"]')
            .screenshot({ path: `${output}/experiment-${width}-${theme}.png` });
          await page
            .locator('.research-editorial-note')
            .screenshot({ path: `${output}/disclosure-${width}-${theme}.png` });
        }
        report.responsive.push({ route, width, theme });
      }
    }
  }
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(base + 'articles/attention-paper-to-product/');
  await page.locator('.toc summary').click();
  await page.locator('.toc a[href="#what-the-paper-reports"]').click();
  assert(page.url().endsWith('#what-the-paper-reports'));
  report.interactions.push('Mobile contents link reaches reported findings.');
  await page.goto(base + 'search/?q=attention&type=paper-to-product');
  await page.locator('.search-result').first().waitFor();
  assert(
    (await page.locator('.search-result .meta').first().textContent()).includes(
      'Paper → Product',
    ),
  );
  assert(
    (
      await page.locator('.search-result a').first().getAttribute('href')
    ).includes('attention-paper-to-product'),
  );
  assert.equal(
    await page.locator('#type-filter').inputValue(),
    'paper-to-product',
  );
  report.interactions.push(
    'Search preserves machine type filters and displays Paper → Product.',
  );
  const noJs = await browser.newContext({ javaScriptEnabled: false });
  const plainPage = await noJs.newPage();
  await plainPage.goto(base + 'articles/attention-paper-to-product/');
  assert(await plainPage.locator('.research-editorial-note').isVisible());
  assert(await plainPage.locator('[data-provenance="source"]').isVisible());
  report.interactions.push('Disclosures and labels render without JavaScript.');
  assert.deepEqual(report.errors, []);
  assert(
    report.accessibility.every((audit) => audit.violations.length === 0),
    'See research/qa.json for accessibility findings.',
  );
  console.log(
    JSON.stringify(
      {
        responsive: report.responsive.length,
        accessibility: report.accessibility.length,
        interactions: report.interactions,
        errors: report.errors,
      },
      null,
      2,
    ),
  );
} finally {
  await writeFile(`${output}/qa.json`, JSON.stringify(report, null, 2));
  await browser.close();
}

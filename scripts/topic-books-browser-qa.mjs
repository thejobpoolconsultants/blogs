import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { sequenceFor } from '../src/data/topic-sequences/index.ts';
import { topics } from '../src/data/topics.ts';
import {
  sectionsFor,
  conceptId,
  researchAttribution,
} from '../src/data/topic-books.ts';

const base = 'http://127.0.0.1:4321/blogs/';
const output = 'artifacts/topic-books';
await mkdir(output, { recursive: true });
const report = {
  responsive: [],
  accessibility: [],
  interactions: [],
  errors: [],
};
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
page.on('pageerror', (error) => report.errors.push(error.message));
page.on('response', (response) => {
  if (
    response.url().startsWith(base) &&
    response.status() >= 400 &&
    !response.url().endsWith('/rss/')
  )
    report.errors.push(response.url() + ': ' + response.status());
});
async function audit(label) {
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  report.accessibility.push({
    label,
    violations: result.violations.map((item) => ({
      id: item.id,
      nodes: item.nodes.map((node) => node.target),
    })),
  });
}
async function checkPanel(id) {
  await expect(page.locator('[data-book-panel]:visible')).toHaveCount(1);
  await expect(page.locator('#' + id)).toBeVisible();
  await expect(
    page.locator('.book-section-link[aria-current="location"]'),
  ).toHaveAttribute('data-section', id);
  assert((await page.locator('[data-concepts]:not([hidden])').count()) <= 1);
}
try {
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    for (const width of [375, 1440]) {
      await page.setViewportSize({ width, height: 960 });
      for (const route of [
        'topics/',
        ...topics.map((topic) => 'topics/' + topic.id + '/'),
      ]) {
        await page.goto(base + route);
        await page.evaluate(() => document.fonts.ready);
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          route + ' overflow at ' + width,
        );
        await expect(page.locator('h1')).toHaveCount(1);
        if (route !== 'topics/' && route !== 'topics/machine-learning/') {
          await checkPanel('overview');
          assert.equal(
            await page.locator('.book-menu').evaluate((menu) => menu.open),
            width > 1000,
          );
        }
        report.responsive.push({ route, width, theme });
        if (
          [
            'topics/',
            'topics/nlp/',
            'topics/research/',
            'topics/build/',
          ].includes(route)
        )
          await audit(route + ' ' + width + ' ' + theme);
        if (['topics/', 'topics/nlp/'].includes(route))
          await page.screenshot({
            path:
              output +
              '/' +
              route.replaceAll('/', '-') +
              width +
              '-' +
              theme +
              '.png',
          });
      }
      await page.goto(base + 'topics/nlp/#text-processing');
      await checkPanel('text-processing');
      if (width < 1000) await page.locator('.book-menu summary').click();
      await page.locator('[data-section="transformers"]').focus();
      await page.keyboard.press('Enter');
      await checkPanel('transformers');
      await expect(page.locator('#transformers-title')).toBeFocused();
      if (width < 1000)
        assert.equal(
          await page.locator('.book-menu').evaluate((menu) => menu.open),
          false,
        );
      await audit('active section ' + width + ' ' + theme);
      await page.screenshot({
        path: output + '/section-' + width + '-' + theme + '.png',
      });
      await page.goBack();
      await checkPanel('text-processing');
      await page.goForward();
      await checkPanel('transformers');
      await page.reload();
      await checkPanel('transformers');
      await page.goto(
        base +
          'topics/nlp/#' +
          conceptId('word-embeddings', 'Vector similarity'),
      );
      await checkPanel('word-embeddings');
      await expect(
        page.locator('#word-embeddings--vector-similarity'),
      ).toBeFocused();
      // Hashes created by Pagefind for headings must reveal their owning panel, too.
      await page.goto(base + 'topics/nlp/#attention-title');
      await checkPanel('attention');
      await page.goto(base + 'topics/nlp/#unknown-section');
      await checkPanel('overview');
      await page.goto(base + 'topics/nlp/#%E0%A4%A');
      await checkPanel('overview');
      await page.goto(base + 'topics/research/#paper-product');
      await checkPanel('paper-product');
      await expect(page.locator('.research-attribution')).toHaveText(
        researchAttribution,
      );
      report.interactions.push({
        width,
        theme,
        checks:
          'keyboard, history, reload, concept link, heading link, unknown/malformed hash, research attribution',
      });
    }
  }
  await page.setViewportSize({ width: 1440, height: 960 });
  // Exercise every requested section rather than just the first page in the menu.
  for (const topic of topics.filter((topic) => !sequenceFor(topic.id))) {
    await page.goto(base + 'topics/' + topic.id + '/');
    for (const section of sectionsFor(topic.id)) {
      await page.locator('[data-section="' + section.id + '"]').click();
      await checkPanel(section.id);
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      );
    }
  }
  report.interactions.push({ checks: 'all 208 legacy section links' });
  await page.goto(base + 'topics/nlp/#transformers');
  await page.setViewportSize({ width: 375, height: 900 });
  await expect(page.locator('.book-menu')).not.toHaveAttribute('open', '');
  await page.locator('.book-menu summary').click();
  await audit('expanded mobile menu');
  await page.screenshot({ path: output + '/mobile-menu.png' });
  await page.locator('[data-section="transformers"]').focus();
  await page.keyboard.press('Escape');
  await expect(page.locator('.book-menu summary')).toBeFocused();
  assert.equal(
    await page.locator('.book-menu').evaluate((menu) => menu.open),
    false,
  );
  await page.setViewportSize({ width: 1440, height: 960 });
  assert.equal(
    await page.locator('.book-menu').evaluate((menu) => menu.open),
    true,
  );
  const noJS = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 900 },
  });
  const plain = await noJS.newPage();
  await plain.goto(base + 'topics/nlp/#transformers');
  await expect(plain.locator('[data-book-panel]:visible')).toHaveCount(14);
  await expect(
    plain.locator('#transformers .book-reading a').first(),
  ).toBeVisible();
  await noJS.close();
  report.interactions.push({
    checks: 'responsive resize, Escape, no-JavaScript content and links',
  });
  const rss = await page.request.get(base + 'rss/');
  assert.equal(rss.status(), 404);
  assert.deepEqual(report.errors, []);
  assert.deepEqual(
    report.accessibility.filter((entry) => entry.violations.length),
    [],
  );
  console.log(
    'Passed ' +
      report.responsive.length +
      ' responsive states, ' +
      report.accessibility.length +
      ' accessibility audits, all 208 legacy sections, history/deep links, mobile keyboard navigation, and no-JavaScript fallback.',
  );
} finally {
  await writeFile(output + '/report.json', JSON.stringify(report, null, 2));
  await browser.close();
}

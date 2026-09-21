import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  permissions: ['clipboard-read', 'clipboard-write'],
});
const page = await context.newPage();
const base = 'http://127.0.0.1:4321/blogs/';
const errors = [];
const failed = [];
const report = { screens: [], accessibility: [], interactions: [] };
page.on('pageerror', (error) => errors.push(error.message));
page.on('response', (response) => {
  if (response.status() >= 400 && response.url().startsWith(base))
    failed.push(response.url() + ' ' + response.status());
});
await mkdir('artifacts', { recursive: true });
try {
  for (const width of [320, 375, 430, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of [
      '',
      'topics/machine-learning/',
      'topics/nlp/',
      'topics/generative-ai/',
      'articles/production-rag-architecture/',
      'articles/build-a-retrieval-baseline/',
      'search/',
      'learn/agentic-ai-engineer/',
    ]) {
      await page.goto(base + route);
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      assert(
        overflow.scroll <= width + 1,
        route + ' overflows at ' + width + ': ' + overflow.scroll,
      );
      report.screens.push({ width, route, overflow: false });
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  await page.screenshot({ path: 'artifacts/home-light.png', fullPage: true });
  for (const theme of ['light', 'dark']) {
    if (theme === 'dark')
      await page.getByRole('button', { name: 'Switch to dark theme' }).click();
    for (const route of [
      '',
      'topics/machine-learning/',
      'topics/nlp/',
      'topics/generative-ai/',
      'articles/production-rag-architecture/',
      'articles/build-a-retrieval-baseline/',
      'search/',
    ]) {
      await page.goto(base + route);
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      report.accessibility.push({
        theme,
        route,
        violations: result.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.map((n) => n.target),
        })),
      });
      if (result.violations.length)
        errors.push(
          theme +
            ' ' +
            route +
            ' axe: ' +
            result.violations.map((v) => v.id).join(','),
        );
    }
    await page.goto(base);
    await page.screenshot({
      path: 'artifacts/home-' + theme + '.png',
      fullPage: true,
    });
  }
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  report.interactions.push('Theme persists after navigation and reload');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await page.goto(base + 'search/');
  await page.getByRole('searchbox').fill('retrieval');
  await page.getByRole('button', { name: 'Search →', exact: true }).click();
  await page.locator('.search-result').first().waitFor();
  assert((await page.locator('.search-result').count()) > 0);
  assert(
    (
      await page.locator('.search-result a').first().getAttribute('href')
    ).startsWith('/blogs/'),
  );
  await page.locator('#topic-filter').selectOption('Generative AI');
  await page.waitForFunction(() =>
    document
      .querySelector('#search-status')
      ?.textContent?.includes('results for'),
  );
  await page.waitForFunction(
    () =>
      [...document.querySelectorAll('.search-result .meta')].every((n) =>
        n.textContent.includes('Generative AI'),
      ) && document.querySelectorAll('.search-result').length > 0,
  );
  await page.locator('#type-filter').selectOption('explainer');
  await page.waitForFunction(
    () => document.querySelectorAll('.search-result').length > 0,
  );
  await page.screenshot({
    path: 'artifacts/search-desktop.png',
    fullPage: true,
  });
  report.interactions.push(
    'Full-text search, topic/type filters, base-prefixed result links',
  );
  await page.getByRole('searchbox').fill('zzzznonexistentterm');
  await page.getByRole('button', { name: 'Search →', exact: true }).click();
  await page.getByRole('status').filter({ hasText: 'No results' }).waitFor();
  report.interactions.push('No-results state');
  await page.goto(base + 'articles/build-a-retrieval-baseline/');
  await page.getByRole('button', { name: 'Copy code block' }).click();
  assert(
    (await page.evaluate(() => navigator.clipboard.readText())).includes(
      'def retrieve',
    ),
  );
  await page.getByRole('button', { name: 'Copy link', exact: true }).click();
  await page.getByText('Link copied.', { exact: true }).waitFor();
  await page.screenshot({
    path: 'artifacts/article-desktop.png',
    fullPage: true,
  });
  report.interactions.push('Code copy and canonical link copy');
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(base);
  await page.locator('.mobile-menu summary').click();
  assert(
    await page
      .getByRole('navigation', { name: 'Mobile', exact: true })
      .isVisible(),
  );
  await page.screenshot({ path: 'artifacts/mobile-menu.png', fullPage: true });
  await page.locator('.mobile-menu summary').press('Escape');
  assert(!(await page.locator('.mobile-menu').getAttribute('open')));
  report.interactions.push('Mobile navigation and Escape focus return');
  await page.screenshot({ path: 'artifacts/home-mobile.png', fullPage: true });
  await page.goto(base + 'search/?q=attention');
  await page.locator('.search-result').first().waitFor();
  await page.screenshot({
    path: 'artifacts/search-mobile.png',
    fullPage: true,
  });
  await page.goto(base);
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').textContent(), 'Skip to content');
  await page.keyboard.press('Enter');
  assert.equal(await page.locator(':focus').getAttribute('id'), 'main');
  report.interactions.push('Keyboard skip link moves focus to main');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    'auto',
  );
  report.interactions.push('Reduced-motion preference');
  const nojs = await browser.newContext({ javaScriptEnabled: false });
  const plain = await nojs.newPage();
  await plain.goto(base + 'articles/agent-isnt-one-model/');
  assert(await plain.getByRole('heading', { level: 1 }).isVisible());
  await nojs.close();
  report.interactions.push(
    'Static article remains readable without JavaScript',
  );
  assert.deepEqual(failed, [], 'Failed local requests');
  assert.deepEqual(errors, [], 'Browser/accessibility errors');
  console.log(
    JSON.stringify(
      {
        responsiveChecks: report.screens.length,
        accessibilityChecks: report.accessibility.length,
        interactions: report.interactions,
        errors,
        failed,
      },
      null,
      2,
    ),
  );
} finally {
  await writeFile(
    'artifacts/browser-qa.json',
    JSON.stringify({ ...report, errors, failed }, null, 2),
  );
  await browser.close();
}

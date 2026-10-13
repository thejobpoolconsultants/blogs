import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const report = [];
await mkdir('artifacts/machine-learning', { recursive: true });
try {
  for (const theme of ['light', 'dark'])
    for (const width of [375, 768, 1440]) {
      await page.emulateMedia({ colorScheme: theme });
      await page.addInitScript(
        (value) => localStorage.setItem('publication-theme', value),
        theme,
      );
      await page.setViewportSize({ width, height: 960 });
      await page.goto(
        'http://127.0.0.1:4321/blogs/topics/machine-learning/clustering/',
      );
      await page.evaluate(() => document.fonts.ready);
      if (width <= 1000)
        await page
          .getByRole('button', { name: 'Browse topic', exact: true })
          .click();
      const current = page.locator('[data-chapter-link=clustering]');
      await expect(current).toBeInViewport({ ratio: 1 });
      assert(
        await current.evaluate((node) => {
          const item = node.getBoundingClientRect(),
            frame = node
              .closest('[data-sidebar-navigation]')
              .getBoundingClientRect();
          return (
            item.top >= frame.top &&
            item.bottom <= Math.min(frame.bottom, innerHeight)
          );
        }),
        'Selected chapter fully visible',
      );
      assert.equal(
        await current.evaluate((node) => getComputedStyle(node).transform),
        'none',
      );
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      assert.equal(results.violations.length, 0);
      await page.screenshot({
        path:
          'artifacts/machine-learning/final-navigation-' +
          width +
          '-' +
          theme +
          '.png',
      });
      if (width <= 1000) await page.keyboard.press('Escape');
      await page.locator('footer').scrollIntoViewIfNeeded();
      assert(
        await page
          .locator('[data-reader-sidebar]')
          .evaluate(
            (node) =>
              node.getBoundingClientRect().bottom <=
              document.querySelector('footer').getBoundingClientRect().top,
          ),
        'Sidebar must not cover footer',
      );
      report.push({
        width,
        theme,
        violations: [],
        currentChapterFullyVisible: true,
        footerReachable: true,
      });
    }
  console.log(
    'Navigation geometry passed: 6 viewport/theme states, accessibility audits, visible current chapters, native drawers, and unobstructed footer.',
  );
} finally {
  await writeFile(
    'artifacts/machine-learning/navigation-report.json',
    JSON.stringify(report, null, 2) + '\n',
  );
  await browser.close();
}

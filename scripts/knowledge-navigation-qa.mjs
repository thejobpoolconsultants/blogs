import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const report = [];
try {
  for (const theme of ['light', 'dark'])
    for (const width of [375, 768, 1440]) {
      await page.emulateMedia({ colorScheme: theme });
      await page.setViewportSize({ width, height: 960 });
      await page.goto(
        'http://127.0.0.1:4321/blogs/topics/machine-learning/clustering/',
      );
      await page.evaluate(() => document.fonts.ready);
      if (width <= 1000) {
        await page.locator('.knowledge-menu > summary').click();
        assert.equal(
          await page
            .locator('.knowledge-menu > summary > span')
            .first()
            .evaluate((node) => getComputedStyle(node).transform),
          'none',
          'Menu label must stay upright',
        );
        await expect(
          page.locator('[data-chapter=clustering] .knowledge-subtopics'),
        ).toBeVisible();
      }
      const current = page.locator('[data-chapter-link=clustering]');
      await expect(current).toBeInViewport({ ratio: 1 });
      assert(
        await current.evaluate((node) => {
          const item = node.getBoundingClientRect(),
            frame = node.closest('.book-navigation').getBoundingClientRect();
          return (
            item.top >= frame.top &&
            item.bottom <= Math.min(frame.bottom, innerHeight)
          );
        }),
        'Selected chapter fully visible',
      );
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      assert.deepEqual(results.violations, []);
      await page.screenshot({
        path:
          'artifacts/machine-learning/final-navigation-' +
          width +
          '-' +
          theme +
          '.png',
      });
      if (width <= 1000)
        await page.locator('.knowledge-menu > summary').click();
      await page.locator('footer').scrollIntoViewIfNeeded();
      assert(
        await page.locator('.book-sidebar').evaluate((node) => {
          const sidebar = node.getBoundingClientRect(),
            footer = document.querySelector('footer').getBoundingClientRect();
          return sidebar.bottom <= footer.top;
        }),
        'Sidebar must not cover footer',
      );
      report.push({
        width,
        theme,
        violations: [],
        labelUpright: true,
        currentChapterFullyVisible: true,
        footerReachable: true,
      });
    }
  console.log(
    'Final navigation checks passed: 6 viewport/theme states, 6 accessibility audits, upright labels, fully visible chapter selection, and unobstructed footer.',
  );
} finally {
  await writeFile(
    'artifacts/machine-learning/navigation-report.json',
    JSON.stringify(report, null, 2),
  );
  await browser.close();
}

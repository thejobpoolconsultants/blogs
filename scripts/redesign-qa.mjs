import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { writeFile, mkdir } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  colorScheme: 'dark',
});
const page = await context.newPage();
const base = 'http://127.0.0.1:4321/blogs/';
const report = { interactions: [], accessibility: [], performance: {} };
await mkdir('artifacts/redesign', { recursive: true });
try {
  await page.goto(base);
  await page.evaluate(() => document.fonts.ready);
  report.performance = await page.evaluate(() => {
    const resources = performance.getEntriesByType('resource');
    const sum = (type) =>
      resources
        .filter((r) => r.initiatorType === type)
        .reduce((n, r) => n + r.transferSize, 0);
    return {
      scriptTransferBytes: sum('script'),
      stylesheetTransferBytes: sum('link'),
      requests: resources.length,
      fontResources: resources.filter((r) => /woff/.test(r.name)).length,
    };
  });
  const node = page.getByRole('link', {
    name: 'Explore Patterns',
    exact: true,
  });
  await node.focus();
  await page
    .getByText(
      'Learning fits patterns to examples. Evaluation tests whether they hold.',
      { exact: true },
    )
    .waitFor();
  await node.press('Enter');
  await page.waitForURL(base + 'topics/machine-learning/');
  report.interactions.push(
    'Map keyboard focus explains a connection; Enter follows the correct topic',
  );
  await page.keyboard.press('/');
  await page.waitForURL(base + 'search/');
  await page.keyboard.press('/');
  assert.equal(await page.locator(':focus').getAttribute('id'), 'query');
  await page.getByRole('searchbox').fill('a');
  await page.keyboard.press('/');
  assert.equal(await page.getByRole('searchbox').inputValue(), 'a/');
  report.interactions.push(
    'Search shortcut navigates, focuses, and does not intercept input typing',
  );
  await page.goto(base + 'articles/agent-isnt-one-model/');
  assert(await page.locator('.reading-rail').isVisible());
  const bodyWidth = await page
    .locator('.prose')
    .evaluate((n) => n.getBoundingClientRect().width);
  assert(
    bodyWidth >= 680 && bodyWidth <= 780,
    'Desktop reading measure: ' + bodyWidth,
  );
  await page
    .locator('.key-idea')
    .screenshot({ path: 'artifacts/redesign/key-idea.png' });
  report.interactions.push(
    'Desktop article uses a 680–780px reading measure and visible context rail',
  );
  await page.setViewportSize({ width: 375, height: 812 });
  await page.reload();
  assert(!(await page.locator('.toc details').evaluate((n) => n.open)));
  await page.getByText('Contents', { exact: true }).click();
  assert(
    await page
      .getByRole('navigation', { name: 'Table of contents' })
      .isVisible(),
  );
  report.interactions.push(
    'Mobile Contents disclosure starts collapsed and expands',
  );
  await page.goto(base);
  await page.locator('.mobile-menu summary').click();
  await page.getByRole('button', { name: 'Close navigation' }).waitFor();
  assert.equal(
    await page.locator(':focus').getAttribute('class'),
    'menu-close',
  );
  assert(await page.locator('main').evaluate((n) => n.inert));
  await page
    .getByRole('navigation', { name: 'Mobile', exact: true })
    .getByRole('link')
    .last()
    .focus();
  await page.keyboard.press('Tab');
  assert.equal(
    await page.locator(':focus').getAttribute('class'),
    'menu-close',
  );
  await page.screenshot({ path: 'artifacts/redesign/navigation-375.png' });
  const drawerAxe = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  report.accessibility.push({
    route: 'mobile drawer',
    theme: 'dark',
    violations: drawerAxe.violations,
  });
  await page.keyboard.press('Escape');
  assert(!(await page.locator('main').evaluate((n) => n.inert)));
  assert.equal(
    await page.locator(':focus').evaluate((n) => n.tagName),
    'SUMMARY',
  );
  report.interactions.push(
    'Drawer moves focus, contains Tab, makes background inert, and restores focus with Escape',
  );
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    for (const route of [
      'topics/agentic-ai/',
      'articles/agent-isnt-one-model/',
      'research/',
      'topics/research/',
      'search/?q=attention',
    ]) {
      await page.goto(base + route);
      if (route.startsWith('search'))
        await page.locator('.search-result').first().waitFor();
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      report.accessibility.push({
        theme,
        route,
        violations: results.violations,
      });
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        route + ' mobile overflow',
      );
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  await page
    .locator('.big-idea')
    .screenshot({ path: 'artifacts/redesign/architecture-feature.png' });
  await page
    .locator('.article-grid')
    .first()
    .screenshot({ path: 'artifacts/redesign/article-artwork.png' });
  await page
    .locator('.path-grid')
    .screenshot({ path: 'artifacts/redesign/learning-sequences.png' });
  const plain = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  const nojs = await plain.newPage();
  await nojs.goto(base);
  await nojs.locator('.mobile-menu summary').click();
  assert(
    await nojs
      .getByRole('navigation', { name: 'Mobile', exact: true })
      .isVisible(),
  );
  await nojs.locator('.mobile-menu summary').click();
  assert(!(await nojs.locator('.mobile-menu').evaluate((n) => n.open)));
  await plain.close();
  report.interactions.push(
    'Navigation still opens and closes without JavaScript',
  );
  assert(
    report.accessibility.every((entry) => entry.violations.length === 0),
    'Accessibility violations; see report',
  );
  console.log(
    JSON.stringify(
      {
        ...report,
        accessibility: report.accessibility.map(({ violations, ...r }) => ({
          ...r,
          violations: violations.length,
        })),
      },
      null,
      2,
    ),
  );
} finally {
  await writeFile(
    'artifacts/redesign/interaction-qa.json',
    JSON.stringify(report, null, 2),
  );
  await browser.close();
}

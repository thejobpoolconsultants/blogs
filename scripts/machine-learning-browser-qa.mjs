import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { machineLearning } from '../src/data/topic-sequences/machine-learning.ts';
const base = 'http://127.0.0.1:4321/blogs/';
const root = base + 'topics/machine-learning/';
const output = 'artifacts/machine-learning';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const report = {
  responsive: [],
  accessibility: [],
  interactions: [],
  errors: [],
};
page.on('pageerror', (error) => report.errors.push(error.message));
page.on('response', (response) => {
  if (response.url().startsWith(base) && response.status() >= 400)
    report.errors.push(response.url() + ': ' + response.status());
});
const samples = [
  '',
  'ml-foundations/',
  'math-statistics/',
  'regression/',
  'trees-ensembles/',
  'model-evaluation/',
  'clustering/',
  'dimensionality-reduction/',
  'explainability/',
  'production-ml/',
  'projects-experiments/',
];
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
try {
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 960 });
      for (const route of samples) {
        await page.goto(root + route);
        await page.evaluate(() => document.fonts.ready);
        await expect(page.locator('h1')).toHaveCount(1);
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          route + ' overflow ' + width,
        );
        await expect(
          page.locator('.book-section-link[aria-current=page]'),
        ).toHaveCount(1);
        assert.equal(
          await page.locator('.knowledge-menu').evaluate((menu) => menu.open),
          width > 1000,
        );
        assert.equal(
          await page.locator('.chapter-disclosure[open]').count(),
          route ? 1 : 0,
        );
        const plans = page.locator(
          '.knowledge-concept:has([data-concept-status=planned])',
        );
        assert.equal(await plans.locator('a').count(), 0);
        await audit(route + ' ' + width + ' ' + theme);
        report.responsive.push({ route, width, theme });
        if (['', 'clustering/'].includes(route))
          await page.screenshot({
            path:
              output +
              '/' +
              (route.replace('/', '') || 'overview') +
              '-' +
              width +
              '-' +
              theme +
              '.png',
          });
      }
      await page.goto(root + 'clustering/');
      if (width <= 1000)
        await page.locator('.knowledge-menu > summary').click();
      await page.locator('[data-chapter=clustering] > summary').focus();
      await page.keyboard.press('Enter');
      await expect(
        page.locator('[data-chapter=clustering]'),
      ).not.toHaveAttribute('open', '');
      await page.keyboard.press('Enter');
      await expect(page.locator('[data-chapter=clustering]')).toHaveAttribute(
        'open',
        '',
      );
      await page.locator('[data-chapter=regression] > summary').click();
      await expect(page.locator('.chapter-disclosure[open]')).toHaveCount(1);
      await expect(page.locator('[data-chapter=regression]')).toHaveAttribute(
        'open',
        '',
      );
      await page.locator('[data-chapter-link=clustering]').click();
      if (width <= 1000)
        await page.locator('.knowledge-menu > summary').click();
      await page
        .locator('[data-chapter=clustering] a[data-concept-link=k-means]')
        .focus();
      await page.keyboard.press('Enter');
      await expect(page).toHaveURL(root + 'clustering/#k-means');
      await expect(page.locator('#k-means')).toBeFocused();
      await expect(page.locator('[data-concept-link=k-means]')).toHaveAttribute(
        'aria-current',
        'location',
      );
      if (width <= 1000)
        assert.equal(
          await page.locator('.knowledge-menu').evaluate((menu) => menu.open),
          false,
        );
      await page.reload();
      await expect(page.locator('#k-means')).toBeFocused();
      await page.locator('.book-pagination [rel=next]').click();
      await expect(page).toHaveURL(root + 'dimensionality-reduction/');
      await page.goBack();
      await expect(page).toHaveURL(root + 'clustering/#k-means');
      if (width <= 1000) {
        await page.locator('.knowledge-menu > summary').click();
        await page.locator('[data-chapter=clustering] > summary').focus();
        await page.keyboard.press('Escape');
        await expect(page.locator('.knowledge-menu > summary')).toBeFocused();
      }
      report.interactions.push({
        width,
        theme,
        checks:
          'collapse/reopen, one expanded chapter, keyboard concept selection, reload, previous/next, browser Back, Escape',
      });
    }
  }
  await page.setViewportSize({ width: 1440, height: 960 });
  for (const section of machineLearning.sections) {
    await page.goto(root + section.slug + '/');
    await expect(page.locator('h1')).toHaveText(section.title);
    await expect(page.locator('.knowledge-concept')).toHaveCount(
      section.concepts.length,
    );
    const current = page.locator('[data-chapter-link=' + section.slug + ']');
    assert(
      await current.evaluate((node) => {
        const a = node.getBoundingClientRect(),
          b = node.closest('.book-navigation').getBoundingClientRect();
        return a.bottom > b.top && a.top < b.bottom;
      }),
      'Current chapter must be visible: ' + section.slug,
    );
  }
  for (const [hash, destination] of [
    ['start-here', 'ml-foundations/'],
    ['evaluation', 'model-evaluation/'],
    ['ensemble-learning', 'trees-ensembles/'],
    ['ml-fundamentals--generalization', 'ml-foundations/#generalization'],
  ]) {
    await page.goto(root + '#' + hash);
    await expect(page).toHaveURL(root + destination);
  }
  await page.goto(root + '#%E0%A4%A');
  await expect(page.locator('h1')).toHaveText('Machine Learning');
  for (const [term, section, concept] of [
    ['K-Means', 'Clustering', 'k-means'],
    ['SHAP', 'Explainability', 'shap'],
    ['Random Forest', 'Trees & Ensembles', 'random-forest'],
    ['PCA', 'Dimensionality Reduction', 'pca'],
    ['Cross Validation', 'Model Evaluation', 'cross-validation'],
    ['Data Drift', 'Production ML', 'data-drift'],
  ]) {
    await page.goto(
      base +
        'search/?q=' +
        encodeURIComponent(term) +
        '&topic=Machine+Learning',
    );
    const result = page
      .locator('.search-result:has([data-concept-status=planned])')
      .filter({ has: page.locator('a[href$="/#' + concept + '"]') })
      .first();
    await expect(result).toBeVisible();
    await expect(result.locator('.meta')).toHaveText(
      'Machine Learning / ' + section,
    );
    await expect(result.locator('.search-concept-status')).toHaveText(
      'Article in preparation',
    );
    await result.locator('a').click();
    await expect(page.locator('#' + concept)).toBeVisible();
  }
  await page.goto(base + 'search/?q=attention&type=paper-to-product');
  await expect(page.locator('.search-result').first()).toBeVisible();
  assert.equal(await page.locator('[data-concept-status]').count(), 0);
  await page.goto(base + 'articles/what-machines-learn/');
  await expect(page.locator('.breadcrumb')).toContainText('ML Foundations');
  await audit('published article breadcrumbs');
  const plainContext = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 960 },
  });
  const plain = await plainContext.newPage();
  await plain.goto(root + 'clustering/');
  await expect(plain.locator('.knowledge-concept')).toHaveCount(19);
  await plain.locator('[data-chapter=regression] > summary').click();
  await expect(
    plain.locator('[data-chapter=regression] .knowledge-subtopics'),
  ).toBeVisible();
  await plain.locator('[data-chapter-link=regression]').click();
  await expect(plain.locator('h1')).toHaveText('Regression');
  await plainContext.close();
  report.interactions.push({
    checks:
      'all 22 routes, current chapter visibility, legacy fragments, all six requested search terms, article-type filter, article breadcrumbs, no-JavaScript disclosures and routes',
  });
  assert.deepEqual(report.errors, []);
  assert.deepEqual(
    report.accessibility.filter((audit) => audit.violations.length),
    [],
  );
  console.log(
    'Machine Learning browser QA passed: ' +
      report.responsive.length +
      ' responsive states, ' +
      report.accessibility.length +
      ' accessibility audits, 22 routes, keyboard navigation, legacy links, concept search, and no-JavaScript fallback.',
  );
} finally {
  await writeFile(output + '/report.json', JSON.stringify(report, null, 2));
  await browser.close();
}

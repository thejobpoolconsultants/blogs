import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { deepLearning } from '../src/data/topic-sequences/deep-learning.ts';

const base = 'http://127.0.0.1:4321/blogs/';
const root = base + 'topics/deep-learning/';
const output = 'artifacts/deep-learning';
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
  'deep-learning-foundations/',
  'math-for-deep-learning/',
  'loss-functions/',
  'backpropagation/',
  'attention/',
  'transformers/',
  'representation-learning/',
  'production-deep-learning/',
  'advanced-architectures/',
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
        assert.equal(
          await page.locator('.knowledge-menu').evaluate((menu) => menu.open),
          width > 1000,
        );
        await expect(
          page.locator('.book-section-link[aria-current=page]'),
        ).toHaveCount(1);
        assert.equal(
          await page.locator('.chapter-disclosure[open]').count(),
          route ? 1 : 0,
        );
        assert.equal(
          await page
            .locator('.knowledge-concept:has([data-concept-status=planned]) a')
            .count(),
          0,
        );
        if (['attention/', 'transformers/'].includes(route)) {
          const reading = page.locator(
            '[data-related-article=attention-paper-to-product]',
          );
          await expect(reading).toHaveAttribute(
            'data-article-topic',
            'research',
          );
          await expect(reading).toContainText('Research Papers & Insights');
          await expect(reading).toHaveAttribute(
            'href',
            '/blogs/articles/attention-paper-to-product/',
          );
        }
        if (route === 'backpropagation/') {
          await expect(
            page.locator('.knowledge-cycle .cycle-stage'),
          ).toHaveCount(3);
          await expect(page.locator('.cycle-caption')).toContainText(
            'Backpropagation computes gradients.',
          );
        }
        await audit(route + ' ' + width + ' ' + theme);
        if (['', 'backpropagation/', 'transformers/'].includes(route))
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
        report.responsive.push({ route, width, theme });
      }
      await page.goto(root + 'transformers/');
      if (width <= 1000)
        await page.locator('.knowledge-menu > summary').click();
      await expect(
        page.locator('[data-chapter-link=transformers]'),
      ).toBeInViewport({ ratio: 1 });
      await page.locator('[data-chapter=transformers] > summary').focus();
      await page.keyboard.press('Enter');
      await expect(
        page.locator('[data-chapter=transformers]'),
      ).not.toHaveAttribute('open', '');
      await page.keyboard.press('Enter');
      await expect(page.locator('[data-chapter=transformers]')).toHaveAttribute(
        'open',
        '',
      );
      await page.locator('[data-chapter=attention] > summary').click();
      await expect(page.locator('.chapter-disclosure[open]')).toHaveCount(1);
      await page.locator('[data-chapter-link=transformers]').click();
      if (width <= 1000)
        await page.locator('.knowledge-menu > summary').click();
      await page
        .locator('[data-chapter=transformers] [data-concept-link=kv-cache]')
        .focus();
      await page.keyboard.press('Enter');
      await expect(page).toHaveURL(root + 'transformers/#kv-cache');
      await expect(page.locator('#kv-cache')).toBeFocused();
      await expect(
        page.locator(
          '[data-chapter=transformers] [data-concept-link=kv-cache]',
        ),
      ).toHaveAttribute('aria-current', 'location');
      if (width <= 1000)
        assert.equal(
          await page.locator('.knowledge-menu').evaluate((menu) => menu.open),
          false,
        );
      await page.reload();
      await expect(page.locator('#kv-cache')).toBeFocused();
      await page.locator('.book-pagination [rel=next]').click();
      await expect(page).toHaveURL(root + 'representation-learning/');
      await page.goBack();
      await expect(page).toHaveURL(root + 'transformers/#kv-cache');
      if (width <= 1000) {
        await page.locator('.knowledge-menu > summary').click();
        assert.equal(
          await page
            .locator('.knowledge-menu > summary > span')
            .first()
            .evaluate((node) => getComputedStyle(node).transform),
          'none',
        );
        await page.locator('[data-chapter=transformers] > summary').focus();
        await page.keyboard.press('Escape');
        await expect(page.locator('.knowledge-menu > summary')).toBeFocused();
      }
      report.interactions.push({
        width,
        theme,
        checks:
          'collapse/reopen, one chapter, keyboard, concept focus, reload, next/back, upright menu label, Escape',
      });
    }
  }
  await page.setViewportSize({ width: 1440, height: 960 });
  for (const section of deepLearning.sections) {
    await page.goto(root + section.slug + '/');
    await expect(page.locator('h1')).toHaveText(section.title);
    await expect(page.locator('.knowledge-concept')).toHaveCount(
      section.concepts.length,
    );
    await expect(
      page.locator('[data-chapter-link=' + section.slug + ']'),
    ).toBeInViewport({ ratio: 1 });
  }
  for (const [fragment, destination] of [
    ['start-here', 'deep-learning-foundations/'],
    ['cnns', 'convolutional-neural-networks/'],
    ['training', 'training-deep-networks/'],
    ['attention--self-attention', 'attention/#self-attention'],
  ]) {
    await page.goto(root + '#' + fragment);
    await expect(page).toHaveURL(root + destination);
  }
  for (const [term, section, anchor] of [
    [
      'Automatic Differentiation',
      'backpropagation',
      'automatic-differentiation',
    ],
    ['Layer Normalization', 'normalization', 'layer-normalization'],
    ['KV Cache', 'transformers', 'kv-cache'],
    ['DDPM', 'diffusion-models', 'ddpm'],
    ['Grad-CAM', 'interpretability', 'grad-cam'],
    ['GPU Inference', 'production-deep-learning', 'gpu-inference'],
  ]) {
    await page.goto(
      base + 'search/?q=' + encodeURIComponent(term) + '&topic=Deep+Learning',
    );
    const result = page
      .locator('.search-result')
      .filter({
        has: page.locator(
          'a[href$="/deep-learning/' + section + '/#' + anchor + '"]',
        ),
      })
      .first();
    await expect(result.locator('[data-concept-status=planned]')).toHaveText(
      'Article in preparation',
    );
    await result.locator('a').click();
    await expect(page.locator('#' + anchor)).toBeVisible();
  }
  await page.goto(root + 'representation-learning/');
  await page.locator('#what-is-representation-learning h3 a').click();
  await expect(page).toHaveURL(
    base + 'articles/neural-networks-learn-representations/',
  );
  await expect(page.locator('h1')).toHaveText(
    'Simple operations. Learned representations.',
  );
  await page.goto(root + 'attention/');
  await page
    .locator('[data-related-article=attention-paper-to-product]')
    .click();
  await expect(page.locator('.research-editorial-note')).toBeVisible();
  await expect(page.locator('.breadcrumb')).toContainText(
    'Research Papers & Insights',
  );
  await page.goto(base + 'topics/machine-learning/');
  await expect(page.locator('.book-status')).toContainText('404 concepts');
  await page.locator('.book-start').click();
  await expect(page.locator('#what-is-machine-learning h3 a')).toHaveAttribute(
    'href',
    '/blogs/articles/what-machines-learn/',
  );
  await page.goto(root + 'production-deep-learning/');
  await page.locator('footer').scrollIntoViewIfNeeded();
  assert(
    await page
      .locator('.book-sidebar')
      .evaluate(
        (node) =>
          node.getBoundingClientRect().bottom <=
          document.querySelector('footer').getBoundingClientRect().top,
      ),
  );
  const plainContext = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 960 },
  });
  const plain = await plainContext.newPage();
  await plain.goto(root + 'transformers/');
  await expect(plain.locator('.knowledge-concept')).toHaveCount(21);
  await plain.locator('[data-chapter=attention] > summary').click();
  await expect(
    plain.locator('[data-chapter=attention] .knowledge-subtopics'),
  ).toBeVisible();
  await plain.locator('[data-chapter-link=attention]').click();
  await expect(plain.locator('h1')).toHaveText('Attention');
  await plainContext.close();
  report.interactions.push({
    checks:
      '32 routes; 474 rows; six planned-concept searches; legacy links; published article and Research provenance; ML regression; footer; no-JavaScript navigation',
  });
  assert.deepEqual(report.errors, []);
  assert.deepEqual(
    report.accessibility.filter((item) => item.violations.length),
    [],
  );
  console.log(
    'Deep Learning QA passed: ' +
      report.responsive.length +
      ' responsive states, ' +
      report.accessibility.length +
      ' accessibility audits, all 32 sections, navigation, concept search, related-reading provenance, and no-JavaScript fallback.',
  );
} finally {
  await writeFile(output + '/report.json', JSON.stringify(report, null, 2));
  await browser.close();
}

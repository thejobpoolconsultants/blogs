import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { siteConfig } from '../site.config.mjs';
import { learningPaths } from '../src/data/learning-paths.ts';
import { recommendProgram } from '../src/data/programs.ts';

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const base = 'http://127.0.0.1:4321/blogs/';
const report = {
  layouts: [],
  accessibility: [],
  interactions: [],
  external: [],
  errors: [],
};
page.on('pageerror', (error) => report.errors.push(error.message));
await mkdir('artifacts/programs', { recursive: true });
try {
  const example = {
    topic: 'agentic-ai',
    title: 'Tool-using agents',
    slug: 'tool-agents',
    tags: [],
    subtopics: [],
  };
  assert.equal(recommendProgram(example).number, '01');
  assert.equal(
    recommendProgram({
      ...example,
      title: 'LLM inference optimization for latency and throughput',
    }).number,
    '03',
  );
  assert.equal(
    recommendProgram({
      ...example,
      topic: 'mlops-llmops',
      title: 'Operating production platforms',
      slug: 'production-platforms',
    }).number,
    '06',
  );
  report.interactions.push(
    'Inference optimization recommends Program 03, agents Program 01, and MLOps Program 06.',
  );
  for (const width of [320, 375, 600, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base);
    await page.evaluate(() => document.fonts.ready);
    const layout = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      columns: getComputedStyle(
        document.querySelector('.program-grid'),
      ).gridTemplateColumns.split(' ').length,
      heights: [...document.querySelectorAll('.program-card')].map(
        (node) => node.getBoundingClientRect().height,
      ),
    }));
    assert(
      layout.scrollWidth <= width + 1,
      `Overflow at ${width}: ${layout.scrollWidth}`,
    );
    assert.equal(layout.columns, width <= 600 ? 1 : width <= 1100 ? 2 : 3);
    if (width > 600)
      assert(Math.max(...layout.heights) - Math.min(...layout.heights) < 2);
    report.layouts.push(layout);
  }
  assert.equal(await page.locator('.program-card').count(), 9);
  assert.equal(await page.locator('.transition-program').count(), 1);
  assert.equal(
    await page.locator('.path-grid .path-card').count(),
    learningPaths.length,
  );
  assert(
    await page
      .locator('.path-grid')
      .evaluate((node) =>
        Boolean(
          node.compareDocumentPosition(document.querySelector('#programs')) &
          Node.DOCUMENT_POSITION_FOLLOWING,
        ),
      ),
  );
  const actions = page.locator(
    '.career-hero a, .programs-section a, .guidance-section a, .updates-section a, .header-tools a, .footer a, .mobile-menu a',
  );
  for (const link of await actions.all()) {
    const href = await link.getAttribute('href');
    if (href?.startsWith('https:')) {
      assert.equal(await link.getAttribute('target'), '_blank', href);
      assert((await link.getAttribute('rel')).includes('noopener'), href);
      assert((await link.getAttribute('rel')).includes('noreferrer'), href);
    }
  }
  assert.equal(
    await page
      .getByRole('link', { name: /Get Career Guidance/ })
      .getAttribute('href'),
    siteConfig.enquiryForm,
  );
  assert.equal(
    await page
      .getByRole('link', { name: /Register for Free Updates/ })
      .getAttribute('href'),
    siteConfig.enquiryForm,
  );
  assert.equal(
    await page
      .locator('.programs-section a')
      .filter({ hasText: 'Enquire About This Program' })
      .count(),
    10,
  );
  for (const link of await page
    .locator('.programs-section a')
    .filter({ hasText: 'Enquire About This Program' })
    .all()) {
    assert.equal(await link.getAttribute('href'), siteConfig.enquiryForm);
  }
  await page.getByRole('link', { name: /Explore Our Programs/ }).focus();
  assert.notEqual(
    await page
      .locator(':focus')
      .evaluate((node) => getComputedStyle(node).outlineStyle),
    'none',
  );
  await page.keyboard.press('Enter');
  await page.waitForURL(base + '#programs');
  report.interactions.push(
    'Hero program action works with keyboard; all program and guidance links use central URLs and safe new tabs.',
  );

  for (const theme of ['light', 'dark']) {
    await page.evaluate((value) => {
      localStorage.setItem('publication-theme', value);
    }, theme);
    for (const [route, width] of [
      ['', 1440],
      ['', 375],
      ['articles/agent-isnt-one-model/', 1440],
      ['articles/agent-isnt-one-model/', 375],
    ]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(base + route);
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      report.accessibility.push({
        theme,
        route,
        width,
        violations: result.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      });
      assert.equal(
        result.violations.length,
        0,
        `Accessibility: ${theme} ${route} ${width}`,
      );
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      );
      if (!route) {
        await page.evaluate(() => document.activeElement?.blur());
        await page.screenshot({
          path: `artifacts/programs/home-${theme}-${width}.png`,
          fullPage: true,
        });
        await page.locator('.career-hero').screenshot({
          path: `artifacts/programs/hero-${theme}-${width}.png`,
        });
        await page.locator('#programs').screenshot({
          path: `artifacts/programs/programs-${theme}-${width}.png`,
        });
        await page.locator('.guidance-section').screenshot({
          path: `artifacts/programs/guidance-${theme}-${width}.png`,
        });
      } else {
        assert.equal(
          await page.locator('.program-recommendation h2').textContent(),
          'Generative AI & Agentic Systems Engineering',
        );
        assert.equal(
          await page
            .locator('.program-recommendation a')
            .first()
            .getAttribute('href'),
          siteConfig.enquiryForm,
        );
      }
    }
  }
  await page.goto(base + 'articles/what-machines-learn/');
  assert.equal(
    await page.locator('.program-recommendation h2').textContent(),
    'AI Career Transition Program',
  );
  await page.goto(base + 'articles/production-rag-architecture/');
  assert.equal(
    await page.locator('.program-recommendation h2').textContent(),
    'Generative AI & Agentic Systems Engineering',
  );
  report.interactions.push(
    'Article recommendations match agents and RAG to Program 01, and foundations to the transition pathway.',
  );
  await page.goto(base);
  await page.locator('.mobile-menu summary').click();
  await page.getByRole('button', { name: 'Close navigation' }).waitFor();
  await page
    .getByRole('navigation', { name: 'Mobile', exact: true })
    .getByRole('link', { name: 'Programs', exact: true })
    .click();
  // The drawer closes on navigation, including a same-document program anchor.
  await page.waitForFunction(
    () => !document.querySelector('.mobile-menu').open,
  );
  assert(!(await page.locator('main').evaluate((node) => node.inert)));
  report.interactions.push(
    'Mobile Programs navigation closes the drawer and restores page access.',
  );
  await page.goto(base + 'search/?q=retrieval');
  await page.locator('.search-result').first().waitFor();
  assert((await page.locator('.search-result').count()) > 0);
  report.interactions.push(
    'Production Pagefind search still returns article results.',
  );
  const plain = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 900 },
  });
  const nojs = await plain.newPage();
  await nojs.goto(base + '#programs');
  assert.equal(await nojs.locator('.program-card').count(), 9);
  await plain.close();
  report.interactions.push(
    'Programs and external actions remain available without JavaScript.',
  );

  for (const href of [
    siteConfig.mainSite,
    new URL(siteConfig.programsPath, siteConfig.mainSite).href,
    siteConfig.enquiryForm,
  ]) {
    try {
      const response = await context.request.get(href, { timeout: 20000 });
      const body = await response.text();
      const entry = {
        href,
        status: response.status(),
        finalUrl: response.url(),
      };
      if (href.endsWith(siteConfig.programsPath)) {
        const anchors = [];
        await page.goto(base);
        for (const link of await page
          .locator('.program-card-actions .text-link')
          .all()) {
          const destination = new URL(await link.getAttribute('href'));
          assert.equal(destination.pathname, siteConfig.programsPath);
          if (destination.hash) {
            const id = destination.hash.slice(1);
            assert(
              body.includes(`id="${id}"`),
              `Missing live program anchor: ${id}`,
            );
            anchors.push(id);
          }
        }
        entry.anchors = anchors;
      }
      if (href === siteConfig.enquiryForm) {
        assert(response.url().startsWith('https://docs.google.com/forms/'));
        assert(
          !body.includes('This form is no longer accepting responses'),
          'Form closed',
        );
      }
      assert(response.ok(), `External link ${href}: ${response.status()}`);
      report.external.push(entry);
    } catch (error) {
      report.external.push({ href, error: error.message });
    }
  }
  assert.equal(
    report.external.filter((entry) => entry.error).length,
    0,
    'External verification failed; see report',
  );
  assert.equal(report.errors.length, 0, 'Browser runtime errors');
  console.log(JSON.stringify(report, null, 2));
} finally {
  await writeFile(
    'artifacts/programs/qa.json',
    JSON.stringify(report, null, 2),
  );
  await browser.close();
}

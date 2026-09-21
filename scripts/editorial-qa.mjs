import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import {
  editorialQuotes,
  oneBigIdeaLibrary,
  homepageEditorial,
} from '../src/data/editorial-quotes.ts';
import { topics } from '../src/data/topics.ts';

const base = 'http://127.0.0.1:4321/blogs/';
const output = 'artifacts/editorial';
await mkdir(output, { recursive: true });
assert.equal(oneBigIdeaLibrary.length, 12);
assert.equal(new Set(oneBigIdeaLibrary).size, 12);
assert.equal(topics.length, 15);
assert.equal(homepageEditorial.bigIdea, 'contextDesign');
const normalize = (text) => text.replace(/\s+/g, ' ').trim();
const selected = editorialQuotes[homepageEditorial.bigIdea].lines.join(' ');
const routes = [
  '',
  'learn/',
  'about/',
  'ai-evolution/',
  'research/',
  'architectures/',
  'build/',
  ...topics.map((topic) => `topics/${topic.id}/`),
  'tags/evaluation/',
  'tags/embeddings/',
  'tags/rag/',
  'tags/context-engineering/',
  'articles/how-rag-actually-works/',
  'articles/production-rag-architecture/',
];
const audited = new Set([
  '',
  'topics/nlp/',
  'topics/generative-ai/',
  'learn/',
  'about/',
  'articles/how-rag-actually-works/',
]);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const report = {
  responsive: [],
  accessibility: [],
  screenshots: [],
  errors: [],
};
page.on('pageerror', (error) => report.errors.push(error.message));
page.on('response', (response) => {
  if (response.url().startsWith(base) && response.status() >= 400)
    report.errors.push(response.url() + ': ' + response.status());
});
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
          `${route} ${width} ${theme}: overflow`,
        );
        const cramped = await page
          .locator('.statement-copy, .insight-copy')
          .evaluateAll((nodes) =>
            nodes
              .filter((node) => {
                const style = getComputedStyle(node);
                return (
                  parseFloat(style.fontSize) < 16 ||
                  node.scrollWidth > node.clientWidth + 1
                );
              })
              .map((node) => node.textContent),
          );
        assert.deepEqual(cramped, []);
        assert.equal(
          await page
            .locator(
              '.editorial-statement blockquote, .topic-insight blockquote, .editorial-statement cite, .topic-insight cite',
            )
            .count(),
          0,
        );
        assert.equal(
          await page.locator('footer a[href="/blogs/rss/"]').count(),
          0,
        );
        assert(
          (await page.locator('.footer-bottom').innerText()).includes(
            editorialQuotes.footer.lines.join(' '),
          ),
        );
        if (route === '') {
          assert.equal(await page.locator('.quote-section').count(), 1);
          assert.equal(
            normalize(await page.locator('.quote-section h2').innerText()),
            selected,
          );
          assert.equal(
            normalize(await page.locator('.hero .statement-copy').innerText()),
            editorialQuotes.hero.lines.join(' '),
          );
          await page.screenshot({
            path: `${output}/home-${width}-${theme}.png`,
          });
          await page
            .locator('.quote-section')
            .screenshot({ path: `${output}/big-idea-${width}-${theme}.png` });
          await page.reload();
          assert.equal(
            normalize(await page.locator('.quote-section h2').innerText()),
            selected,
          );
        }
        if (audited.has(route)) {
          const result = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
            .analyze();
          report.accessibility.push({
            route,
            width,
            theme,
            violations: result.violations.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => n.target),
            })),
          });
        }
        if (
          ['topics/nlp/', 'topics/generative-ai/', 'learn/', 'about/'].includes(
            route,
          )
        ) {
          await page.screenshot({
            path: `${output}/${route.replaceAll('/', '-')}${width}-${theme}.png`,
          });
          report.screenshots.push({ route, width, theme });
        }
        report.responsive.push({ route, width, theme });
      }
    }
  }
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base);
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
  }
  // Preserve the three article titles explicitly called out in the request.
  for (const [slug, expected] of [
    ['agent-isnt-one-model', editorialQuotes.agentHeadline.lines.join(' ')],
    ['how-rag-actually-works', editorialQuotes.rag.lines.join(' ')],
    [
      'how-machines-represent-words',
      editorialQuotes.representation.lines.join(' '),
    ],
  ]) {
    await page.goto(base + 'articles/' + slug + '/');
    assert.equal(normalize(await page.locator('h1').innerText()), expected);
  }
  // Components are explicitly authored into only the two relevant article bodies.
  const articleFiles = (
    await readdir('src/content/articles', { recursive: true })
  ).filter((file) => file.endsWith('.mdx'));
  const articleSources = await Promise.all(
    articleFiles.map((file) =>
      readFile('src/content/articles/' + file, 'utf8'),
    ),
  );
  assert.equal(
    articleSources.filter((source) => source.includes('<TopicInsight')).length,
    2,
  );
  const noJsContext = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 900 },
  });
  const noJsPage = await noJsContext.newPage();
  await noJsPage.goto(base);
  assert.equal(
    normalize(await noJsPage.locator('.quote-section h2').innerText()),
    selected,
  );
  assert.deepEqual(report.errors, []);
  assert(
    report.accessibility.every((audit) => audit.violations.length === 0),
    'Accessibility findings: see artifacts/editorial/qa.json',
  );
  console.log(
    JSON.stringify(
      {
        responsiveChecks: report.responsive.length + 3,
        accessibilityAudits: report.accessibility.length,
        fixedQuote: true,
        retainedArticleTitles: 3,
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

import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const base = 'http://127.0.0.1:4321/blogs/';
await mkdir('artifacts/redesign', { recursive: true });
const shots = [
  ['home-1440-light', '', 1440, 900, 'light'],
  ['home-1440-dark', '', 1440, 900, 'dark'],
  ['home-1920-dark', '', 1920, 1080, 'dark'],
  ['home-375-dark', '', 375, 812, 'dark'],
  ...['machine-learning', 'nlp', 'generative-ai', 'agentic-ai'].map((topic) => [
    topic + '-1440',
    'topics/' + topic + '/',
    1440,
    900,
    'dark',
  ]),
  ['article-1440', 'articles/agent-isnt-one-model/', 1440, 900, 'dark'],
  ['article-375', 'articles/agent-isnt-one-model/', 375, 812, 'dark'],
  ['search-1440', 'search/?q=attention', 1440, 900, 'dark'],
  ['search-375', 'search/?q=attention', 375, 812, 'dark'],
  ['research-1440', 'research/', 1440, 900, 'dark'],
];
const report = [];
try {
  for (const [name, route, width, height, theme] of shots) {
    await page.setViewportSize({ width, height });
    await page.emulateMedia({ colorScheme: theme });
    await page.goto(base + route);
    await page.evaluate(() => document.fonts.ready);
    if (route.startsWith('search'))
      await page.locator('.search-result').first().waitFor();
    await page.screenshot({ path: `artifacts/redesign/${name}.png` });
    await page.screenshot({
      path: `artifacts/redesign/${name}-full.png`,
      fullPage: true,
    });
    report.push({
      name,
      route,
      width,
      height,
      theme,
      metrics: await page.evaluate(() => ({
        pageWidth: document.documentElement.scrollWidth,
        background: getComputedStyle(document.body).backgroundColor,
        headingFont: getComputedStyle(document.querySelector('h1')).fontFamily,
        requests: performance.getEntriesByType('resource').map((r) => ({
          name: r.name.split('/').at(-1),
          bytes: r.transferSize,
          type: r.initiatorType,
        })),
      })),
    });
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  try {
    await page.goto('https://the-job-pool-consultants-website.vercel.app', {
      timeout: 30000,
    });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: 'artifacts/redesign/main-site-reference.png',
    });
    report.push({ mainSiteTitle: await page.title(), mainSiteURL: page.url() });
  } catch (error) {
    report.push({ mainSiteUnavailable: error.message });
  }
  await writeFile(
    'artifacts/redesign/screenshots.json',
    JSON.stringify(report, null, 2),
  );
  console.log(
    JSON.stringify(
      report.map(({ metrics, ...r }) => ({
        ...r,
        pageWidth: metrics?.pageWidth,
      })),
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}

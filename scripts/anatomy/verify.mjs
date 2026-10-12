import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';
import { retrievalSamples } from '../../src/data/retrieval-demo.ts';
import { siteConfig } from '../../site.config.mjs';

const execFileAsync = promisify(execFile);
const skillRoot =
  process.env.ANATOMY_SKILL_DIR ||
  join(process.env.USERPROFILE || '', '.claude', 'skills', 'anatomy');
const manifest = JSON.parse(
  await readFile('src/data/generated/anatomy-manifest.json', 'utf8'),
);
const report = {
  geometry: manifest.map(({ id, parts, geometryProblems }) => ({
    id,
    parts,
    geometryProblems,
  })),
  assets: [],
  lines: [],
  layout: [],
  accessibility: [],
  interactions: [],
  external: [],
  errors: [],
};
const dest = 'artifacts/anatomy';
await mkdir(dest, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();
const base = 'http://127.0.0.1:4321/blogs/';
page.on('pageerror', (error) => report.errors.push(error.message));
try {
  assert(
    report.geometry.every(
      (entry) => entry.parts >= 40 && entry.geometryProblems === 0,
    ),
    'Run the geometry build with --audit before verification.',
  );
  for (const { id } of manifest) {
    for (const theme of ['light', 'dark']) {
      const metadata = await sharp(
        `public/illustrations/anatomy/${id}-${theme}.svg`,
      ).metadata();
      assert.equal(metadata.format, 'svg');
      assert(metadata.width > 0 && metadata.height > 0);
      report.assets.push({
        id,
        theme,
        xml: 'valid',
        width: metadata.width,
        height: metadata.height,
      });
    }
  }
  const lineJobs = manifest.flatMap(({ id }) =>
    ['light', 'dark'].map((theme) => ({ id, theme })),
  );
  for (let start = 0; start < lineJobs.length; start += 2) {
    const results = await Promise.allSettled(
      lineJobs.slice(start, start + 2).map(async ({ id, theme }) => {
        const { stdout } = await execFileAsync(
          process.execPath,
          [
            join(skillRoot, 'scripts', 'lines.mjs'),
            resolve(`${dest}/${id}-${theme}.html`),
            '--wait',
            '100',
          ],
          { timeout: 60000 },
        );
        assert(stdout.includes('line ends: 0'), stdout);
        return { id, theme, status: 'passed', output: stdout.trim() };
      }),
    );
    for (const result of results) {
      if (result.status === 'rejected') throw result.reason;
      report.lines.push(result.value);
    }
  }
  console.log('All 20 standalone line-end checks passed.');
  for (const width of [320, 390, 600, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base);
    await page.locator('#sample-question:enabled').waitFor();
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      `Overflow at ${width}`,
    );
    assert.equal(await page.locator('.program-illustration').count(), 9);
    assert.equal(await page.locator('.transition-program').count(), 1);
    assert.equal(
      await page.locator('.career-hero + .transition-feature').count(),
      1,
      'Entry program must directly follow hero',
    );
    const columns = await page
      .locator('.program-grid')
      .evaluate(
        (node) => getComputedStyle(node).gridTemplateColumns.split(' ').length,
      );
    assert.equal(columns, width <= 600 ? 1 : width <= 1100 ? 2 : 3);
    report.layout.push({ width, columns, overflow: false });
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  const demo = page.locator('[data-retrieval-demo]');
  await page.locator('#sample-question:enabled').waitFor();
  for (let index = 0; index < retrievalSamples.length; index++) {
    await page.locator('#sample-question').selectOption(String(index));
    const sample = retrievalSamples[index];
    await page.waitForFunction(
      (id) =>
        document.querySelector('[data-retrieval-demo]').dataset.document === id,
      sample.id,
    );
    assert.equal(
      await demo.locator('[data-answer]').textContent(),
      sample.answer,
    );
    assert.equal(
      await demo.locator('[data-document-excerpt]').textContent(),
      sample.excerpt,
    );
    assert.equal(Number(await demo.getAttribute('data-position')), index / 2);
    const screen = await demo
      .locator(`[data-screen-document="${index}"]`)
      .evaluate((node) => getComputedStyle(node).opacity);
    assert.equal(screen, '1');
    const file = `${dest}/hero-choice-${sample.id}.png`;
    await demo.screenshot({ path: file });
  }
  report.interactions.push(
    'Every question, scanner position, selected source, terminal display and answer agrees with the same deterministic sample model.',
  );
  await page.locator('#sample-question').selectOption('0');
  await page.locator('#sample-question').selectOption('2');
  await page.waitForFunction(
    () =>
      document.querySelector('[data-retrieval-demo]').dataset.document === 'C',
  );
  assert.equal(
    await demo.locator('[data-answer]').textContent(),
    retrievalSamples[2].answer,
  );
  await page.locator('#sample-question').focus();
  await page.keyboard.press('ArrowUp');
  await page.waitForFunction(
    () =>
      document.querySelector('[data-retrieval-demo]').dataset.document === 'B',
  );
  report.interactions.push(
    'Rapid retargeting and native keyboard selection remain consistent.',
  );
  await page.getByRole('button', { name: 'Play tour', exact: true }).click();
  await page.waitForFunction(
    () =>
      document.querySelector('[data-retrieval-demo]').dataset.touring ===
      'true',
  );
  await page.getByRole('button', { name: 'Pause tour', exact: true }).click();
  await page.waitForFunction(
    () =>
      document.querySelector('[data-retrieval-demo]').dataset.animating ===
      'false',
  );
  await page.getByRole('button', { name: 'Play tour', exact: true }).click();
  await page.locator('.updates-section').scrollIntoViewIfNeeded();
  await page.waitForFunction(
    () =>
      document.querySelector('[data-retrieval-demo]').dataset.animating ===
      'false',
  );
  const pausedPosition = await demo.getAttribute('data-position');
  await page.waitForTimeout(150);
  assert.equal(await demo.getAttribute('data-position'), pausedPosition);
  report.interactions.push(
    'The tour can be paused and its animation stops offscreen.',
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base);
  await page.locator('#sample-question:enabled').waitFor();
  await page.locator('#sample-question').selectOption('2');
  assert.equal(await demo.getAttribute('data-document'), 'C');
  assert.equal(await demo.getAttribute('data-touring'), 'false');
  assert(
    await page.getByRole('button', { name: 'Motion reduced' }).isDisabled(),
  );
  report.interactions.push(
    'Reduced motion goes directly to the matching source and answer, with no idle tour.',
  );

  for (const theme of ['light', 'dark']) {
    await page.evaluate(
      (value) => localStorage.setItem('publication-theme', value),
      theme,
    );
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(base);
      await page.evaluate(() => document.fonts.ready);
      for (const art of await page.locator(`.anatomy-art-${theme}`).all()) {
        await art.scrollIntoViewIfNeeded();
        await art.evaluate(async (image) => {
          await image.decode();
          if (!image.naturalWidth || !image.naturalHeight)
            throw new Error(`SVG did not decode: ${image.src}`);
        });
      }
      await page.locator('.career-hero').scrollIntoViewIfNeeded();
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      report.accessibility.push({
        theme,
        width,
        violations: result.violations.map(({ id, nodes }) => ({
          id,
          targets: nodes.map((node) => node.target),
        })),
      });
      assert.equal(
        result.violations.length,
        0,
        `${theme} ${width} accessibility`,
      );
      await page.evaluate(() => {
        if (document.activeElement instanceof HTMLElement)
          document.activeElement.blur();
      });
      await page.screenshot({
        path: `${dest}/page-${theme}-${width}.png`,
        fullPage: true,
      });
      await page
        .locator('.career-hero')
        .screenshot({ path: `${dest}/hero-${theme}-${width}.png` });
      await page
        .locator('.transition-feature')
        .screenshot({ path: `${dest}/transition-${theme}-${width}.png` });
      await page
        .locator('.program-grid')
        .screenshot({ path: `${dest}/program-grid-${theme}-${width}.png` });
      assert.equal(
        await page.locator(`.anatomy-art-${theme}:visible`).count(),
        9,
      );
    }
  }
  const touch = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
    reducedMotion: 'reduce',
  });
  const touchPage = await touch.newPage();
  await touchPage.goto(base);
  await touchPage.locator('#sample-question:enabled').waitFor();
  await touchPage.locator('#sample-question').tap();
  await touchPage.locator('#sample-question').selectOption('1');
  assert.equal(
    await touchPage
      .locator('[data-retrieval-demo]')
      .getAttribute('data-document'),
    'B',
  );
  await touch.close();
  const plain = await browser.newContext({
    viewport: { width: 390, height: 844 },
    javaScriptEnabled: false,
  });
  const nojs = await plain.newPage();
  await nojs.goto(base);
  assert.equal(
    await nojs.locator('[data-answer]').textContent(),
    retrievalSamples[0].answer,
  );
  assert.equal(await nojs.locator('.program-illustration').count(), 9);
  assert.equal(await nojs.locator('.demo-controls:visible').count(), 0);
  await nojs.locator('.anatomy-art-light').first().scrollIntoViewIfNeeded();
  await nojs
    .locator('.anatomy-art-light')
    .first()
    .evaluate((image) => image.decode());
  assert.equal(
    await nojs
      .getByRole('link', { name: /Get Career Guidance/ })
      .getAttribute('href'),
    siteConfig.enquiryForm,
  );
  await plain.close();
  report.interactions.push(
    'Touch selection works; without JavaScript the default source, answer, illustrations and all enquiry links remain readable.',
  );

  const gallery = await browser.newContext({
    viewport: { width: 720, height: 740 },
    deviceScaleFactor: 4,
  });
  const artPage = await gallery.newPage();
  for (const theme of ['light', 'dark']) {
    const tiles = [];
    for (const { id } of manifest) {
      await artPage.goto(
        pathToFileURL(resolve(`${dest}/${id}-${theme}.html`)).href,
      );
      const svg = artPage.locator('.iso-svg').first();
      const high = `${dest}/${id}-${theme}-4x.png`;
      await svg.screenshot({ path: high });
      const tile = await sharp(high).resize(600, 380).toBuffer();
      tiles.push({
        input: tile,
        left: (tiles.length % 2) * 600,
        top: Math.floor(tiles.length / 2) * 380,
      });
    }
    await sharp({
      create: {
        width: 1200,
        height: 1900,
        channels: 4,
        background: theme === 'light' ? '#fefdf9' : '#111a2e',
      },
    })
      .composite(tiles)
      .png()
      .toFile(`${dest}/figures-${theme}-contact.png`);
  }
  await gallery.close();
  for (const href of [
    siteConfig.mainSite,
    new URL(siteConfig.programsPath, siteConfig.mainSite).href,
    siteConfig.enquiryForm,
  ]) {
    const response = await context.request.get(href, { timeout: 20000 });
    assert(response.ok(), `External destination ${href}: ${response.status()}`);
    report.external.push({
      href,
      status: response.status(),
      destination: response.url(),
    });
  }
  assert.equal(report.errors.length, 0);
  console.log(JSON.stringify(report, null, 2));
} finally {
  await writeFile(`${dest}/verification.json`, JSON.stringify(report, null, 2));
  await browser.close();
}

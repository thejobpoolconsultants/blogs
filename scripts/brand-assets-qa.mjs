import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const directory = 'public/brand/thejobpoolconsultants/knowledge-hub';
const manifest = JSON.parse(
  await readFile(directory + '/asset-manifest.json', 'utf8'),
);
for (const original of manifest.originals) {
  const data = await readFile(directory + '/' + original.file);
  assert.equal(
    createHash('sha256').update(data).digest('hex'),
    original.sha256,
  );
}
assert.deepEqual(
  (await readdir('logo')).filter((file) => /\.(png|jpe?g|webp)$/i.test(file)),
  [],
);
for (const asset of manifest.production) {
  const metadata = await sharp(directory + '/' + asset.file).metadata();
  assert.equal(metadata.width, asset.width);
  assert.equal(metadata.height, asset.height);
  if (asset.file.startsWith('logos/') || asset.file.startsWith('emblems/'))
    assert(metadata.hasAlpha);
}
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const base = 'http://127.0.0.1:4321/blogs/';
async function loadLazyImages() {
  for (const img of await page.locator('img[loading="lazy"]').all()) {
    if (await img.isVisible()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((node) => node.decode());
    }
  }
  await page.evaluate(() => window.scrollTo(0, 0));
}
const report = {
  originalsVerified: manifest.originals.length,
  productionVerified: manifest.production.length,
  responsive: [],
  accessibility: [],
  screenshots: [],
  errors: [],
};
page.on('pageerror', (error) => report.errors.push(error.message));
page.on('response', (response) => {
  if (response.url().startsWith(base) && response.status() >= 400)
    report.errors.push(response.url() + ' ' + response.status());
});
await mkdir('artifacts/brand-assets', { recursive: true });
try {
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    for (const width of [320, 375, 390, 430, 768, 1024, 1440, 1920]) {
      await page.setViewportSize({
        width,
        height: width === 1920 ? 1080 : width < 500 ? 812 : 900,
      });
      for (const route of [
        '',
        'about/',
        'topics/',
        'research/',
        'articles/agent-isnt-one-model/',
      ]) {
        await page.goto(base + route);
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator('h1').count(), 1);
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
          `${theme} ${width} ${route}: overflow`,
        );
        const logo = page.locator(
          width <= 800
            ? '.masthead .brand-mobile img'
            : '.masthead .brand-desktop img:visible',
        );
        await logo.evaluate((img) => img.decode());
        assert(await logo.isVisible());
        const box = await logo.boundingBox();
        assert(box.width > 0 && box.height > 0);
        assert(!(await logo.getAttribute('src')).includes('/archive/'));
        report.responsive.push({ theme, width, route });
        if ([375, 1440].includes(width)) {
          await loadLazyImages();
          const audit = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
            .analyze();
          report.accessibility.push({
            theme,
            width,
            route,
            violations: audit.violations.map((v) => ({
              id: v.id,
              impact: v.impact,
              nodes: v.nodes.map((n) => n.target),
            })),
          });
          const name =
            (route ? route.split('/')[0] : 'home') + '-' + width + '-' + theme;
          await page.screenshot({ path: `artifacts/brand-assets/${name}.png` });
          await page.screenshot({
            path: `artifacts/brand-assets/${name}-full.png`,
            fullPage: true,
          });
          report.screenshots.push(name);
        }
        if (route === '') {
          assert.equal(
            await page
              .locator('meta[property="og:image"]')
              .getAttribute('content'),
            'https://thejobpoolconsultants.github.io/blogs/brand/thejobpoolconsultants/knowledge-hub/social/thejobpoolconsultants-knowledge-hub-social-card.png',
          );
          if ([768, 1920].includes(width) && theme === 'dark')
            await page.screenshot({
              path: `artifacts/brand-assets/home-${width}-dark.png`,
            });
        }
        if (route.startsWith('articles/'))
          assert(
            (
              await page
                .locator('meta[property="og:image"]')
                .getAttribute('content')
            ).endsWith('/social/agent-isnt-one-model.png'),
          );
        const invalidImages = await page
          .locator('img')
          .evaluateAll((images) =>
            images
              .filter(
                (img) =>
                  (!img.getAttribute('alt') &&
                    img.getAttribute('alt') !== '') ||
                  !img.getAttribute('width') ||
                  !img.getAttribute('height'),
              )
              .map((img) => img.outerHTML),
          );
        assert.deepEqual(invalidImages, []);
      }
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  await loadLazyImages();
  await page
    .locator('.masthead')
    .screenshot({ path: 'artifacts/brand-assets/header-desktop.png' });
  await page
    .locator('.publication-feature')
    .screenshot({ path: 'artifacts/brand-assets/knowledge-hub-feature.png' });
  await page
    .locator('footer')
    .screenshot({ path: 'artifacts/brand-assets/footer-desktop.png' });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(base);
  await loadLazyImages();
  await page
    .locator('.publication-feature')
    .screenshot({ path: 'artifacts/brand-assets/knowledge-hub-mobile.png' });
  assert(
    (
      await page
        .locator('.publication-feature img')
        .evaluate((img) => img.currentSrc)
    ).endsWith('-visual-mobile.webp'),
  );
  await page.locator('.mobile-menu summary').click();
  await page.getByRole('button', { name: 'Close navigation' }).waitFor();
  await page.screenshot({ path: 'artifacts/brand-assets/mobile-menu.png' });
  await page.keyboard.press('Escape');
  assert(!(await page.locator('.mobile-menu').evaluate((node) => node.open)));
  assert.deepEqual(report.errors, []);
  assert(
    report.accessibility.every((audit) => audit.violations.length === 0),
    'Accessibility issues: see report',
  );
  console.log(
    JSON.stringify(
      {
        originalsVerified: report.originalsVerified,
        productionVerified: report.productionVerified,
        responsiveChecks: report.responsive.length,
        accessibilityAudits: report.accessibility.length,
        errors: report.errors,
      },
      null,
      2,
    ),
  );
} finally {
  await writeFile(
    'artifacts/brand-assets/qa.json',
    JSON.stringify(report, null, 2),
  );
  await browser.close();
}

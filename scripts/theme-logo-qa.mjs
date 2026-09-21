import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const base = 'http://127.0.0.1:4321/blogs/';
const output = 'artifacts/theme-logos';
await mkdir(output, { recursive: true });
const report = { states: [], switching: [], errors: [] };
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
page.on('pageerror', (error) => report.errors.push(error.message));
page.on('response', (response) => {
  if (response.url().startsWith(base) && response.status() >= 400)
    report.errors.push(response.url() + ': ' + response.status());
});

async function verifyLogo(theme, width) {
  await page.waitForFunction(
    (expected) => document.documentElement.dataset.theme === expected,
    theme,
  );
  assert.equal(await page.locator('html').getAttribute('data-theme'), theme);
  for (const region of ['.masthead', 'footer']) {
    const visible = page.locator(`${region} .brand-desktop img:visible`);
    if (width <= 800 && region === '.masthead') {
      assert.equal(await visible.count(), 0);
      assert(await page.locator('.brand-mobile').isVisible());
      assert.equal(
        await page.locator('.brand-mobile strong').innerText(),
        'TheJobPoolConsultants',
      );
      continue;
    }
    assert.equal(await visible.count(), 1);
    await visible.scrollIntoViewIfNeeded();
    await visible.evaluate((image) => image.decode());
    assert.equal(
      await visible.getAttribute('alt'),
      'TheJobPoolConsultants Blogs Knowledge Hub',
    );
    const source = await visible.evaluate((image) => image.currentSrc);
    assert(source.startsWith(base + 'brand/'));
    assert(source.includes(`knowledge-hub-${theme}`));
    const style = await visible.evaluate((image) => {
      const wrapper = getComputedStyle(image.parentElement);
      return {
        background: wrapper.backgroundColor,
        padding: wrapper.padding,
        radius: wrapper.borderRadius,
        filter: getComputedStyle(image).filter,
        fit: getComputedStyle(image).objectFit,
      };
    });
    assert.deepEqual(style, {
      background: 'rgba(0, 0, 0, 0)',
      padding: '0px',
      radius: '0px',
      filter: 'none',
      fit: 'contain',
    });
  }
  assert(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  );
  await page.evaluate(() => scrollTo(0, 0));
}

try {
  // Real RGBA transparency, consistent canvases, and no opaque rectangular mat.
  for (const theme of ['light', 'dark']) {
    const file = `public/brand/thejobpoolconsultants/knowledge-hub/logos/thejobpoolconsultants-knowledge-hub-${theme}.png`;
    const { data, info } = await sharp(file)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    assert.equal(info.width, 768);
    assert.equal(info.height, 317);
    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] < 10) transparent++;
    assert(
      transparent / (info.width * info.height) >
        (theme === 'dark' ? 0.65 : 0.3),
    );
    assert.equal(data[3], 0);
  }
  for (const theme of ['light', 'dark']) {
    await page.emulateMedia({ colorScheme: theme });
    for (const width of [375, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(base);
      await verifyLogo(theme, width);
      await page
        .locator('.masthead')
        .screenshot({ path: `${output}/header-${width}-${theme}.png` });
      await page
        .locator('footer')
        .screenshot({ path: `${output}/footer-${width}-${theme}.png` });
      const audit = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      assert.deepEqual(audit.violations, []);
      report.states.push({ theme, width, accessibilityViolations: 0 });
    }
  }
  // System changes work until a saved preference takes precedence.
  await page.emulateMedia({ colorScheme: 'light' });
  await verifyLogo('light', 1440);
  await page.emulateMedia({ colorScheme: 'dark' });
  await verifyLogo('dark', 1440);
  for (const width of [375, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base);
    const before = await page.locator('.masthead').boundingBox();
    const initialTheme = await page.locator('html').getAttribute('data-theme');
    const theme = initialTheme === 'dark' ? 'light' : 'dark';
    const documentId = await page.evaluate(
      () => (window.__logoDocumentId = Math.random()),
    );
    await page.locator('#theme-toggle').click();
    await verifyLogo(theme, width);
    assert.equal(
      await page.evaluate(() => window.__logoDocumentId),
      documentId,
    );
    assert.deepEqual(await page.locator('.masthead').boundingBox(), before);
    assert.equal(
      await page.evaluate(() => localStorage.getItem('publication-theme')),
      theme,
    );
    await page.emulateMedia({ colorScheme: initialTheme });
    await page.reload();
    await verifyLogo(theme, width);
    report.switching.push({
      width,
      theme,
      noReload: true,
      noLayoutShift: true,
      savedPreference: true,
    });
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.locator('.mobile-menu summary').click();
  await page.getByRole('button', { name: 'Close navigation' }).waitFor();
  await page.keyboard.press('Escape');
  assert(!(await page.locator('.mobile-menu').evaluate((node) => node.open)));
  assert(
    await page.getByRole('link', { name: 'Search the library' }).isVisible(),
  );
  assert.deepEqual(report.errors, []);
  console.log(JSON.stringify(report, null, 2));
} finally {
  await writeFile(`${output}/qa.json`, JSON.stringify(report, null, 2));
  await browser.close();
}

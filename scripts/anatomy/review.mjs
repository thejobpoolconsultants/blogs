import { chromium } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';
const manifest = JSON.parse(
  await readFile('src/data/generated/anatomy-manifest.json', 'utf8'),
);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({
  viewport: { width: 720, height: 740 },
  deviceScaleFactor: 4,
});
for (const theme of ['light', 'dark']) {
  const tiles = [];
  for (const { id } of manifest) {
    await page.goto(
      pathToFileURL(resolve(`artifacts/anatomy/${id}-${theme}.html`)).href,
    );
    const file = `artifacts/anatomy/${id}-${theme}-4x.png`;
    await page.locator('.iso-svg').first().screenshot({ path: file });
    tiles.push({
      input: await sharp(file).resize(600, 380).toBuffer(),
      left: (tiles.length % 2) * 600,
      top: Math.floor(tiles.length / 2) * 380,
    });
  }
  await sharp({
    create: {
      width: 1200,
      height: Math.ceil(manifest.length / 2) * 380,
      channels: 4,
      background: theme === 'light' ? '#fefdf9' : '#111a2e',
    },
  })
    .composite(tiles)
    .png()
    .toFile(`artifacts/anatomy/figures-${theme}-contact.png`);
}
await page.setViewportSize({ width: 1440, height: 1000 });
for (const theme of ['light', 'dark']) {
  await page.goto('http://127.0.0.1:4321/blogs/');
  await page.evaluate(
    (theme) => localStorage.setItem('publication-theme', theme),
    theme,
  );
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.reload();
    await page.evaluate(() => document.fonts.ready);
    await page
      .locator('.transition-feature')
      .screenshot({
        path: `artifacts/anatomy/transition-${theme}-${width}.png`,
      });
    await page
      .locator('.program-grid')
      .screenshot({
        path: `artifacts/anatomy/program-grid-${theme}-${width}.png`,
      });
  }
}
await browser.close();
console.log(
  'Captured all eleven figures at 4× in both themes and the desktop/mobile program surfaces.',
);

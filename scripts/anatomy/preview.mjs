import { chromium } from '@playwright/test';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto('http://127.0.0.1:4321/blogs/');
await page.evaluate(() => document.fonts.ready);
await page
  .locator('[data-program-demo="transition"]')
  .screenshot({ path: 'artifacts/anatomy/preview-transition.png' });
await page
  .locator('.program-grid')
  .screenshot({ path: 'artifacts/anatomy/preview-grid.png' });
console.log(
  await page
    .locator('[data-program-demo]')
    .evaluateAll((nodes) =>
      nodes.map((node) => ({
        kind: node.dataset.programDemo,
        parts: node.querySelectorAll('.iso-fill').length,
        art: node.querySelector('svg').getBoundingClientRect().toJSON(),
      })),
    ),
);
await browser.close();

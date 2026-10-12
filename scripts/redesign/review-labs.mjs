import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { specialistPrograms } from '../../src/data/programs.ts';
const dest = 'artifacts/redesign/labs';
await mkdir(dest, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: 'reduce',
});
for (const theme of ['light', 'dark']) {
  for (const program of specialistPrograms) {
    await page.goto('http://127.0.0.1:4321/blogs/programs/' + program.id + '/');
    await page.evaluate(
      (theme) => (document.documentElement.dataset.theme = theme),
      theme,
    );
    await page.locator('[data-lab]').screenshot({
      path: dest + '/' + program.icon + '-' + theme + '.png',
      style: '.skip:not(:focus){visibility:hidden}',
    });
  }
}
await page.setViewportSize({ width: 360, height: 800 });
for (const kind of ['research', 'hardware', 'robotics']) {
  await page.goto(
    'http://127.0.0.1:4321/blogs/programs/' +
      specialistPrograms.find((p) => p.icon === kind).id +
      '/',
  );
  await page.evaluate(() => (document.documentElement.dataset.theme = 'light'));
  const sizes = await page
    .locator('.map-svg text')
    .evaluateAll((nodes) =>
      nodes.map(
        (n) => parseFloat(getComputedStyle(n).fontSize) * n.getScreenCTM().a,
      ),
    );
  if (Math.min(...sizes) < 12)
    throw new Error(
      kind + ' chart labels are too small: ' + Math.min(...sizes),
    );
  await page.locator('[data-lab]').screenshot({
    path: dest + '/' + kind + '-mobile.png',
    style: '.skip:not(:focus){visibility:hidden}',
  });
}
await browser.close();

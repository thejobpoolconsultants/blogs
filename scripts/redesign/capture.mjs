import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';
import { specialistPrograms } from '../../src/data/programs.ts';
const dest = 'artifacts/redesign';
await mkdir(dest, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto('http://127.0.0.1:4321/blogs/');
await page.evaluate(() => document.fonts.ready);
await page.locator('.program-card').last().scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
await page.evaluate(() => scrollTo(0, 0));
await page.screenshot({
  path: dest + '/current-home.png',
  style: '.skip:not(:focus){visibility:hidden}',
});
await page.locator('.program-grid').screenshot({
  path: dest + '/current-grid.png',
  style: '.skip:not(:focus){visibility:hidden}',
});
await page.setViewportSize({ width: 360, height: 800 });
await page.goto('http://127.0.0.1:4321/blogs/');
await page.screenshot({
  path: dest + '/current-mobile.png',
  style: '.skip:not(:focus){visibility:hidden}',
});
await page.goto(
  'http://127.0.0.1:4321/blogs/programs/staff-ai-architect-leadership-cto/',
);
console.log(
  JSON.stringify(
    await page.evaluate(() =>
      [...document.querySelectorAll('*')]
        .filter((e) => e.getBoundingClientRect().right > innerWidth + 1)
        .slice(0, 12)
        .map((e) => ({
          tag: e.tagName,
          class: e.className,
          width: e.getBoundingClientRect().width,
        })),
    ),
  ),
);
await browser.close();
const composites = [];
for (let i = 0; i < specialistPrograms.length; i++)
  composites.push({
    input: await sharp(
      'public/illustrations/programs/' +
        specialistPrograms[i].icon +
        '-960.webp',
    )
      .resize(320, 320)
      .png()
      .toBuffer(),
    left: (i % 3) * 320,
    top: Math.floor(i / 3) * 320,
  });
await sharp({
  create: { width: 960, height: 960, channels: 4, background: '#fff' },
})
  .composite(composites)
  .png()
  .toFile(dest + '/art-contact.png');

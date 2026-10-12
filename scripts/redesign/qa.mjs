import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
import { specialistPrograms } from '../../src/data/programs.ts';
import { starterGuides } from '../../src/data/program-discovery.ts';
import { programExplainers } from '../../src/data/program-explainers.ts';
import {
  weightStorage,
  servingTimeline,
  plannedRoute,
  seededTraining,
  roofline,
} from '../../src/data/program-labs.ts';
const run = promisify(execFile);
const base = process.env.PROGRAM_PREVIEW_URL || 'http://127.0.0.1:4321/blogs/';
const dest = 'artifacts/redesign';
await mkdir(dest, { recursive: true });
const report = {
  layout: [],
  accessibility: [],
  interactions: [],
  assets: [],
  exercises: [],
  external: [],
  errors: [],
};
assert.equal(weightStorage(7, 16).bytes, 14e9);
assert.deepEqual(
  servingTimeline(false).requests.map((r) => r.finish),
  [5, 10, 15, 20],
);
assert.equal(servingTimeline(true).meanLatency, 9.5);
assert.equal(roofline(4), 40);
assert.equal(plannedRoute().length, 7);
assert.equal(
  plannedRoute([
    [3, 2],
    [2, 3],
  ]).length,
  0,
);
assert.deepEqual(seededTraining().returns, seededTraining().returns);
const manifest = JSON.parse(
  await readFile('src/data/generated/anatomy-manifest.json', 'utf8'),
);
assert(manifest.every((a) => a.parts >= 40 && a.geometryProblems === 0));
for (const program of specialistPrograms) {
  const file = 'public/illustrations/programs/' + program.icon + '-960.avif';
  const buffer = await readFile(file);
  const metadata = await sharp(buffer).metadata();
  assert.equal(metadata.width, 960);
  assert.equal(metadata.height, 960);
  report.assets.push({
    kind: program.icon,
    bytes: buffer.length,
    sha256: createHash('sha256').update(buffer).digest('hex'),
  });
  for (const theme of ['light', 'dark'])
    await sharp(
      'public/illustrations/anatomy/' + program.icon + '-' + theme + '.svg',
    ).metadata();
}
assert.equal(new Set(report.assets.map((a) => a.sha256)).size, 9);
for (const kind of [
  'infrastructure',
  'performance',
  'robotics',
  'research',
  'cloud',
  'hardware',
  'deployment',
]) {
  const { stdout } = await run(
    'python',
    [
      'public/examples/programs/' + kind + '.py',
      ...(kind === 'cloud' ? ['--self-test'] : []),
    ],
    { timeout: 15000 },
  );
  if (kind === 'research')
    assert.deepEqual(JSON.parse(stdout).returns, seededTraining().returns);
  report.exercises.push({ kind, passed: true, output: stdout.trim() });
}
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: 'reduce',
});
const page = await context.newPage();
page.on('pageerror', (e) => report.errors.push(e.message));
page.on('response', (r) => {
  if (r.status() >= 400 && r.url().startsWith(base))
    report.errors.push(r.status() + ' ' + r.url());
});
const routes = [
  '',
  ...specialistPrograms.map((p) => 'programs/' + p.id + '/'),
  ...starterGuides.map((g) => 'guides/' + g.id + '/'),
];
try {
  for (const width of [360, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(base + route);
      assert((await page.locator('h1').count()) === 1);
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        route + ' overflow ' + width,
      );
      if (!route) {
        assert.equal(await page.locator('.program-card').count(), 9);
        assert.equal(
          await page
            .locator(
              '.program-card select,.program-card button,.program-card details',
            )
            .count(),
          0,
        );
        const columns = await page
          .locator('.program-grid')
          .evaluate(
            (el) => getComputedStyle(el).gridTemplateColumns.split(' ').length,
          );
        assert.equal(columns, width > 1100 ? 3 : width > 600 ? 2 : 1);
        const cards = await page.locator('.program-card').evaluateAll((nodes) =>
          nodes.map((n) => ({
            top: n.getBoundingClientRect().top,
            art: n.querySelector('.program-artwork').getBoundingClientRect()
              .top,
            actions: n
              .querySelector('.program-card-actions')
              .getBoundingClientRect().top,
          })),
        );
        for (const card of cards)
          for (const other of cards.filter(
            (c) => Math.abs(c.top - card.top) < 2,
          )) {
            assert(
              Math.abs(card.art - other.art) < 2,
              'Artwork alignment ' + width,
            );
            assert(
              Math.abs(card.actions - other.actions) < 2,
              'Action alignment ' + width,
            );
          }
      } else
        assert.match(
          await page.locator('meta[name="robots"]').getAttribute('content'),
          /noindex/,
        );
      report.layout.push({ width, route, overflow: false });
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const theme of ['light', 'dark']) {
    for (const route of [
      '',
      ...specialistPrograms.map((p) => 'programs/' + p.id + '/'),
    ]) {
      await page.goto(base + route);
      await page.evaluate(
        (theme) => (document.documentElement.dataset.theme = theme),
        theme,
      );
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      report.accessibility.push({
        route,
        theme,
        violations: axe.violations.map((v) => ({
          id: v.id,
          targets: v.nodes.map((n) => n.target),
        })),
      });
      if (axe.violations.length)
        report.errors.push(
          theme + ' ' + route + ' ' + axe.violations.map((v) => v.id).join(','),
        );
    }
    await page.goto(base);
    await page.evaluate(
      (theme) => (document.documentElement.dataset.theme = theme),
      theme,
    );
    await page.locator('#programs').scrollIntoViewIfNeeded();
    await page.locator('.program-card').last().scrollIntoViewIfNeeded();
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: dest + '/home-' + theme + '.png',
      fullPage: true,
      style: '.skip:not(:focus){visibility:hidden}',
    });
    await page.locator('.program-grid').screenshot({
      path: dest + '/grid-' + theme + '.png',
      style: '.skip:not(:focus){visibility:hidden}',
    });
  }
  for (const program of specialistPrograms) {
    await page.goto(base + 'programs/' + program.id + '/');
    if (['leadership', 'deployment'].includes(program.icon)) continue;
    const figure = page.locator('[data-program-demo="' + program.icon + '"]');
    assert((await figure.locator('.iso-fill').count()) >= 40);
    const choices = programExplainers[program.icon].options;
    for (let i = 0; i < choices.length; i++) {
      await figure.locator('[data-demo-choice]').selectOption(String(i));
      await page.waitForTimeout(120);
      assert(
        (await figure.locator('[data-demo-result]').textContent())?.trim(),
      );
    }
    await figure.locator('[data-demo-reset]').click();
    assert.equal(await figure.locator('[data-demo-choice]').inputValue(), '0');
    report.interactions.push(program.icon + ' mechanism choices and reset');
  }
  const visit = async (kind) =>
    page.goto(
      base +
        'programs/' +
        specialistPrograms.find((p) => p.icon === kind).id +
        '/',
    );
  await visit('agents');
  await page
    .getByRole('button', { name: 'Missing evidence', exact: true })
    .click();
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /no permitted passage/,
  );
  await page
    .getByRole('button', { name: 'Denied action', exact: true })
    .focus();
  await page.keyboard.press('Enter');
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /blocks submission/,
  );
  await visit('infrastructure');
  await page.locator('[data-parameters]').selectOption('70');
  await page.locator('[data-bits]').selectOption('4');
  assert.match(
    await page.locator('[data-weight-output]').textContent(),
    /35.00 GB/,
  );
  await page.getByRole('button', { name: 'Cooling', exact: true }).click();
  assert(
    (await page
      .locator('[data-part-name^="cooling"].inspector-selected')
      .count()) > 0,
  );
  assert.match(
    await page.locator('[data-inspector] .scenario-output').textContent(),
    /removes heat/,
  );
  await visit('performance');
  await page
    .getByRole('button', { name: 'Batch of four', exact: true })
    .click();
  assert.match(
    await page.locator('[data-timeline-output]').textContent(),
    /363.64 requests\/s/,
  );
  assert.match(
    await page.locator('[data-timeline-output]').textContent(),
    /first response 11 ms/,
  );
  await visit('robotics');
  await page
    .getByRole('button', { name: 'Incomplete map', exact: true })
    .click();
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /stops the simulated robot/,
  );
  await page
    .getByRole('button', { name: 'Move an obstacle', exact: true })
    .click();
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /Recomputed/,
  );
  await visit('research');
  await page
    .getByRole('button', { name: 'Reward every step', exact: true })
    .click();
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /40-step loop/,
  );
  await visit('cloud');
  await page
    .getByRole('button', { name: 'Employee writes', exact: true })
    .click();
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /authentication succeeded/,
  );
  await page
    .getByRole('button', { name: 'Missing identity', exact: true })
    .click();
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /before authorization/,
  );
  await visit('hardware');
  await page.locator('[data-intensity]').selectOption('16');
  assert.match(
    await page.locator('[data-roof-output]').textContent(),
    /100 GFLOP\/s ceiling/,
  );
  await visit('leadership');
  await page.locator('[data-constraint]').selectOption('residency');
  assert.equal(
    await page.locator('[data-system][data-affected="true"]').count(),
    2,
  );
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /deployment region/,
  );
  await visit('deployment');
  await page.locator('[data-delivery]').selectOption('4');
  await page
    .getByRole('button', { name: 'Procedures are incomplete', exact: true })
    .click();
  assert.match(
    await page.locator('[data-lab] .scenario-output').textContent(),
    /Deployment plan.*Discovery finding/,
  );
  report.interactions.push(
    'All nine labs: evidence gap, denied tool, 35GB weights, batch timeline, replanning/incomplete map, poor reward, authn/authz, roofline, residency and discovery scope.',
  );
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto(base);
  await page.screenshot({
    path: dest + '/mobile.png',
    fullPage: true,
    style: '.skip:not(:focus){visibility:hidden}',
  });
  const noJs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 360, height: 800 },
  });
  const staticPage = await noJs.newPage();
  for (const program of specialistPrograms) {
    await staticPage.goto(base + 'programs/' + program.id + '/');
    if (!['leadership', 'deployment'].includes(program.icon))
      assert((await staticPage.locator('.iso-fill').count()) >= 40);
    assert(
      (
        await staticPage
          .locator('.chart-output,.scenario-output')
          .first()
          .textContent()
      )?.trim(),
    );
    assert.equal(
      await staticPage.locator('.scenario-buttons:visible').count(),
      0,
    );
  }
  await noJs.close();
  for (const address of [
    'https://the-job-pool-consultants-website.vercel.app/',
    'https://the-job-pool-consultants-website.vercel.app/programs',
    'https://forms.gle/xKnthSKP753dorxd6',
  ]) {
    const response = await context.request.get(address, { timeout: 30000 });
    report.external.push({
      address,
      status: response.status(),
      destination: response.url(),
    });
    assert(response.ok());
  }
  assert.deepEqual(report.errors, []);
} finally {
  await writeFile(dest + '/qa.json', JSON.stringify(report, null, 2) + '\n');
  await browser.close();
}
console.log(
  JSON.stringify({
    layouts: report.layout.length,
    accessibility: report.accessibility.length,
    assets: report.assets.length,
    exercises: report.exercises.length,
    errors: report.errors,
  }),
);

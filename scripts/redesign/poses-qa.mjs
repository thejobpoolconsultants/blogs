import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
import { specialistPrograms } from '../../src/data/programs.ts';
const run = promisify(execFile);
const dest = 'artifacts/redesign/poses';
await mkdir(dest, { recursive: true });
const skillRoot =
  process.env.ANATOMY_SKILL_DIR ||
  join(process.env.USERPROFILE || '', '.claude', 'skills', 'anatomy');
const report = [];
for (const theme of ['light', 'dark']) {
  for (const [kind, choice] of [
    ['robotics', 0],
    ['robotics', 2],
    ['research', 0],
    ['research', 1],
    ['cloud', 0],
    ['cloud', 1],
    ['cloud', 2],
    ['performance', 0],
    ['performance', 1],
  ]) {
    const selector = '[data-program-demo="' + kind + '"]';
    const prefix = dest + '/' + kind + '-' + choice + '-' + theme;
    const actions = [
      ['wait', 500],
      [
        'eval',
        'document.documentElement.dataset.theme=' + JSON.stringify(theme),
      ],
      ['scroll', selector],
      [
        'eval',
        `(()=>{const control=document.querySelector('${selector} [data-demo-choice]');control.value='${choice}';control.dispatchEvent(new Event('change',{bubbles:true}));return true})()`,
      ],
      [
        'until',
        `!document.querySelector('${selector} [data-demo-replay]').disabled`,
        15000,
      ],
      ['wait', 80],
      ['lines', prefix + '-lines.png', selector],
      ['shot', prefix + '-4x.png', selector + ' .anatomy-static-stage', 4],
    ];
    const file = resolve(prefix + '-actions.json');
    await writeFile(file, JSON.stringify(actions, null, 2) + '\n');
    const program = specialistPrograms.find((p) => p.icon === kind);
    const { stdout } = await run(
      process.execPath,
      [
        join(skillRoot, 'scripts', 'drive.mjs'),
        'http://127.0.0.1:4321/blogs/programs/' + program.id + '/',
        '--actions',
        file,
        '--reduced',
        '--width',
        '1440',
        '--height',
        '1000',
      ],
      { timeout: 30000, maxBuffer: 2 * 1024 * 1024 },
    );
    assert.match(stdout, /line ends: 0/);
    report.push({ theme, kind, choice, lineEnds: 0 });
    console.log(
      theme + ' ' + kind + ' ' + choice + ': line ends0; 4× capture saved.',
    );
  }
}
await writeFile(dest + '/qa.json', JSON.stringify(report, null, 2) + '\n');

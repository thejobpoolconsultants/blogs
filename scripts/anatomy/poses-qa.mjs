import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import assert from 'node:assert/strict';
const run = promisify(execFile);
const skillRoot = process.env.ANATOMY_SKILL_DIR || join(process.env.USERPROFILE || '', '.claude', 'skills', 'anatomy');
const poses = [['robotics',0],['robotics',2],['research',0],['research',1],['cloud',0],['cloud',1],['cloud',2],['performance',0],['performance',1]];
const report = [];
for (const theme of ['light','dark']) {
  const actions = [['wait',500],['eval',`document.documentElement.dataset.theme=${JSON.stringify(theme)}`]];
  for (const [kind,choice] of poses) {
    const selector=`[data-program-demo="${kind}"]`;
    actions.push(['scroll',selector], ['eval',`(()=>{const figure=document.querySelector(${JSON.stringify(selector)});const control=figure.querySelector('[data-demo-choice]');control.value='${choice}';control.dispatchEvent(new Event('change',{bubbles:true}));return true})()`], ['until',`!document.querySelector(${JSON.stringify(selector)}).querySelector('[data-demo-replay]').disabled`,15000], ['wait',80]);
    actions.push(['lines',`artifacts/anatomy/pose-${kind}-${choice}-${theme}-lines.png`,selector]);
    actions.push(['shot',`artifacts/anatomy/pose-${kind}-${choice}-${theme}-4x.png`,`${selector} .anatomy-static-stage`,4]);
  }
  const file=resolve(`artifacts/anatomy/poses-${theme}-actions.json`);
  await writeFile(file,JSON.stringify(actions,null,2));
  const {stdout}=await run(process.execPath,[join(skillRoot,'scripts','drive.mjs'),'http://127.0.0.1:4321/blogs/','--actions',file,'--reduced','--width','1440','--height','1000'],{timeout:120000,maxBuffer:4*1024*1024});
  assert.equal((stdout.match(/line ends: 0/g)||[]).length,poses.length,stdout);
  report.push({theme,poses:poses.length,lineEnds:0,output:stdout.trim()});
  console.log(`${theme}: ${poses.length} resting-pose line checks passed; 4× junction captures saved.`);
}
await writeFile('artifacts/anatomy/poses-verification.json',JSON.stringify(report,null,2));

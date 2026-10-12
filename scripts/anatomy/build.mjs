import { mkdirSync, writeFileSync } from 'node:fs';
import * as k from './vendor/iso-kit.mjs';
import * as A from './vendor/audit.mjs';
import * as G from './vendor/lathe.mjs';
import { materialFor, materialCss } from './materials.mjs';
import { programBuilders } from './program-builders.mjs';
import { programExplainers } from '../../src/data/program-explainers.ts';
const { viewOf } = G;

const WIDTH = 600,
  HEIGHT = 380;
const BASE = { x: -104, y: -60, w: 208, d: 130, r: 7 };
const P = k.fitProjection(
  [
    ...k.boxCorners(BASE, -16, 0),
    ...k.boxCorners({ x: -76, y: -46, w: 152, d: 60, r: 0 }, 4, 100),
  ],
  WIDTH,
  HEIGHT,
  { pad: 36, azimuth: 48, elevation: 32 },
);
const OUT = 'public/illustrations/anatomy';
mkdirSync(OUT, { recursive: true });
mkdirSync('src/data/generated', { recursive: true });
mkdirSync('artifacts/anatomy', { recursive: true });
const SAMPLE_STATES = Array.from({ length: 17 }, (_, i) => i / 16);
const themeTokens =
  `
.iso[data-theme="light"]{--anatomy-paper:#fefdf9;--anatomy-top:#fffefa;--anatomy-face:#fffefa;--anatomy-shade-0:#c3cad4;--anatomy-shade-1:#d3d8df;--anatomy-shade-2:#e1e4e8;--anatomy-shade-3:#eef0f2;--anatomy-hi:#263553;--anatomy-mid:#69758c;--anatomy-lo:#9da7b7;--anatomy-faint:#c7cdd6;--anatomy-lit:#18264f;--anatomy-lit-top:#fffdf4;--anatomy-lit-shade:#e6ddc7;--anatomy-dot:#263553;--anatomy-halo:#748095;--anatomy-halo-opacity:.16}
.iso[data-theme="dark"]{--anatomy-paper:#111a2e;--anatomy-top:#25324b;--anatomy-face:#263550;--anatomy-shade-0:#0b1323;--anatomy-shade-1:#152039;--anatomy-shade-2:#1a2842;--anatomy-shade-3:#20304c;--anatomy-hi:#d4dce9;--anatomy-mid:#8797b2;--anatomy-lo:#526582;--anatomy-faint:#354660;--anatomy-lit:#eed49a;--anatomy-lit-top:#36435a;--anatomy-lit-shade:#2d3950;--anatomy-dot:#d4dce9;--anatomy-halo:#030813;--anatomy-halo-opacity:.55}
.instrument-glass .iso-top,.instrument-glass .iso-shade{fill:var(--anatomy-shade-0)}
` + materialCss;
writeFileSync('src/styles/anatomy-materials.css', materialCss);

class Bench {
  constructor(id, title, caption) {
    this.id = id;
    this.title = title;
    this.caption = caption;
    this.R = A.recorder(P);
    this.parts = [];
    this.base();
  }
  slab(name, x, y, w, d, z, h, options = {}) {
    const plan = {
      x,
      y,
      w,
      d,
      r: options.radius ?? Math.min(1.6, w / 5, d / 5),
    };
    const detail = options.detail ? this.detail(plan, z + h) : '';
    const inner =
      detail +
      (options.seam
        ? k.lineSvg(k.sideSeam(plan, z + h * 0.7, P, 4), { tone: 'faint' })
        : '') +
      (options.inner || '');
    this.record(
      name,
      [x + w / 2, y + d / 2, z + h / 2],
      k.solidSvg(k.slabOf(plan, z, h, P, 4, Math.min(0.6, h / 4)), {
        tone: options.tone || 'mid',
        lit: Boolean(options.lit),
        className: options.className,
        inner,
      }),
      A.slab(plan, z, h, { name }, 4),
      options,
    );
  }
  cylinder(name, x, y, r, z, h, options = {}) {
    const inner = options.knurl
      ? k.lineSvg(k.knurl(x, y, r, z, z + h, 20, P, 0), { tone: 'lo' })
      : '';
    this.record(
      name,
      [x, y, z + h / 2],
      k.solidSvg(k.cylinder(x, y, r, z, h, P, 32, 0.3), {
        tone: options.tone || 'mid',
        lit: Boolean(options.lit),
        inner,
      }),
      A.cylinder(x, y, r, z, h, { name }),
      options,
    );
  }
  record(name, at, svg, shape, options) {
    const move = options.move || (options.moving ? [84, 0, 0] : [0, 0, 0]);
    const material = options.material || materialFor(this.id, name);
    if (material) svg = `<g class="material-${material}">${svg}</g>`;
    this.R.put({
      name,
      at,
      piece: options.piece || (options.moving ? 'selector' : name),
      move,
      svg,
      shapes: [this.R.solid(shape)],
    });
    this.parts.push(name);
  }
  detail(plan, top) {
    const points = k.corners(plan, Math.min(2.6, plan.w / 4, plan.d / 4));
    return (
      k.dotsSvg(
        points.map(([x, y]) => k.iso([x, y, top], P)),
        { size: 0.5 },
      ) +
      k.lineSvg(
        points.map(([x, y]) => k.ring(x, y, 0.9, top, P, 16)).join(''),
        { tone: 'lo' },
      )
    );
  }
  rules(x, y, w, top, count = 3) {
    return k.lineSvg(
      Array.from({ length: count }, (_, i) =>
        k.lineOnTop(
          [x, y + 2.5 * i],
          [x + w - (i % 2) * 4, y + 2.5 * i],
          top,
          P,
        ),
      ).join(''),
      { tone: 'lo', free: true },
    );
  }
  base() {
    for (const [i, [x, y]] of k.corners(BASE, 14).entries()) {
      this.slab(`stand.pad-${i}`, x - 5, y - 5, 10, 10, -16, 2, { tone: 'lo' });
      this.slab(`stand.foot-${i}`, x - 4, y - 4, 8, 8, -14, 6, { tone: 'lo' });
    }
    this.slab('stand.bench', BASE.x, BASE.y, BASE.w, BASE.d, -8, 8, {
      radius: 7,
      tone: 'lo',
      inner: k.lineSvg(k.planOutline(k.insetPlan(BASE, 4), 0, P, 4), {
        tone: 'faint',
      }),
    });
    for (const [i, [x, y]] of k.corners(BASE, 7).entries())
      this.cylinder(`stand.fastener-${i}`, x, y, 1.2, 0, 0.8, { tone: 'lo' });
    const plateX = this.id === 'cloud' ? 34 : -88;
    this.slab('stand.nameplate', plateX, 48, 40, 11, 0, 0.7, {
      tone: 'lo',
      inner: this.rules(plateX + 4, 51, 24, 0.7),
    });
    if (this.id !== 'retrieval') return;
    this.slab('controls.tray', 34, 32, 54, 27, 0, 3, {
      detail: true,
      seam: true,
      tone: 'lo',
    });
    for (let row = 0; row < 2; row++)
      for (let col = 0; col < 3; col++)
        this.slab(
          `controls.key-${row}-${col}`,
          39 + col * 10,
          37 + row * 10,
          7,
          6,
          3,
          2,
          { radius: 1 },
        );
    this.cylinder('controls.selector', 78, 40, 3, 3, 3, { knurl: true });
    this.cylinder('controls.trim', 78, 51, 2.4, 3, 3, { knurl: true });
  }
  terminal(x, y, z = 0, w = 43, h = 48) {
    this.slab('terminal.foot', x, y, w, 22, z, 4, { detail: true, tone: 'lo' });
    this.slab('terminal.stem', x + w / 2 - 4, y + 5, 8, 9, z + 4, 8);
    this.slab('terminal.case', x, y, w, 14, z + 12, h, {
      detail: true,
      seam: true,
    });
    // A shallow glass panel and separate raised bezel, mounted flush to the case face.
    this.slab('terminal.glass', x + 5, y + 14, w - 10, 1, z + 23, h - 20, {
      className: 'instrument-glass',
      tone: 'hi',
      inner: this.screenRules(x + 8, y + 15, z + 23, w - 16, h - 20),
    });
    this.slab('terminal.bezel-bottom', x + 3, y + 14, w - 6, 2, z + 21, 2, {
      tone: 'hi',
    });
    this.slab(
      'terminal.bezel-top',
      x + 3,
      y + 14,
      w - 6,
      2,
      z + 23 + h - 20,
      2,
      { tone: 'hi' },
    );
    this.slab('terminal.bezel-left', x + 3, y + 14, 2, 2, z + 23, h - 20, {
      tone: 'hi',
    });
    this.slab('terminal.bezel-right', x + w - 5, y + 14, 2, 2, z + 23, h - 20, {
      tone: 'hi',
    });
    this.slab('terminal.keyboard', x + 4, y + 17, w - 8, 4, z + 4, 1, {
      inner: this.rules(x + 7, y + 18, w - 15, z + 5, 1),
    });
  }
  screenRules(x, y, z, w, h) {
    return Array.from(
      { length: 3 },
      (_, choice) =>
        `<g data-screen-document="${choice}"${choice ? ' style="opacity:0"' : ''}>${k.lineSvg(Array.from({ length: 3 }, (_, line) => k.segment([x, y, z + h - 6 - line * 5], [x + w - ((choice + line) % 3) * 3, y, z + h - 6 - line * 5], P)).join(''), { tone: 'hi', free: true })}</g>`,
    ).join('');
  }
  finish(label, moving = false) {
    if (programExplainers[this.id])
      this.caption = programExplainers[this.id].caption;
    const states = Array.isArray(moving)
      ? moving
      : moving
        ? SAMPLE_STATES
        : [0];
    A.settle(this.R, P, { states });
    const result = A.auditOrExit(this.R, P, {
      frames: moving ? states : [],
      apart: false,
    });
    if (this.parts.length < 40)
      throw new Error(
        `${this.id}: ${this.parts.length} solids; every Figure requires 40 or more.`,
      );
    const V = viewOf(P);
    const body = `<path class="iso-halo" d="${k.haloOf(BASE, -16, 8, P)}"/><g data-anatomy-parts="">${this.R.items
      .sort((a, b) => a.key - b.key)
      .map(
        (item) =>
          `<g data-part-name="${item.name}" data-sort-key="${item.key.toFixed(6)}" data-sort-lift="${item.move.reduce((s, v, i) => s + v * V[i], 0).toFixed(6)}" data-motion-piece="${item.piece}"${item.piece === 'selector' ? ' data-moving-selector=""' : ''}>${item.svg}</g>`,
      )
      .join('')}</g>`;
    const svg = k.figureSvg({ width: WIDTH, height: HEIGHT, label, body });
    for (const theme of ['light', 'dark']) {
      const standalone = k
        .figureSvg({
          width: WIDTH,
          height: HEIGHT,
          label,
          body,
          standalone: theme,
        })
        .replace('</style>', `${themeTokens}</style>`);
      writeFileSync(`${OUT}/${this.id}-${theme}.svg`, standalone);
      const page = k
        .pageHtml({
          title: this.title,
          theme,
          body: k.plateHtml({
            fig: this.id,
            title: this.title,
            hint: moving
              ? 'Choose a sample document'
              : 'Illustrative mechanism',
            readout: `${this.parts.length} fitted parts`,
            caption: this.caption,
            body: standalone,
          }),
          width: 660,
        })
        .replace('</style>', `${themeTokens}</style>`);
      writeFileSync(`artifacts/anatomy/${this.id}-${theme}.html`, page);
    }
    return {
      id: this.id,
      title: this.title,
      caption: this.caption,
      label,
      parts: this.parts.length,
      partNames: this.parts,
      svg,
      axis: k.axisVector(P, [84, 0, 0]),
      worldAxes: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ].map((v) => k.axisVector(P, v)),
      view: V,
      geometryProblems: result ? A.failures(result) : null,
    };
  }
}

function retrieval(id = 'retrieval') {
  const b = new Bench(
    id,
    'Document retrieval workstation',
    'The selector finds a sample document before the workstation presents an answer grounded in it.',
  );
  for (let i = 0; i < 3; i++) {
    const x = -72 + i * 42;
    b.slab(`document-${i}.tray`, x - 10, -27, 29, 28, 0, 3, {
      detail: true,
      tone: 'lo',
    });
    b.slab(`document-${i}.backstop`, x - 10, -29, 29, 2, 0, 8);
    b.slab(`document-${i}.lip`, x - 10, 1, 29, 2, 0, 5);
    for (let page = 0; page < 3; page++)
      b.slab(
        `document-${i}.page-${page}`,
        x - 7 + page * 0.6,
        -24 + page * 0.5,
        22,
        21,
        3 + page * 0.7,
        0.7,
        {
          radius: 0.6,
          tone: 'hi',
          inner: page === 2 ? b.rules(x - 3, -18, 12, 5.1) : '',
        },
      );
  }
  for (const [i, x] of [-88, 39].entries())
    for (const [j, y] of [-34, 5].entries())
      b.slab(`gantry.post-${i}-${j}`, x, y, 5, 5, 0, 30, { detail: true });
  for (const [i, y] of [-34, 5].entries())
    b.slab(`gantry.rail-${i}`, -88, y, 132, 5, 30, 4, {
      seam: true,
      inner:
        i === 1
          ? k.lineSvg(k.topTicks(-82, 40, 6, 4, y, 34, [1.6, 3], P).minor, {
              tone: 'lo',
            }) +
            k.lineSvg(k.topTicks(-82, 40, 6, 4, y, 34, [1.6, 3], P).major, {
              tone: 'mid',
            })
          : '',
    });
  b.slab('selector.carriage', -75, -34, 18, 44, 34, 4, {
    lit: true,
    detail: true,
    moving: id === 'retrieval',
  });
  b.slab('selector.optical-head', -71, -18, 10, 8, 29, 5, {
    tone: 'hi',
    moving: id === 'retrieval',
  });
  for (const [i, x] of [-73, -61].entries())
    for (const [j, y] of [-31, 7].entries())
      b.slab(`selector.bearing-${i}-${j}`, x, y, 3, 3, 38, 2, {
        moving: id === 'retrieval',
      });
  b.terminal(52, -44, 0, 40, 51);
  return b.finish(
    'Isometric document-retrieval workstation with three paper trays, a rail-mounted scanner and a framed terminal display.',
    id === 'retrieval',
  );
}

const educational = programBuilders(Bench, P, k, A, G);
const builders = {
  retrieval,
  ...Object.fromEntries(
    Object.entries(educational).filter(([id]) => id in programExplainers),
  ),
};
const only = process.argv.find((arg) => arg.startsWith('--only='))?.slice(7);
const manifest = [];
for (const [id, build] of Object.entries(builders)) {
  if (only && id !== only) continue;
  console.log(`\n${id}: building and depth-sorting Anatomy Figure`);
  const figure = build();
  if (id !== 'retrieval')
    writeFileSync(
      `src/data/generated/${id}-figure.json`,
      JSON.stringify(figure),
    );
  if (id === 'retrieval')
    writeFileSync(
      'src/data/generated/retrieval-figure.json',
      JSON.stringify(figure),
    );
  const { svg, ...metadata } = figure;
  manifest.push({ ...metadata, inlineBytes: Buffer.byteLength(svg) });
}
if (!only) {
  writeFileSync(
    'src/data/generated/anatomy-manifest.json',
    JSON.stringify(manifest, null, 2),
  );
  writeFileSync(
    'docs/design/anatomy-art-direction.json',
    JSON.stringify(
      {
        source: 'https://github.com/wheresryan22/anatomy',
        scope:
          'Ten distinct, colored, interactive program Figures plus the retained document-retrieval hero. SVG-first with visible teaching copy and native HTML controls.',
        plan: 'docs/design/program-explainers.md',
        truth_contract:
          'Authored educational states. Performance, matrix arithmetic, fixed-policy feedback, architecture allocations and customer checks use pure local models. No live training, measured hardware results, commercial chip layouts or business predictions.',
        figures: manifest.map((entry) => ({
          id: entry.id,
          concept:
            programExplainers[entry.id]?.intro ||
            'Find a source before presenting a grounded answer.',
          learning: programExplainers[entry.id]?.learn,
          application: programExplainers[entry.id]?.build,
          caption: entry.caption,
          parts: entry.parts,
          partNames: entry.partNames,
          geometryProblems: entry.geometryProblems,
        })),
      },
      null,
      2,
    ) + '\n',
  );
}
console.log(
  JSON.stringify(
    manifest.map(({ id, parts, geometryProblems }) => ({
      id,
      parts,
      geometryProblems,
    })),
    null,
    2,
  ),
);

if (process.argv.includes('--motion')) {
  const motionReport = [];
  function frame(b, names, description) {
    A.settle(b.R, P, { states: [0] });
    const result = A.auditOrExit(b.R, P, { frames: [], apart: false });
    const problems = result ? A.failures(result) : null;
    if (problems !== 0)
      throw new Error(`${description}: motion geometry audit failed`);
    motionReport.push({ description, parts: b.parts.length, problems });
    return {
      parts: b.R.items
        .filter((item) => names.includes(item.name))
        .map((item) => ({ name: item.name, svg: item.svg })),
      order: b.R.items
        .toSorted((a, b) => a.key - b.key)
        .map((item) => item.name),
    };
  }
  if (!only || only === 'robotics') {
    const poses = [
      { y: 0, palm: 35, objectY: 0, objectZ: 7 },
      { y: 0, palm: 17, objectY: 0, objectZ: 7 },
      { y: 0, palm: 35, objectY: 0, objectZ: 25 },
      { y: 32, palm: 35, objectY: 32, objectZ: 25 },
      { y: 32, palm: 12, objectY: 32, objectZ: 2 },
      { y: 32, palm: 35, objectY: 32, objectZ: 2 },
    ];
    const frames = [
      frame(
        educational.robotBench(poses[0]),
        [
          'robot.wrist',
          'robot.gripper-palm',
          'robot.gripper-left',
          'robot.gripper-right',
          'object-1',
        ],
        'robotics start',
      ),
    ];
    for (let segment = 1; segment < poses.length; segment++)
      for (let step = 1; step <= 6; step++) {
        const t = step / 6;
        const pose = Object.fromEntries(
          Object.keys(poses[0]).map((key) => [
            key,
            poses[segment - 1][key] +
              (poses[segment][key] - poses[segment - 1][key]) * t,
          ]),
        );
        frames.push(
          frame(
            educational.robotBench(pose),
            [
              'robot.wrist',
              'robot.gripper-palm',
              'robot.gripper-left',
              'robot.gripper-right',
              'object-1',
            ],
            `robotics segment ${segment}, sample ${step}`,
          ),
        );
      }
    writeFileSync(
      `${OUT}/robotics-motion.json`,
      JSON.stringify({ sequences: [frames] }),
    );
  }
  if (!only || only === 'research') {
    const sequences = [];
    for (let policy = 0; policy < 2; policy++) {
      const path = educational.navigationReplay(policy).positions;
      const names = [
        'agent.chassis',
        'agent.wheel-0-0',
        'agent.wheel-0-1',
        'agent.wheel-1-0',
        'agent.wheel-1-1',
        'reward.dial-body',
      ];
      const reward = educational.navigationReplay(policy).reward;
      const frames = [
        frame(
          educational.researchBench(path[0], reward),
          names,
          `research ${policy} start`,
        ),
      ];
      for (let segment = 1; segment < path.length; segment++)
        for (let step = 1; step <= 6; step++) {
          const t = step / 6;
          const position = path[segment - 1].map(
            (v, i) => v + (path[segment][i] - v) * t,
          );
          frames.push(
            frame(
              educational.researchBench(position, reward),
              names,
              `research policy ${policy}, move ${segment}, sample ${step}`,
            ),
          );
        }
      sequences.push(frames);
    }
    writeFileSync(`${OUT}/research-motion.json`, JSON.stringify({ sequences }));
  }
  if (!only || only === 'cloud') {
    const frames = [];
    for (let step = 0; step <= 6; step++)
      frames.push(
        frame(
          educational.cloudBench({ gate: (16 * step) / 6, request: 0 }),
          ['access.gate', 'access.request'],
          `cloud gate sample ${step}`,
        ),
      );
    for (let step = 1; step <= 6; step++)
      frames.push(
        frame(
          educational.cloudBench({ gate: 16, request: (20 * step) / 6 }),
          ['access.gate', 'access.request'],
          `cloud request sample ${step}`,
        ),
      );
    writeFileSync(
      `${OUT}/cloud-motion.json`,
      JSON.stringify({ sequences: [frames] }),
    );
  }
  writeFileSync(
    'artifacts/anatomy/motion-audit.json',
    JSON.stringify(motionReport, null, 2),
  );
}

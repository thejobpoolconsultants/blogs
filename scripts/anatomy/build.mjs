import { mkdirSync, writeFileSync } from 'node:fs';
import * as k from './vendor/iso-kit.mjs';
import * as A from './vendor/audit.mjs';
import { viewOf } from './vendor/lathe.mjs';

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
const themeTokens = `
.iso[data-theme="light"]{--anatomy-paper:#fefdf9;--anatomy-top:#fffefa;--anatomy-face:#fffefa;--anatomy-shade-0:#c3cad4;--anatomy-shade-1:#d3d8df;--anatomy-shade-2:#e1e4e8;--anatomy-shade-3:#eef0f2;--anatomy-hi:#263553;--anatomy-mid:#69758c;--anatomy-lo:#9da7b7;--anatomy-faint:#c7cdd6;--anatomy-lit:#18264f;--anatomy-lit-top:#fffdf4;--anatomy-lit-shade:#e6ddc7;--anatomy-dot:#263553;--anatomy-halo:#748095;--anatomy-halo-opacity:.16}
.iso[data-theme="dark"]{--anatomy-paper:#111a2e;--anatomy-top:#25324b;--anatomy-face:#263550;--anatomy-shade-0:#0b1323;--anatomy-shade-1:#152039;--anatomy-shade-2:#1a2842;--anatomy-shade-3:#20304c;--anatomy-hi:#d4dce9;--anatomy-mid:#8797b2;--anatomy-lo:#526582;--anatomy-faint:#354660;--anatomy-lit:#eed49a;--anatomy-lit-top:#36435a;--anatomy-lit-shade:#2d3950;--anatomy-dot:#d4dce9;--anatomy-halo:#030813;--anatomy-halo-opacity:.55}
.instrument-glass .iso-top,.instrument-glass .iso-shade{fill:var(--anatomy-shade-0)}
`;

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
    const move = options.moving ? [84, 0, 0] : [0, 0, 0];
    this.R.put({
      name,
      at,
      piece: options.moving ? 'selector' : name,
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
    this.slab('stand.nameplate', -88, 48, 40, 11, 0, 0.7, {
      tone: 'lo',
      inner: this.rules(-84, 51, 24, 0.7),
    });
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
    const states = moving ? SAMPLE_STATES : [0];
    A.settle(this.R, P, { states });
    const result = A.auditOrExit(this.R, P, {
      frames: moving ? SAMPLE_STATES : [],
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
          `<g data-part-name="${item.name}" data-sort-key="${item.key.toFixed(6)}" data-sort-lift="${item.move.reduce((s, v, i) => s + v * V[i], 0).toFixed(6)}"${item.piece === 'selector' ? ' data-moving-selector=""' : ''}>${item.svg}</g>`,
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

function infrastructure() {
  const b = new Bench(
    'infrastructure',
    'Compute, network and cooling',
    'Compute trays connect through a network switch; cooling and power support the rack.',
  );
  b.slab('rack.plinth', -67, -49, 134, 67, 0, 4, { detail: true, tone: 'lo' });
  for (const [i, x] of [-65, 59].entries())
    for (const [j, y] of [-47, 10].entries())
      b.slab(`rack.upright-${i}-${j}`, x, y, 6, 6, 4, 94, { seam: true });
  for (let row = 0; row < 4; row++) {
    const z = 10 + row * 20;
    for (const [edge, y] of [-45, 6].entries())
      b.slab(`rack.support-${row}-${edge}`, -59, y, 118, 8, z - 3, 3);
    b.slab(`rack.shelf-${row}`, -59, -41, 118, 51, z, 3, {
      detail: true,
      tone: 'lo',
    });
    for (let col = 0; col < 3; col++) {
      const x = -50 + col * 36;
      b.slab(`compute-${row}-${col}.package`, x, -20, 28, 30, z + 3, 5, {
        lit: row === 2 && col === 1,
        detail: true,
      });
      const vents = Array.from({ length: 5 }, (_, vent) =>
        k.planOutline(
          { x: x + 3 + vent * 4.5, y: -15, w: 1.3, d: 18, r: 0.6 },
          z + 10,
          P,
          4,
        ),
      ).join('');
      b.slab(`compute-${row}-${col}.heatsink`, x + 2, -18, 24, 26, z + 8, 2, {
        tone: 'lo',
        inner: k.lineSvg(vents, { tone: 'faint' }),
      });
    }
  }
  for (const [edge, y] of [-45, 6].entries())
    b.slab(`network.support-${edge}`, -59, y, 118, 8, 91, 3);
  b.slab('network.switch', -59, -41, 118, 51, 94, 4, { detail: true });
  b.slab('power.rail', 75, -46, 8, 57, 0, 6, { detail: true });
  for (let i = 0; i < 5; i++)
    b.slab(`network.port-${i}`, -45 + i * 19, 10, 12, 3, 94, 3, { tone: 'hi' });
  return b.finish(
    'Open GPU rack with four compute shelves, vented heatsinks, structural uprights, a network switch and a power rail.',
  );
}

function performance() {
  const b = new Bench(
    'performance',
    'A shared batch fixture',
    'Several requests sit in one batch fixture and share a processing step; this illustration makes no timing claim.',
  );
  b.slab('batch.bed', -85, -34, 121, 52, 0, 4, { detail: true });
  for (let lane = 0; lane < 4; lane++) {
    const y = -28 + lane * 11;
    b.slab(`batch.guide-${lane}`, -81, y, 113, 2, 4, 2, { tone: 'lo' });
    for (let tile = 0; tile < 3; tile++)
      b.slab(`request-${lane}-${tile}`, -76 + tile * 28, y + 2, 20, 6, 4, 4, {
        detail: true,
        lit: lane === 1 && tile === 1,
      });
  }
  for (const [i, x] of [-83, 25].entries())
    b.slab(`batch.post-${i}`, x, -36, 6, 6, 4, 39);
  b.slab('batch.processing-bar', -83, -36, 114, 6, 43, 6, { detail: true });
  for (let i = 0; i < 4; i++)
    b.slab(`batch.probe-${i}`, -73 + i * 26, -36, 5, 6, 49, 4);
  b.terminal(48, -40);
  for (let i = 0; i < 4; i++)
    b.slab(`output.token-${i}`, -70 + i * 20, 24, 12, 8, 0, 3, { tone: 'hi' });
  return b.finish(
    'Request-processing test bench with four batch lanes, a shared processing bar and a completed request tray.',
  );
}

function robotics() {
  const b = new Bench(
    'robotics',
    'Perception, planning and action',
    'A mounted camera observes objects; a jointed arm reaches over the sorting bed.',
  );
  b.slab('conveyor.bed', -75, -10, 134, 26, 0, 5, { detail: true });
  for (let i = 0; i < 12; i++)
    b.slab(`conveyor.segment-${i}`, -72 + i * 10, -7, 8, 20, 5, 2, {
      radius: 0.5,
      tone: 'lo',
    });
  for (const [i, x] of [-55, -12, 30].entries())
    b.slab(`object-${i}`, x, -2, 8, 8, 7, 7, { lit: i === 1, detail: true });
  b.slab('robot.mount', -68, -43, 26, 25, 0, 5, { detail: true });
  b.cylinder('robot.shoulder', -55, -31, 9, 5, 8, { knurl: true });
  b.slab('robot.upper-arm', -61, -37, 12, 12, 13, 35, { seam: true });
  b.cylinder('robot.elbow', -55, -31, 8, 48, 5, { knurl: true });
  b.slab('robot.forearm', -55, -36, 49, 10, 53, 7, { detail: true });
  b.slab('robot.tool-slide', -14, -26, 8, 34, 53, 7, { detail: true });
  b.slab('robot.wrist', -14, -2, 8, 10, 39, 14);
  b.slab('robot.gripper-palm', -17, -2, 14, 10, 35, 4, { detail: true });
  b.slab('robot.gripper-left', -17, -2, 3, 10, 25, 10);
  b.slab('robot.gripper-right', -6, -2, 3, 10, 25, 10);
  b.slab('camera.foot', 69, -45, 18, 18, 0, 4, { detail: true });
  b.slab('camera.mast', 75, -39, 6, 6, 4, 65);
  b.slab('camera.housing', 68, -42, 20, 16, 69, 12, { detail: true });
  b.slab('camera.lens', 72, -26, 12, 3, 72, 6, { tone: 'hi' });
  for (let i = 0; i < 2; i++) {
    b.slab(`bin-${i}.floor`, -75 + i * 40, 28, 30, 14, 0, 2);
    b.slab(`bin-${i}.back`, -75 + i * 40, 28, 30, 2, 2, 7);
    b.slab(`bin-${i}.front`, -75 + i * 40, 40, 30, 2, 2, 7);
  }
  return b.finish(
    'Camera mast and articulated robot arm over a segmented conveyor, with sample objects and two receiving bins.',
  );
}

function research() {
  const b = new Bench(
    'research',
    'A navigation test rig',
    'A small agent navigates a field of possible actions and obstacles toward a goal; feedback guides subsequent decisions.',
  );
  for (let row = 0; row < 4; row++)
    for (let col = 0; col < 4; col++)
      b.slab(
        `field.tile-${row}-${col}`,
        -86 + col * 27,
        -44 + row * 18,
        26,
        17,
        0,
        2,
        { tone: 'lo', radius: 0.3 },
      );
  for (const [i, [x, y]] of [
    [-59, -26],
    [-5, -8],
    [-32, 10],
  ].entries())
    b.slab(`field.obstacle-${i}`, x + 3, y + 3, 17, 10, 2, 9, { detail: true });
  b.slab('agent.chassis', -80, -39, 15, 10, 2, 5, { lit: true, detail: true });
  for (let i = 0; i < 4; i++)
    b.slab(
      `agent.wheel-${i}`,
      -82 + (i % 2) * 17,
      -38 + Math.floor(i / 2) * 7,
      2,
      2,
      2,
      4,
      { tone: 'lo' },
    );
  b.slab('goal.pad', -2, 12, 11, 10, 2, 2, { tone: 'hi' });
  b.slab('goal.post', 2, 15, 2, 2, 4, 16);
  b.slab('goal.flag', 4, 15, 9, 2, 15, 5, { tone: 'hi' });
  b.terminal(49, -44);
  return b.finish(
    'Navigation test field with sixteen cells, obstacles, a small agent, a goal flag and a feedback terminal.',
  );
}

function cloud() {
  const b = new Bench(
    'cloud',
    'Controlled access and standby',
    'An access gate precedes the service banks; a separate standby bank illustrates a failover option.',
  );
  b.slab('cabinet.floor', -76, -46, 150, 60, 0, 4, { detail: true });
  for (const [i, x] of [-76, 68].entries())
    for (const [j, y] of [-46, 8].entries())
      b.slab(`cabinet.post-${i}-${j}`, x, y, 6, 6, 4, 69);
  for (let row = 0; row < 3; row++) {
    const z = 12 + row * 20;
    for (const [edge, y] of [-44, 4].entries())
      b.slab(`cabinet.support-${row}-${edge}`, -70, y, 138, 8, z - 3, 3);
    b.slab(`cabinet.shelf-${row}`, -70, -40, 138, 48, z, 3, {
      detail: true,
      tone: 'lo',
    });
    for (let col = 0; col < 3; col++) {
      const x = -64 + col * 44;
      b.slab(`service-${row}-${col}.module`, x, -22, 32, 30, z + 3, 11, {
        detail: true,
        seam: true,
      });
      b.slab(`service-${row}-${col}.status`, x + 12, 8, 7, 1, z + 8, 2, {
        tone: 'hi',
      });
    }
  }
  b.slab('cabinet.top', -76, -46, 150, 60, 73, 3, { detail: true });
  b.slab('access.pedestal', -87, 21, 35, 17, 0, 5, { detail: true });
  b.slab('access.left', -86, 24, 5, 9, 5, 20);
  b.slab('access.right', -58, 24, 5, 9, 5, 20);
  b.slab('access.gate', -81, 24, 23, 9, 21, 4, { lit: true, detail: true });
  return b.finish(
    'A service cabinet with three module banks, status indicators, a standby bank and a separate physical access gate.',
  );
}

function hardware() {
  const b = new Bench(
    'hardware',
    'Compute and memory movement',
    'Memory packages and compute sit on a board joined by conductive tracks; moving data is part of computation.',
  );
  b.slab('board.substrate', -83, -45, 119, 70, 0, 2, {
    detail: true,
    tone: 'lo',
  });
  for (let row = 0; row < 6; row++)
    b.slab(`board.bus-${row}`, -76, -34 + row * 8, 102, 0.8, 2, 0.6, {
      tone: 'lo',
      radius: 0.1,
    });
  for (let i = 0; i < 4; i++) {
    const x = -76 + (i % 2) * 68,
      y = -38 + Math.floor(i / 2) * 37;
    b.slab(`memory-${i}.support`, x, y, 25, 22, 2.6, 1);
    b.slab(`memory-${i}.package`, x, y, 25, 22, 3.6, 4, { detail: true });
  }
  b.slab('compute.socket', -44, -29, 33, 38, 2.6, 3, { detail: true });
  b.slab('compute.package', -42, -27, 29, 34, 5.6, 6, {
    lit: true,
    detail: true,
  });
  for (let fin = 0; fin < 8; fin++)
    b.slab(`compute.heatsink-${fin}`, -41 + fin * 3.5, -26, 1.4, 32, 11.6, 6, {
      radius: 0.2,
      tone: 'lo',
    });
  for (let i = 0; i < 6; i++)
    b.slab(`board.connector-${i}`, -76 + i * 17, 23, 10, 2, 2, 3, {
      tone: 'hi',
    });
  b.terminal(49, -44);
  return b.finish(
    'Processor demonstration board with a central compute package, heatsink fins, four memory packages, bus tracks and connectors.',
  );
}

function leadership() {
  const b = new Bench(
    'leadership',
    'Finite resources, deliberate tradeoffs',
    'Three finite resource trays make allocation visible: adding to one commitment reduces what remains available.',
  );
  for (let tray = 0; tray < 3; tray++) {
    const x = -86 + tray * 43;
    b.slab(`capacity-${tray}.tray`, x, -38, 36, 54, 0, 3, {
      detail: true,
      tone: 'lo',
    });
    b.slab(`capacity-${tray}.backstop`, x, -41, 36, 3, 0, 7);
    b.slab(`capacity-${tray}.ruler`, x, 18, 36, 4, 0, 0.8, {
      radius: 0.2,
      inner:
        k.lineSvg(k.topTicks(x + 2, x + 34, 4, 4, 18, 0.8, [1.5, 3], P).minor, {
          tone: 'lo',
        }) +
        k.lineSvg(k.topTicks(x + 2, x + 34, 4, 4, 18, 0.8, [1.5, 3], P).major, {
          tone: 'mid',
        }),
    });
    for (let row = 0; row < 3; row++)
      for (let token = 0; token < [2, 3, 1][tray]; token++)
        b.slab(
          `capacity-${tray}.token-${row}-${token}`,
          x + 4 + token * 9,
          -31 + row * 14,
          7,
          10,
          3,
          6,
          { lit: tray === 1 && row === 1 && token === 1, detail: true },
        );
  }
  b.terminal(53, -45, 0, 40, 47);
  return b.finish(
    'Capacity-planning console with three finite resource trays, allocation tokens, rooted scale strips and a planning instrument.',
  );
}

function deployment() {
  const b = new Bench(
    'deployment',
    'Integration and acceptance',
    'Separate modules meet at an integration fixture; acceptance indicators represent checks before delivery.',
  );
  for (let module = 0; module < 3; module++) {
    const x = -86 + module * 43;
    b.slab(`module-${module}.mount`, x, -39, 34, 39, 0, 3, {
      detail: true,
      tone: 'lo',
    });
    b.slab(`module-${module}.case`, x + 3, -35, 28, 29, 3, 13, {
      seam: true,
      detail: true,
    });
    for (let i = 0; i < 3; i++)
      b.slab(`module-${module}.port-${i}`, x + 7 + i * 7, -6, 4, 2, 7, 4, {
        tone: 'hi',
      });
    for (let i = 0; i < 2; i++)
      b.slab(
        `module-${module}.test-pad-${i}`,
        x + 8 + i * 12,
        -30,
        5,
        7,
        16,
        1,
        { tone: 'hi' },
      );
  }
  b.slab('integration.fixture', -86, 5, 120, 13, 0, 6, {
    lit: true,
    detail: true,
  });
  for (let i = 0; i < 3; i++) {
    b.slab(`integration.connector-${i}`, -76 + i * 43, 0, 12, 5, 0, 3);
    b.cylinder(`acceptance.indicator-${i}`, -68 + i * 36, 11, 2, 6, 1, {
      tone: 'hi',
    });
  }
  b.terminal(50, -44);
  return b.finish(
    'Prototype integration bench with three module bays, physical connector pads, a shared fixture and three acceptance indicators.',
  );
}

const builders = {
  retrieval,
  agents: () => retrieval('agents'),
  infrastructure,
  performance,
  robotics,
  research,
  cloud,
  hardware,
  leadership,
  deployment,
};
const only = process.argv.find((arg) => arg.startsWith('--only='))?.slice(7);
const manifest = [];
for (const [id, build] of Object.entries(builders)) {
  if (only && id !== only) continue;
  console.log(`\n${id}: building and depth-sorting Anatomy Figure`);
  const figure = build();
  if (id === 'retrieval')
    writeFileSync(
      'src/data/generated/retrieval-figure.json',
      JSON.stringify(figure),
    );
  const { svg, ...metadata } = figure;
  manifest.push({ ...metadata, inlineBytes: Buffer.byteLength(svg) });
}
if (!only)
  writeFileSync(
    'src/data/generated/anatomy-manifest.json',
    JSON.stringify(manifest, null, 2),
  );
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

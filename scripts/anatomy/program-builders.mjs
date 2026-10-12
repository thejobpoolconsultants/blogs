import {
  navigationObstacles,
  navigationReplay,
} from '../../src/data/program-explainers.ts';

/** Mechanisms are laid out in world coordinates; all contacts are audited. */
export function programBuilders(Bench, P, k, A, G) {
  function laptop(b, prefix, x, y, material = 'blue') {
    b.slab(`${prefix}.base`, x, y, 58, 47, 0, 3, { detail: true, material });
    b.cylinder(`${prefix}.hinge-left`, x + 5, y + 6, 3, 3, 2, { material });
    b.cylinder(`${prefix}.hinge-right`, x + 53, y + 6, 3, 3, 2, { material });
    b.slab(`${prefix}.display-case`, x, y + 2, 58, 8, 5, 41, {
      detail: true,
      seam: true,
      material,
    });
    b.slab(`${prefix}.screen`, x + 4, y + 10, 50, 0.8, 10, 31, {
      material,
      inner: b.screenRules(x + 8, y + 10.8, 11, 42, 27),
    });
    for (let row = 0; row < 3; row++)
      for (let col = 0; col < 6; col++)
        b.slab(
          `${prefix}.key-${row}-${col}`,
          x + 6 + col * 8,
          y + 17 + row * 6,
          6,
          4,
          3,
          1,
          { radius: 0.6, material },
        );
    b.slab(`${prefix}.trackpad`, x + 20, y + 37, 18, 7, 3, 0.4, { material });
  }
  function papers(b, prefix, x, y, w = 31, d = 35) {
    b.slab(`${prefix}.tray`, x, y, w, d, 0, 3, { detail: true });
    b.slab(`${prefix}.backstop`, x, y - 2, w, 2, 0, 10);
    for (let page = 0; page < 4; page++)
      b.slab(
        `${prefix}.document-${page}`,
        x + 3 + page * 0.3,
        y + 3 + page * 0.3,
        w - 6,
        d - 7,
        3 + page * 0.6,
        0.6,
        {
          radius: 0.4,
          inner: page === 3 ? b.rules(x + 7, y + 9, w - 14, 5.4, 4) : '',
        },
      );
  }
  function transition() {
    const b = new Bench('transition', 'A first-project learning workbench', '');
    papers(b, 'learning', -88, -31, 38, 44);
    b.slab('learning.code.mount', -37, -30, 44, 43, 0, 3, { detail: true });
    b.slab('learning.code.board', -34, -27, 38, 37, 3, 2, { detail: true });
    for (let row = 0; row < 3; row++)
      for (let col = 0; col < 3; col++)
        b.slab(
          `learning.code.exercise-${row}-${col}`,
          -29 + col * 10,
          -22 + row * 10,
          7,
          7,
          5,
          2,
          { detail: true },
        );
    b.slab('learning.connector.documents', -50, -12, 13, 3, 0, 2);
    b.slab('learning.connector.project', 7, -12, 24, 3, 0, 2);
    laptop(b, 'terminal', 31, -36);
    b.slab('learning.project.result', 51, 7, 19, 7, 3, 0.5, {
      material: 'blue',
    });
    return b.finish(
      'A learning workbench: a teal document tray, amber coding exercises and a blue laptop displaying a first project.',
    );
  }
  function agents() {
    const b = new Bench('agents', 'An assistant with knowledge and tools', '');
    b.slab('knowledge.cabinet-base', -88, -41, 39, 40, 0, 4, { detail: true });
    for (const [side, x] of [-88, -52].entries())
      b.slab(`knowledge.side-${side}`, x, -41, 3, 40, 4, 49, { seam: true });
    for (let row = 0; row < 3; row++) {
      b.slab(`knowledge.shelf-${row}`, -85, -41, 33, 40, 4 + row * 16, 2);
      for (let page = 0; page < 4; page++)
        b.slab(
          `knowledge.document-${row}-${page}`,
          -80 + page * 6,
          -32,
          4,
          23,
          6 + row * 16,
          11,
          { inner: b.rules(-79 + page * 6, -27, 2, 17 + row * 16, 2) },
        );
    }
    b.slab('knowledge.cabinet-top', -88, -41, 39, 40, 53, 3, { detail: true });
    laptop(b, 'assistant', -27, -40, 'violet');
    for (const [index, tool] of ['draft', 'locked-send'].entries()) {
      b.slab(`tool.${tool}.mount`, 48, -40 + index * 27, 34, 23, 0, 3, {
        detail: true,
      });
      b.slab(`tool.${tool}.body`, 52, -36 + index * 27, 26, 15, 3, 10, {
        detail: true,
        seam: true,
      });
      b.cylinder(
        `tool.${tool}.permission`,
        index ? 65 : 76,
        index ? -2 : -23,
        index ? 3 : 2,
        13,
        2,
        { material: index ? 'navy' : 'blue', inner: '' },
      );
    }
    b.slab('tool.draft.sheet', 54, -35, 20, 11, 13, 0.6, {
      material: 'blue',
      inner: b.rules(57, -32, 13, 13.6),
    });
    for (const [i, x] of [58, 73].entries())
      b.slab(`tool.locked-send.lock-side-${i}`, x, 2, 2, 2, 13, 6, {
        material: 'navy',
      });
    b.slab('tool.locked-send.lock-bar', 58, 2, 17, 2, 19, 2, {
      material: 'navy',
    });
    b.slab('connection.documents', -49, -14, 22, 4, 0, 2);
    b.slab('connection.tools', 31, -14, 14, 4, 0, 2);
    b.slab('connection.tools.branch', 45, -17, 3, 28, 0, 2, {
      material: 'blue',
    });
    return b.finish(
      'A violet assistant laptop connected to a teal policy cabinet and two blue tool modules: a permitted draft tool and a locked send tool.',
    );
  }
  function infrastructure() {
    const b = new Bench(
      'infrastructure',
      'A cutaway AI infrastructure rack',
      '',
    );
    b.slab('rack.plinth', -67, -49, 134, 67, 0, 4, {
      detail: true,
      tone: 'lo',
    });
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
        const x = -50 + col * 36,
          prefix = row === 0 ? `storage-${col}` : `compute-${row}-${col}`;
        b.slab(`${prefix}.package`, x, -20, 28, 30, z + 3, 5, { detail: true });
        const vents = Array.from({ length: 5 }, (_, vent) =>
          k.planOutline(
            { x: x + 3 + vent * 4.5, y: -15, w: 1.3, d: 18, r: 0.6 },
            z + 10,
            P,
            4,
          ),
        ).join('');
        b.slab(`${prefix}.heatsink`, x + 2, -18, 24, 26, z + 8, 2, {
          inner: k.lineSvg(vents, { tone: 'faint' }),
        });
      }
    }
    for (const [edge, y] of [-45, 6].entries())
      b.slab(`network.support-${edge}`, -59, y, 118, 8, 91, 3);
    b.slab('network.switch', -59, -41, 118, 51, 94, 4, { detail: true });
    for (let i = 0; i < 5; i++)
      b.slab(`network.port-${i}`, -45 + i * 19, 10, 12, 3, 94, 3);
    b.slab('cooling.plinth', 75, -46, 16, 57, 0, 6, { detail: true });
    for (let i = 0; i < 8; i++)
      b.slab(`cooling.fin-${i}`, 75, -43 + i * 6, 16, 3, 6, 45, {
        radius: 0.3,
      });
    b.slab('cooling.top', 75, -46, 16, 57, 51, 3, { detail: true });
    b.cylinder('cooling.fan', 83, -18, 7, 54, 3, { knurl: true });
    b.cylinder('cooling.hub', 83, -18, 2.5, 57, 2);
    return b.finish(
      'Cutaway GPU rack: three blue accelerator shelves above teal storage, a teal network switch, and a separate amber finned cooling assembly.',
    );
  }
  function performance() {
    const b = new Bench('performance', 'A compatible-request batching rig', '');
    papers(b, 'incoming', -87, -41, 34, 36);
    b.slab('batch.bed', -80, 1, 132, 33, 0, 4, { detail: true });
    for (const [i, x] of [-80, 46].entries())
      for (const [j, y] of [1, 29].entries())
        b.slab(`batch.post-${i}-${j}`, x, y, 6, 5, 4, 23);
    for (const [i, y] of [1, 29].entries())
      b.slab(`batch.rail-${i}`, -80, y, 132, 5, 27, 3, { seam: true });
    b.slab('batch.carriage', -74, 1, 32, 33, 30, 3, {
      detail: true,
      moving: true,
      move: [84, 0, 0],
    });
    for (let row = 0; row < 2; row++)
      for (let col = 0; col < 2; col++)
        b.slab(
          `request-${row}-${col}`,
          -70 + col * 14,
          8 + row * 11,
          11,
          8,
          33,
          3,
          { detail: true, moving: true, move: [84, 0, 0] },
        );
    b.slab('batch.processing.mount', 48, -41, 40, 36, 0, 4, { detail: true });
    b.slab('batch.processing.module', 51, -38, 34, 30, 4, 11, {
      detail: true,
      seam: true,
    });
    for (let cell = 0; cell < 8; cell++)
      b.slab(
        `batch.processing.cell-${cell}`,
        55 + (cell % 4) * 7,
        -33 + Math.floor(cell / 4) * 12,
        5,
        8,
        15,
        3,
      );
    for (const [i, y] of [1, 29].entries())
      b.slab(`batch.processing.support-${i}`, 46, y, 6, 5, 30, 6);
    b.slab('batch.processing.head', 10, 1, 42, 33, 36, 6, { detail: true });
    b.slab('batch.processing.connection', 48, -5, 4, 6, 0, 2);
    b.slab('output.tray', -28, -41, 56, 32, 0, 3, { detail: true });
    for (let request = 0; request < 4; request++)
      b.slab(
        `output.request-${request}`,
        -23 + request * 12,
        -32,
        9,
        16,
        3,
        2,
        { detail: true },
      );
    return b.finish(
      'A batching rig with an incoming request tray, four blue requests on an amber sliding carriage, a violet compute module and a completed tray.',
      true,
    );
  }
  function robotics(pose = { y: 0, palm: 35, objectY: 0, objectZ: 7 }) {
    const b = new Bench('robotics', 'A vision-guided sorting arm', '');
    b.slab('conveyor.bed', -75, -10, 134, 26, 0, 5, { detail: true });
    for (let i = 0; i < 12; i++)
      b.slab(`conveyor.segment-${i}`, -72 + i * 10, -7, 8, 20, 5, 2, {
        radius: 0.5,
        tone: 'lo',
      });
    for (const [i, x] of [-55, -14, 30].entries())
      b.slab(
        `object-${i}`,
        x,
        -2 + (i === 1 ? pose.objectY : 0),
        8,
        8,
        i === 1 ? pose.objectZ : 7,
        10,
        { detail: true },
      );
    b.slab('robot.mount', -68, -43, 26, 25, 0, 5, { detail: true });
    b.cylinder('robot.shoulder', -55, -31, 9, 5, 8, { knurl: true });
    b.slab('robot.upper-arm', -61, -37, 12, 12, 13, 35, { seam: true });
    b.cylinder('robot.elbow', -55, -31, 8, 48, 5, { knurl: true });
    b.slab('robot.forearm', -55, -36, 49, 10, 53, 7, { detail: true });
    b.slab('robot.tool-slide', -14, -26, 8, 71, 53, 7, { detail: true });
    b.slab(
      'robot.wrist',
      -14,
      -2 + pose.y,
      8,
      10,
      pose.palm + 4,
      53 - pose.palm - 4,
    );
    b.slab('robot.gripper-palm', -17, -2 + pose.y, 14, 10, pose.palm, 4, {
      detail: true,
    });
    b.slab('robot.gripper-left', -17, -2 + pose.y, 3, 10, pose.palm - 10, 10);
    b.slab('robot.gripper-right', -6, -2 + pose.y, 3, 10, pose.palm - 10, 10);
    b.slab('camera.foot', 69, -45, 18, 18, 0, 4, { detail: true });
    b.slab('camera.mast', 75, -39, 6, 6, 4, 65);
    b.slab('camera.housing', 68, -42, 20, 16, 69, 12, { detail: true });
    b.slab('camera.lens', 72, -26, 12, 3, 72, 6);
    for (let i = 0; i < 2; i++) {
      const x = i === 0 ? -75 : -39,
        width = i === 0 ? 30 : 38;
      b.slab(`bin-${i}.floor`, x, 28, width, 14, 0, 2);
      b.slab(`bin-${i}.back`, x, 28, width, 2, 2, 7);
      b.slab(`bin-${i}.front`, x, 40, width, 2, 2, 7);
      b.slab(`bin-${i}.side-left`, x, 30, 2, 10, 2, 7);
      b.slab(`bin-${i}.side-right`, x + width - 2, 30, 2, 10, 2, 7);
    }
    return b;
  }
  function research(at = [0, 0], reward = navigationReplay(0).reward) {
    const b = new Bench('research', 'A fixed-policy navigation tabletop', '');
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
    for (const [i, [col, row]] of navigationObstacles.entries())
      b.slab(
        `field.obstacle-${i}`,
        -83 + col * 27,
        -41 + row * 18,
        17,
        10,
        2,
        9,
        { detail: true },
      );
    const x = -80 + at[0] * 27,
      y = -39 + at[1] * 18;
    b.slab('agent.chassis', x, y, 15, 10, 5, 5, { detail: true });
    // Four round wheels, axles perpendicular to travel, seated on the tabletop.
    for (let side = 0; side < 2; side++)
      for (let axle = 0; axle < 2; axle++) {
        const F = G.frameAlong([x + side * 15, y + 2 + axle * 6, 5], [1, 0, 0]);
        b.record(
          `agent.wheel-${side}-${axle}`,
          [x + side * 15, y + 2 + axle * 6, 5],
          k.solidSvg(G.disc(side ? 0 : -2, side ? 2 : 0, 3, F, P), {
            tone: 'lo',
          }),
          A.disc(F, side ? 0 : -2, side ? 2 : 0, 3, {
            name: `agent.wheel-${side}-${axle}`,
          }),
          {},
        );
      }
    b.slab('goal.pad', 22, 12, 11, 10, 0, 2);
    b.slab('goal.post', 26, 15, 2, 2, 2, 16);
    b.slab('goal.flag', 28, 15, 9, 2, 13, 5);
    b.slab('reward.plinth', 48, -44, 40, 50, 0, 4, { detail: true });
    b.cylinder('reward.dial-body', 68, -19, 17, 4, 4, { knurl: true });
    const ticks = k.radialTicks(68, -19, 16, 24, 4, 8, [1, 3], P);
    b.slab('reward.scale-mount', 61, 4, 14, 2, 4, 0.5, {
      inner: b.rules(64, 5, 8, 4.5, 1),
    });
    // Dial ticks resolve into a closed ring; needle is a printed indicator.
    b.R.items.find((item) => item.name === 'reward.dial-body').svg += k.lineSvg(
      k.ring(68, -19, 16, 8, P, 48) + ticks.minor + ticks.major,
      { tone: 'mid' },
    );
    const angle = ((-150 + ((reward + 20) / 40) * 300) * Math.PI) / 180;
    b.R.items.find((item) => item.name === 'reward.dial-body').svg +=
      `<g data-reward-needle="">${k.lineSvg(k.segment([68, -19, 8], [68 + 13 * Math.cos(angle), -19 + 13 * Math.sin(angle), 8], P), { tone: 'hi', free: true })}</g>`;
    b.cylinder('reward.needle-hub', 68, -19, 1.5, 8, 1);
    for (let i = 0; i < 6; i++)
      b.slab(`reward.feedback-${i}`, 52 + i * 5, 0, 3, 4, 4, 2);
    return b;
  }
  function cloud(pose = { gate: 16, request: 20 }) {
    const b = new Bench('cloud', 'An access gate and replaceable services', '');
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
        b.slab(`service-${col}-${row}.module`, x, -22, 32, 30, z + 3, 11, {
          detail: true,
          seam: true,
        });
        b.slab(`service-${col}-${row}.status`, x + 12, 8, 7, 1, z + 8, 2, {
          material: 'green',
        });
      }
    }
    b.slab('cabinet.top', -76, -46, 150, 60, 73, 3, { detail: true });
    b.slab('access.pedestal', -87, 21, 35, 17, 0, 5, { detail: true });
    b.slab('access.left', -86, 24, 5, 9, 5, 20);
    b.slab('access.right', -58, 24, 5, 9, 5, 20);
    b.slab('access.gate', -81, 24, 23, 9, 5 + pose.gate, 4, { detail: true });
    b.slab('access.entry', -79, 38, 14, 18, 0, 5, { detail: true });
    b.slab('access.request', -75, 47 - pose.request, 6, 6, 5, 3, {
      detail: true,
    });
    b.slab('router.mount', -38, 21, 53, 17, 0, 4, { detail: true });
    for (let i = 0; i < 3; i++)
      b.slab(`router.port-${i}`, -32 + i * 15, 27, 9, 7, 4, 3, {
        detail: true,
      });
    b.slab('router.access-route', -52, 27, 14, 4, 0, 2, { material: 'green' });
    b.slab('router.service-route', 9, 14, 6, 7, 0, 2);
    return b;
  }
  function hardware() {
    const b = new Bench('hardware', 'A conceptual accelerator cutaway', '');
    b.slab('board.substrate', -83, -45, 173, 70, 0, 2, {
      detail: true,
      tone: 'lo',
    });
    for (let row = 0; row < 6; row++)
      b.slab(`board.bus-${row}`, -76, -34 + row * 8, 158, 0.8, 2, 0.6, {
        radius: 0.1,
      });
    for (let i = 0; i < 4; i++) {
      const x = i < 2 ? -76 : 49,
        y = -38 + (i % 2) * 37,
        prefix = i < 2 ? 'memory-local' : 'memory-external';
      b.slab(`${prefix}-${i}.support`, x, y, 25, 22, 2.6, 1);
      b.slab(`${prefix}-${i}.package`, x, y, 25, 22, 3.6, 4, { detail: true });
      b.slab(
        `${i < 2 ? 'operand' : 'result'}-${i}`,
        x + 7,
        y + 6,
        11,
        10,
        7.6,
        1,
        { detail: true },
      );
    }
    b.slab('compute.socket', -32, -29, 49, 38, 2.6, 3, { detail: true });
    b.slab('compute.array-base', -30, -27, 45, 34, 5.6, 2, { detail: true });
    for (let row = 0; row < 2; row++)
      for (let col = 0; col < 2; col++)
        b.slab(
          `compute.cell-${row}-${col}`,
          -26 + col * 20,
          -23 + row * 14,
          16,
          11,
          7.6,
          4,
          { detail: true },
        );
    for (let i = 0; i < 9; i++)
      b.slab(`board.connector-${i}`, -76 + i * 18, 23, 10, 2, 2, 3);
    return b.finish(
      'Conceptual accelerator board with an exposed violet processing array between teal local and external memory, joined by amber data paths.',
    );
  }
  function leadership() {
    const b = new Bench('leadership', 'An architecture allocation console', '');
    for (let tray = 0; tray < 3; tray++) {
      const x = -86 + tray * 43;
      b.slab(`capacity-${tray}.tray`, x, -38, 36, 54, 0, 3, { detail: true });
      b.slab(`capacity-${tray}.backstop`, x, -41, 36, 3, 0, 7);
      for (let row = 0; row < 3; row++)
        for (let token = 0; token < 2; token++)
          b.slab(
            `capacity-${tray}.token-${row}-${token}`,
            x + 6 + token * 12,
            -30 + row * 14,
            9,
            11,
            3,
            6,
            { detail: true },
          );
      b.slab(`connection.module-${tray}`, x + 14, -44, 4, 3, 0, 1);
    }
    b.slab('connection.backplane', -86, -49, 166, 5, 0, 1);
    b.slab('connection.console', 66, -44, 4, 6, 0, 1);
    b.slab('console.case', 53, -38, 39, 57, 0, 6, { detail: true, seam: true });
    for (let control = 0; control < 3; control++) {
      b.slab(
        `constraint.scale-${control}`,
        58,
        -32 + control * 15,
        16,
        8,
        6,
        0.5,
        { inner: b.rules(61, -29 + control * 15, 10, 6.5, 2) },
      );
      b.cylinder(
        `constraint.dial-${control}`,
        83,
        -28 + control * 15,
        4,
        6,
        3,
        { knurl: true },
      );
    }
    for (let i = 0; i < 3; i++)
      b.slab(`console.indicator-${i}`, 59 + i * 9, 14, 6, 3, 6, 1);
    return b.finish(
      'Architecture console with application, data and infrastructure allocation trays linked by a teal backplane, and three amber constraint dials.',
    );
  }
  function deployment() {
    const b = new Bench(
      'deployment',
      'A customer workflow acceptance bench',
      '',
    );
    papers(b, 'records.orders', -88, -42, 31, 37);
    papers(b, 'records.returns', -88, 3, 31, 36);
    for (const [i, name] of ['orders', 'returns'].entries()) {
      const y = -32 + i * 45;
      b.slab(`connector.${name}.mount`, -42, y, 23, 18, 0, 3, { detail: true });
      b.slab(`connector.${name}.socket`, -37, y + 4, 13, 10, 3, 5, {
        detail: true,
      });
      b.slab(`connector.${name}.source-route`, -57, y + 5, 15, 4, 0, 2);
      b.slab(`connector.${name}.app-route`, -19, y + 5, 20, 4, 0, 2);
    }
    laptop(b, 'prototype', 1, -41);
    b.slab('acceptance.station', 67, -41, 24, 54, 0, 4, {
      detail: true,
      seam: true,
    });
    for (let i = 0; i < 3; i++) {
      b.slab(`acceptance.check-${i}`, 71, -35 + i * 15, 16, 10, 4, 3, {
        detail: true,
      });
      b.cylinder(`acceptance.pass-${i}`, 79, -30 + i * 15, 2.5, 7, 1);
    }
    b.slab('connector.acceptance', 59, -11, 8, 4, 0, 2);
    return b.finish(
      'Two trays of customer records feed distinct connectors, a blue application prototype and a green station with three acceptance checks.',
    );
  }
  const robotLabel =
    'A teal camera observes blue and amber blocks; a coral sorting arm places the amber block in its matching bin.';
  const researchLabel =
    'A violet wheeled robot on an obstacle tabletop, a teal goal flag and an amber physical reward indicator.';
  return {
    transition,
    agents,
    infrastructure,
    performance,
    robotics: () => robotics().finish(robotLabel),
    research: () => research().finish(researchLabel),
    cloud: () =>
      cloud().finish(
        'Service enclosure with three replaceable blue service banks, green health indicators, an access gate and a connected router.',
      ),
    hardware,
    leadership,
    deployment,
    robotBench: robotics,
    researchBench: research,
    cloudBench: cloud,
    robotLabel,
    researchLabel,
    navigationReplay,
  };
}

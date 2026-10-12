/** Authored teaching examples, not live AI, hardware benchmarks or training. */
export const programExplainers = {
  transition: {
    intro:
      'Start with the basics, practice using AI and build your first project.',
    caption:
      'Progress from understanding AI to applying it in a practical project.',
    build:
      'A simple assistant that answers questions from a small set of documents.',
    learn:
      'Practice AI foundations, working with documents and testing a first project.',
    hint: 'Choose a learning stage',
    options: ['Understand AI', 'Apply AI', 'Build a project'],
    states: [
      [
        'Understand AI',
        'Read a short introduction and identify a question AI could help answer.',
        ['learning.document', 'learning.tray'],
      ],
      [
        'Apply AI',
        'Connect a sample document to a small coding exercise. Check the answer against the source.',
        ['learning.code', 'learning.connector'],
      ],
      [
        'Build a project',
        'The laptop displays a document assistant prototype. Try a question, inspect its source and record a limitation.',
        ['terminal', 'learning.project'],
      ],
    ],
    note: 'An illustrative learning sequence. Your starting point depends on your background and goals.',
    legend: ['Blue · project', 'Teal · documents', 'Amber · practice'],
  },
  agents: {
    intro:
      'Build assistants that use knowledge and tools to complete useful tasks.',
    caption:
      'An AI assistant retrieves information and uses tools to support a task.',
    build:
      'A document-grounded enterprise assistant with controlled tool access.',
    learn:
      'Practice retrieval, source checking, tool permissions and evaluating grounded answers.',
    hint: 'Follow the sample request',
    options: ['Retrieve policy', 'Prepare draft', 'Grounded response'],
    states: [
      [
        'Retrieve policy',
        'Question: “Can I request remote work?” Sample policy: a manager must review each request. The cabinet supplies that source.',
        ['knowledge', 'connection.documents'],
      ],
      [
        'Prepare draft',
        'A permitted draft tool prepares a request for manager review. The send tool remains locked; nothing is submitted.',
        ['tool.draft', 'connection.tools'],
      ],
      [
        'Grounded response',
        '“You can prepare a request; approval requires manager review.” Source: Sample remote-work policy, §1. Draft ready for your review.',
        ['assistant', 'tool.draft'],
      ],
    ],
    note: 'Three authored states, not a live assistant. Tools only prepare a local demonstration draft.',
    legend: ['Violet · assistant', 'Teal · knowledge', 'Blue · tools'],
  },
  infrastructure: {
    intro:
      'Learn how the infrastructure supporting AI workloads works together.',
    caption:
      'Compute, networking, storage and cooling support an AI workload together.',
    build: 'An AI cluster design with a deployment and monitoring plan.',
    learn:
      'Practice workload placement, network and storage planning, cooling and monitoring.',
    hint: 'Choose an illustrative workload',
    options: ['Model computation', 'Move a dataset', 'Load model weights'],
    states: [
      [
        'Model computation',
        'Accelerator modules process the workload. Networking connects the rack; storage supplies inputs.',
        ['compute', 'network'],
      ],
      [
        'Move a dataset',
        'The network switch moves data between storage and compute. The teal ports show the shared route.',
        ['network', 'storage'],
      ],
      [
        'Load model weights',
        'Storage supplies saved model weights to accelerator memory before computation.',
        ['storage', 'compute-0'],
      ],
    ],
    note: 'Illustrative rack, without hardware specifications or measured temperatures. Cooling carries heat away; it does not add compute capacity.',
    legend: [
      'Blue · accelerators',
      'Teal · network / storage',
      'Amber · heat removal',
    ],
  },
  performance: {
    intro:
      'Make AI responses faster and use serving resources more efficiently.',
    caption: 'Compare how scheduling and batching affect model serving.',
    build:
      'A benchmark comparing serving configurations for latency, throughput and cost.',
    learn:
      'Practice scheduling compatible requests and measuring both waiting and processing time.',
    hint: 'Compare the scheduling mode',
    options: ['Individual requests', 'Compatible batch'],
    states: [
      ['Individual requests', '', ['request-0', 'batch.processing', 'output']],
      [
        'Compatible batch',
        '',
        ['request', 'batch.carriage', 'batch.processing', 'output'],
      ],
    ],
    note: 'Simulated: four requests arrive at 0, 1, 2 and 3 ms; setup takes 4 ms and each request adds 1 ms. A batch waits for all four. Real results depend on hardware, workload and batching policy.',
    legend: ['Blue · requests', 'Violet · compute', 'Amber · waiting'],
  },
  robotics: {
    intro:
      'Build systems that sense their surroundings and act in the physical world.',
    caption:
      'A robot observes an object, plans a movement and performs an action.',
    build: 'A simulated vision-guided sorting robot.',
    learn:
      'Practice perception, motion planning and checking that an action matches the observation.',
    hint: 'Step through the sorting task',
    options: ['Observe', 'Plan', 'Act'],
    states: [
      [
        'Observe',
        'The camera identifies the amber block beneath the gripper. The matching amber bin is its destination.',
        ['camera', 'object-1', 'bin-1'],
      ],
      [
        'Plan',
        'Preview: lift vertically, move along the arm’s slide, then lower into the amber bin. The blue block stays on the sorting table.',
        ['robot.tool', 'robot.gripper', 'bin-1'],
      ],
      [
        'Act',
        'The gripper lifts the amber block, moves it to the matching bin and releases it. This is a fixed sorting demonstration.',
        ['robot', 'object-1', 'bin-1'],
      ],
    ],
    note: 'A simplified Cartesian tool slide on a jointed arm. The replay follows a fixed, collision-checked path; it is not live robot control.',
    legend: [
      'Teal · camera',
      'Coral · arm',
      'Blue / amber · matching objects and bins',
    ],
  },
  research: {
    intro: 'Explore how a system improves its decisions through feedback.',
    caption: 'Compare decisions before and after learning from feedback.',
    build: 'A reproducible reinforcement-learning experiment in simulation.',
    learn:
      'Practice policies, reward rules, reproducible evaluation and comparing decisions.',
    hint: 'Replay a fixed policy',
    options: ['Early policy', 'Improved policy'],
    states: [
      ['Early policy replay', '', ['agent', 'reward', 'field']],
      ['Improved policy replay', '', ['agent', 'reward', 'goal']],
    ],
    note: 'Fixed illustrative policies, not live training. Both use the same rules: −1 per move, −4 extra for a collision and +20 for reaching the goal.',
    legend: ['Violet · learner', 'Amber · reward', 'Teal · goal / route'],
  },
  cloud: {
    intro: 'Keep AI services available, observable and protected.',
    caption:
      'Control access and keep services operating when an instance fails.',
    build:
      'A Kubernetes AI service with access controls, monitoring and recovery.',
    learn:
      'Practice permission checks, health monitoring and routing to available workloads.',
    hint: 'Choose a service request',
    options: ['Authorized request', 'Denied request', 'Instance fails'],
    states: [
      [
        'Authorized request',
        'Permission granted. The gate opens the route to service A; its health indicator is available.',
        ['access', 'router', 'service-0'],
      ],
      [
        'Denied request',
        'Permission denied. The request stops at the gate and never reaches a workload.',
        ['access'],
      ],
      [
        'Instance fails',
        'Service A is unavailable. An authorized request is routed to healthy service B instead.',
        ['router', 'service-1'],
      ],
    ],
    note: 'Simplified access and failover model. Real Kubernetes recovery also depends on probes, networking, policy and application state.',
    legend: [
      'Blue · services',
      'Green · permission',
      'Coral · denied / failed',
    ],
  },
  hardware: {
    intro: 'Understand how processors and memory execute AI computations.',
    caption: 'Follow an AI computation through memory and processing hardware.',
    build: 'A small accelerator simulation or kernel experiment.',
    learn:
      'Practice data movement, local memory and matrix operations before writing results back.',
    hint: 'Follow a small matrix operation',
    options: ['Load operands', 'Compute', 'Write result'],
    states: [
      [
        'Load operands',
        'A = [[1, 2], [3, 4]] and B = [[1, 0], [0, 1]] move from external memory into local memory.',
        ['memory', 'board.bus', 'operand'],
      ],
      [
        'Compute',
        'The 2 × 2 array multiplies A by the identity matrix B. Each output sums two products.',
        ['compute', 'operand'],
      ],
      [
        'Write result',
        'C = [[1, 2], [3, 4]] is written back to external memory. The same operands drive the displayed result.',
        ['memory-external', 'board.bus', 'result'],
      ],
    ],
    note: 'Conceptual cutaway, not a commercial chip layout. This authored matrix example illustrates data movement and arithmetic.',
    legend: [
      'Violet · compute array',
      'Teal · memory',
      'Amber · operands / result',
    ],
  },
  leadership: {
    intro:
      'Make architecture decisions that connect technology, reliability and business constraints.',
    caption:
      'Explore how architecture choices balance capacity, resilience and resources.',
    build:
      'An enterprise architecture proposal with decisions, tradeoffs and a delivery roadmap.',
    learn:
      'Practice documenting demand, resource constraints, recovery needs and explicit tradeoffs.',
    hint: 'Choose an architecture scenario',
    options: ['Balanced demand', 'Higher demand', 'Resilient deployment'],
    states: [
      [
        'Balanced demand',
        'Demand: 2 app units. Budget: 6 resource units. Allocate 2 application, 2 data and 2 infrastructure units; no spare app instance.',
        [
          'capacity-0.token-0',
          'capacity-1.token-0',
          'capacity-2.token-0',
          'console',
        ],
      ],
      [
        'Higher demand',
        'Demand: 4 app units. Budget: 8 resource units. Allocate 4 application, 2 data and 2 infrastructure units. More capacity leaves no spare application instance.',
        [
          'capacity-0',
          'capacity-1.token-0',
          'capacity-2.token-0',
          'constraint',
        ],
      ],
      [
        'Resilient deployment',
        'Demand: 2 app units. Budget: 8 resource units. Allocate 4 application, 2 data and 2 infrastructure units. Two spare app units support recovery, but use extra resources.',
        ['capacity', 'connection', 'constraint'],
      ],
    ],
    note: 'Illustrative scenarios, not capacity forecasts, leadership scores or business predictions. Units are arbitrary planning tokens.',
    legend: [
      'Navy · console',
      'Teal · connected modules',
      'Amber · resource constraints',
    ],
  },
  deployment: {
    intro:
      'Turn a customer’s workflow problem into a working, tested solution.',
    caption: 'Connect customer needs, implementation and acceptance testing.',
    build:
      'A customer-facing AI workflow demo with deployment and adoption measures.',
    learn:
      'Practice discovering the task, integrating a source, prototyping and verifying acceptance criteria.',
    hint: 'Choose a sample customer need',
    options: ['Find an order', 'Check a return'],
    states: [
      [
        'Find an order',
        'Need: locate order ORD-104. Connect the order records, run the prototype and check: exact ID ORD-104, status “Packed”, source “Orders”. All three checks pass on the sample fixture.',
        ['records.orders', 'connector.orders', 'prototype', 'acceptance'],
      ],
      [
        'Check a return',
        'Need: check return R-12. Connect the return records, run the prototype and check: exact ID R-12, status “Awaiting inspection”, source “Returns”. All three checks pass on the sample fixture.',
        ['records.returns', 'connector.returns', 'prototype', 'acceptance'],
      ],
    ],
    note: 'Local sample records and explicit acceptance checks, not a connected customer system or a production deployment.',
    legend: [
      'Teal · records',
      'Blue · integration',
      'Green · acceptance checks',
    ],
  },
} as const;

export type ProgramKind = keyof typeof programExplainers;
export const requestArrivals = [0, 1, 2, 3];
export function servingSimulation(batch: boolean) {
  const setup = 4,
    perRequest = 1;
  const completions = batch
    ? requestArrivals.map(
        () =>
          Math.max(...requestArrivals) +
          setup +
          perRequest * requestArrivals.length,
      )
    : requestArrivals.map((_, index) => (index + 1) * (setup + perRequest));
  const elapsed = Math.max(...completions);
  return {
    completions,
    elapsed,
    firstResponse: completions[0],
    throughput: (requestArrivals.length / elapsed) * 1000,
    meanLatency:
      completions.reduce(
        (sum, time, index) => sum + time - requestArrivals[index],
        0,
      ) / completions.length,
  };
}
export const navigationObstacles = [
  [1, 1],
  [2, 1],
  [1, 3],
];
export const navigationPolicies = [
  [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, 1],
    [0, 1],
    [1, 0],
    [1, 0],
    [1, 0],
    [0, 1],
  ],
  [
    [1, 0],
    [1, 0],
    [1, 0],
    [0, 1],
    [0, 1],
    [0, 1],
  ],
];
export function navigationReplay(policy: number) {
  let x = 0,
    y = 0,
    reward = 0,
    collisions = 0;
  const positions = [[x, y]];
  for (const [dx, dy] of navigationPolicies[policy]) {
    reward -= 1;
    const nx = x + dx,
      ny = y + dy;
    if (
      nx < 0 ||
      nx > 3 ||
      ny < 0 ||
      ny > 3 ||
      navigationObstacles.some(([ox, oy]) => nx === ox && ny === oy)
    ) {
      reward -= 4;
      collisions++;
    } else {
      x = nx;
      y = ny;
    }
    positions.push([x, y]);
    if (x === 3 && y === 3) {
      reward += 20;
      break;
    }
  }
  return {
    positions,
    reward,
    collisions,
    moves: positions.length - 1,
    reachedGoal: x === 3 && y === 3,
  };
}
export function demonstrationState(kind: ProgramKind, choice: number) {
  const demo = programExplainers[kind];
  if (!Number.isInteger(choice) || choice < 0 || choice >= demo.states.length)
    throw new RangeError('Unknown demonstration state');
  const [title, description, active] = demo.states[choice];
  let text: string = description;
  if (kind === 'performance') {
    const result = servingSimulation(choice === 1);
    text = `Simulated: ${result.elapsed} ms to finish four requests; ${result.throughput.toFixed(0)} requests/s; mean latency ${result.meanLatency} ms. First response: ${result.firstResponse} ms. ${choice ? 'Batching shares setup work but the first request waits longer (11 ms versus 5 ms).' : 'Each request pays setup separately; the first response arrives sooner.'}`;
  }
  if (kind === 'research') {
    const result = navigationReplay(choice);
    text = `Fixed replay: ${result.moves} moves, ${result.collisions} collisions, reward ${result.reward}. ${result.reachedGoal ? 'Goal reached.' : 'Goal not reached.'} The amber indicator shows reward under the same rules for both policies.`;
  }
  if (kind === 'hardware' && choice === 2) {
    const { product } = matrixExample();
    text = `C = [[${product[0].join(', ')}], [${product[1].join(', ')}]] is written back to external memory. The result comes from the displayed operands A and B.`;
  }
  return { title, text, active };
}

export function matrixExample() {
  const a = [
      [1, 2],
      [3, 4],
    ],
    b = [
      [1, 0],
      [0, 1],
    ];
  const product = a.map((row) =>
    b[0].map((_, column) =>
      row.reduce((sum, value, index) => sum + value * b[index][column], 0),
    ),
  );
  return { a, b, product };
}

export function architectureScenario(
  demand: number,
  budget: number,
  resilient: boolean,
) {
  const application = demand + (resilient ? 2 : 0),
    data = 2,
    infrastructure = 2;
  const total = application + data + infrastructure;
  return {
    application,
    data,
    infrastructure,
    total,
    shortfall: Math.max(0, total - budget),
    text: `Illustrative: demand ${demand}; budget ${budget}. Allocate ${application} application, ${data} data and ${infrastructure} infrastructure units (${total} total). ${total > budget ? `This exceeds the budget by ${total - budget} units. Reduce demand, remove spare capacity or increase the budget.` : resilient ? 'Two spare application units support recovery and consume extra resources.' : 'No spare application capacity: an instance failure reduces available capacity.'}`,
  };
}
export const customerRecords = [
  { id: 'ORD-104', status: 'Packed', source: 'Orders' },
  { id: 'R-12', status: 'Awaiting inspection', source: 'Returns' },
] as const;
export function acceptanceChecks(choice: number) {
  const record = customerRecords[choice];
  const expected =
    choice === 0
      ? ['ORD-104', 'Packed', 'Orders']
      : ['R-12', 'Awaiting inspection', 'Returns'];
  return [record.id, record.status, record.source].map((actual, index) => ({
    criterion: ['Exact record ID', 'Correct status', 'Traceable source'][index],
    actual,
    passed: actual === expected[index],
  }));
}

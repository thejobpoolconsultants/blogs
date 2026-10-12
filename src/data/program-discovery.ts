/** Editorial examples, not a promise of course content or admission requirements. */
export const discovery = {
  agents: {
    concepts: 'Retrieval · Agents · Evaluation',
    sentence: 'Build assistants that work with knowledge and tools.',
    project: 'A document assistant with references and controlled actions.',
    labels: ['Knowledge', 'Tools'],
    alt: 'Document drawers supply an evidence chamber beside a chat laptop and separate permitted-tool modules.',
    article: 'How AI Assistants Work with Knowledge and Tools.',
    audience: 'Application engineers exploring document-grounded assistants.',
    steps: [
      'Prepare approved documents',
      'Retrieve permitted evidence',
      'Generate a referenced answer',
      'Check permission before a tool action',
    ],
  },
  infrastructure: {
    concepts: 'GPU clusters · Networking · Operations',
    sentence: 'Design the infrastructure behind AI workloads.',
    project: 'A cluster architecture with a workload and operations plan.',
    labels: ['Compute', 'Cooling'],
    alt: 'GPU racks connect to a network, storage array and copper cooling loop in a detailed data-center cutaway.',
    article: 'What Happens Inside the Infrastructure Behind an AI Workload.',
    audience: 'Systems engineers interested in compute infrastructure.',
    steps: [
      'Load workload inputs from storage',
      'Place work on accelerators',
      'Exchange data over the network',
      'Remove heat and monitor the system',
    ],
  },
  performance: {
    concepts: 'Inference · Scheduling · Profiling',
    sentence: 'Make model serving faster and more efficient.',
    project: 'A reproducible serving benchmark with documented tradeoffs.',
    labels: ['Requests', 'Batching'],
    alt: 'Blue request tiles wait on a conveyor, enter a violet processing machine in a group and leave as outputs.',
    article: 'Why Faster Model Serving Requires More Than a Faster GPU.',
    audience: 'Engineers who want to measure and improve serving behavior.',
    steps: [
      'Requests arrive',
      'Wait in a queue',
      'Schedule compatible work',
      'Compute and return outputs',
    ],
  },
  robotics: {
    concepts: 'Perception · Planning · Control',
    sentence: 'Connect what a robot sees to what it does.',
    project: 'A navigation simulation with trajectories and failure cases.',
    labels: ['Perception', 'Action'],
    alt: 'A wheeled warehouse robot senses an obstacle and follows a marked route toward its destination.',
    article: 'How a Robot Turns Sensor Information into Physical Action.',
    audience: 'Engineers exploring robotics and simulated autonomy.',
    steps: [
      'Sense the environment',
      'Estimate the robot state',
      'Plan a route',
      'Act and observe the result',
    ],
  },
  research: {
    concepts: 'Policies · Rewards · Experiments',
    sentence: 'Study how feedback shapes an agent’s decisions.',
    project: 'A reproducible policy comparison with an explicit reward rule.',
    labels: ['Agent', 'Feedback'],
    alt: 'A small agent navigates an obstacle grid connected to a policy selector and a reward-feedback instrument.',
    article: 'How Reinforcement Learning Turns Feedback into Better Decisions.',
    audience:
      'Learners interested in decision-making and research experiments.',
    steps: [
      'Observe the current state',
      'Choose an action with a policy',
      'Receive the next state and reward',
      'Evaluate an episode before changing the policy',
    ],
  },
  cloud: {
    concepts: 'Containers · Kubernetes · Access controls',
    sentence: 'Build and operate platforms for AI applications.',
    project: 'A scoped AI service with monitoring and recovery instructions.',
    labels: ['Services', 'Access'],
    alt: 'Connected container services sit inside a defined platform boundary with a gateway and identity checkpoint.',
    article: 'How to Build and Protect a Platform for AI Applications.',
    audience: 'Platform engineers working with services and access boundaries.',
    steps: [
      'Authenticate the caller',
      'Authorize the requested operation',
      'Route to the application and model',
      'Record operational evidence',
    ],
  },
  hardware: {
    concepts: 'Compute · Memory · Architecture',
    sentence: 'Understand how hardware carries out AI computation.',
    project:
      'An accelerator analysis that explains computation and data movement.',
    labels: ['Memory', 'Compute'],
    alt: 'An exploded conceptual accelerator reveals memory modules, interconnects and a central compute array.',
    article: 'What Happens Inside an AI Accelerator.',
    audience: 'Engineers interested in architecture and hardware constraints.',
    steps: [
      'Express a matrix operation',
      'Map work to compute units',
      'Move operands through memory',
      'Execute and store the result',
    ],
  },
  leadership: {
    concepts: 'Architecture · Ownership · Tradeoffs',
    sentence: 'Make technical decisions across teams and systems.',
    project: 'An architecture proposal with ownership and decision records.',
    labels: ['Teams', 'Decisions'],
    alt: 'Enterprise application districts connect to a shared AI platform, with distinct team ownership boundaries.',
    article: 'How Staff AI Architects Make Decisions Across Teams and Systems.',
    audience: 'Experienced engineers considering cross-team architecture work.',
    steps: [
      'Understand the constraints',
      'Compare architectural alternatives',
      'Assign ownership and dependencies',
      'Record consequences and a review trigger',
    ],
  },
  deployment: {
    concepts: 'Discovery · Integration · Validation',
    sentence: 'Turn a customer problem into a working system.',
    project: 'A customer-workflow prototype with agreed acceptance checks.',
    labels: ['Workflow', 'Validation'],
    alt: 'A customer operations desk connects a problem brief, prototype, integration bridge and validation station.',
    article:
      'How a Forward Deployed Engineer Turns a Customer Problem into a Working System.',
    audience: 'Engineers who want to combine delivery and customer discovery.',
    steps: [
      'Problem statement',
      'Data assessment',
      'Acceptance criteria',
      'Prototype',
      'Deployment plan',
      'Validation report',
    ],
  },
} as const;

export const starterGuides = [
  {
    id: 'first-step-into-ai',
    title:
      'Your First Step into AI Can Start with a Problem You Already Understand.',
    description:
      'Choose a familiar problem, define a useful result and test a small idea.',
    kind: 'deployment',
  },
  {
    id: 'assistant-finds-documents',
    title: 'How an AI Assistant Finds Answers in Your Documents.',
    description:
      'Follow a question from approved documents to evidence and a referenced answer.',
    kind: 'agents',
  },
  {
    id: 'gpu-infrastructure-work',
    title: 'GPU Infrastructure Begins with Understanding the Work.',
    description:
      'Start with inputs, computation and constraints before choosing hardware.',
    kind: 'infrastructure',
  },
] as const;

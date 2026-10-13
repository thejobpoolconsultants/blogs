export const insideAiSeriesId = 'inside-ai-systems';
export const insideAiSeriesTitle =
  'Inside AI Systems — One Problem, One Architecture, One Lesson.';

export const insideAiLessons = [
  {
    slug: 'your-ai-model-is-fast-why-are-users-still-waiting',
    title: 'Your AI Model Is Fast. Why Are Users Still Waiting?',
    problem: 'Responses slow down after a webinar brings a traffic spike.',
    lesson: 'Measure waiting, processing, generation, and delivery separately.',
    program: 'ai-systems-performance',
    nodes: [
      ['Client', 'Start a request timer', 'external'],
      ['Gateway', 'Validate; attach trace ID', 'security'],
      ['Bounded queue', 'Measure admission and wait', 'messagebus'],
      ['Model replica', 'Measure prefill and decode', 'backend'],
      ['Response stream', 'Record first token and end', 'backend'],
      ['Client display', 'Measure received output', 'frontend'],
    ],
    edges: ['request', 'accepted', 'capacity ready', 'tokens', 'deliver'],
    notes: [
      'Spans from gateway, queue, replica, and stream feed a telemetry collector.',
      'The collector informs diagnosis and a separate autoscaling controller; it is not on the response path.',
      'Only ready replicas accept work. Expired or rejected requests stop before serving.',
    ],
  },
  {
    slug: 'why-ai-requests-wait-bounded-queues-and-deadlines',
    title: 'Why AI Requests Wait: Bounded Queues and Deadlines',
    problem:
      'An unlimited waiting room turns a short burst into prolonged overload.',
    lesson: 'Bound the work you accept and propagate the time you have left.',
    program: 'ai-systems-performance',
    nodes: [
      ['Client', 'Send request and deadline', 'external'],
      ['Admission gate', 'Reject when budget is full', 'security'],
      ['Waiting queue', 'Bound size; expire old work', 'messagebus'],
      ['Scheduler', 'Select eligible live request', 'backend'],
      ['Serving worker', 'Generate within budget', 'backend'],
      ['Response', 'Success or explicit timeout', 'frontend'],
    ],
    edges: [
      'request',
      'admitted only',
      'not expired',
      'capacity ready',
      'result',
    ],
    notes: [
      'Rejection returns immediately to the client; it does not enter the waiting queue.',
      'Cancellation removes waiting work and requests cooperative cancellation of active work.',
      'Observe offered, admitted, completed, rejected, and expired work separately.',
    ],
  },
  {
    slug: 'when-a-document-assistant-answers-without-evidence',
    title: 'When a Document Assistant Answers Without Evidence',
    problem: 'A confident answer cites an outdated or inaccessible policy.',
    lesson:
      'Retrieve authorized, versioned evidence and allow the system to abstain.',
    program: 'generative-ai-agentic-systems',
    nodes: [
      ['Question', 'Resolve authenticated user', 'external'],
      ['Access scope', 'Server-owned permissions', 'security'],
      ['Retriever', 'Search authorized versions', 'database'],
      ['Evidence gate', 'Check relevance and currency', 'backend'],
      ['Generator', 'Use selected source IDs', 'backend'],
      ['Answer review', 'Check support or abstain', 'frontend'],
    ],
    edges: [
      'identity',
      'scoped query',
      'candidates',
      'sufficient only',
      'claims + citations',
    ],
    notes: [
      'Insufficient evidence returns an explicit no-supported-answer response before generation.',
      'A separate ingestion process preserves document ID, version, location, and access metadata.',
      'Authorization applies before evidence reaches the model and again when source links are opened.',
    ],
  },
  {
    slug: 'why-an-ai-agent-creates-the-same-ticket-twice',
    title: 'Why an AI Agent Creates the Same Ticket Twice',
    problem:
      'A tool call succeeds, its reply is lost, and a retry creates a duplicate.',
    lesson:
      'A timeout means an unknown outcome; make consequential actions recoverable.',
    program: 'generative-ai-agentic-systems',
    nodes: [
      ['User request', 'Describe one intended action', 'external'],
      ['Agent planner', 'Propose structured tool call', 'backend'],
      ['Policy gate', 'Validate scope and approval', 'security'],
      ['Action ledger', 'Reserve stable operation ID', 'database'],
      ['Ticket service', 'Deduplicate operation ID', 'backend'],
      ['Reconciliation', 'Store and return ticket ID', 'frontend'],
    ],
    edges: [
      'intent',
      'proposal',
      'approved only',
      'same ID on retry',
      'resolve outcome',
    ],
    notes: [
      'Denied proposals stop at the policy gate; approval never comes from retrieved text.',
      'A lost tool reply sends the operation to reconciliation before any new action is considered.',
      'Service-side idempotency or a recoverable transaction is required; a local ledger alone cannot guarantee one remote effect.',
    ],
  },
  {
    slug: 'why-more-ai-replicas-do-not-immediately-fix-a-spike',
    title: 'Why More AI Replicas Do Not Immediately Fix a Spike',
    problem: 'The autoscaler requests capacity while users are still waiting.',
    lesson:
      'Requested capacity becomes useful only after startup and readiness.',
    program: 'cloud-kubernetes-ai-security',
    nodes: [
      ['Load signals', 'Queue age and serving demand', 'external'],
      ['Scale controller', 'Request target replica count', 'backend'],
      ['Provisioning', 'Place workload on capacity', 'cloud'],
      ['Model startup', 'Load weights; initialize', 'backend'],
      ['Readiness gate', 'Admit only usable workers', 'security'],
      ['Ready pool', 'Router sends live requests', 'backend'],
    ],
    edges: [
      'observe',
      'desired replicas',
      'resources ready',
      'startup done',
      'ready only',
    ],
    notes: [
      'This diagram shows the capacity-control path; requests remain in a bounded admission path.',
      'The ready pool processes admitted work, whose measured demand feeds the controller again.',
      'A warm minimum helps predictable bursts but carries idle cost. A capacity ceiling still needs an overload policy.',
    ],
  },
  {
    slug: 'when-caching-makes-an-ai-answer-fast-and-wrong',
    title: 'When Caching Makes an AI Answer Fast and Wrong',
    problem: 'A cached answer survives a document update or permission change.',
    lesson:
      'A cache hit must satisfy the same scope and freshness contract as a fresh answer.',
    program: 'cloud-kubernetes-ai-security',
    nodes: [
      ['Question', 'Authenticate requester', 'external'],
      ['Scope resolver', 'Resolve policy and versions', 'security'],
      ['Answer cache', 'Look up complete scoped key', 'database'],
      ['Fresh answer', 'On miss: retrieve and generate', 'backend'],
      ['Validity gate', 'Recheck before use or store', 'security'],
      ['Response', 'Current authorized evidence', 'frontend'],
    ],
    edges: [
      'identity',
      'versioned key',
      'miss only',
      'candidate',
      'valid only',
    ],
    notes: [
      'A cache hit bypasses generation but still passes the validity gate.',
      'Deletes, policy changes, and source revisions invalidate affected entries; a TTL bounds residual staleness.',
      'Answer caching and model prefix caching have different correctness contracts.',
    ],
  },
  {
    slug: 'how-to-release-an-ai-change-without-guessing',
    title: 'How to Release an AI Change Without Guessing',
    problem:
      'A faster prompt passes a few examples but breaks important user tasks.',
    lesson:
      'Release a versioned system against explicit quality and operational gates.',
    program: 'staff-ai-architect-leadership-cto',
    nodes: [
      ['Change bundle', 'Prompt, model, index, policy', 'database'],
      ['Offline checks', 'Task quality and security', 'backend'],
      ['Release gate', 'Promote only if checks pass', 'security'],
      ['Limited cohort', 'Small controlled exposure', 'cloud'],
      ['Live review', 'Compare quality and latency', 'backend'],
      ['Decision', 'Expand, pause, or roll back', 'frontend'],
    ],
    edges: ['version', 'results', 'pass only', 'observe', 'criteria'],
    notes: [
      'A failed offline gate stops release. Failed live criteria return routing to the retained baseline.',
      'The bundle records compatible artifacts; rolling back a prompt does not automatically reverse a data migration.',
      'Record the decision and preserve failure cases for the next evaluation set.',
    ],
  },
] as const;

export type InsideAiLesson = (typeof insideAiLessons)[number];

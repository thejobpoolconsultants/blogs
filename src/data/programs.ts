import { siteConfig } from '../../site.config.mjs';

export const programsWebsite = new URL(
  siteConfig.programsPath,
  siteConfig.mainSite,
).href;
// Add a path only after its program page is publicly available and verified.
const programPagePaths: Record<string, string> = {};
export const programWebsite = (id: string) =>
  programPagePaths[id]
    ? new URL(programPagePaths[id], siteConfig.mainSite).href
    : programsWebsite;

export const transitionProgram = {
  id: 'ai-career-transition',
  title: 'AI Career Transition Program',
  tagline: 'From Non-Tech to Tech — Your Guided Path into AI',
  description:
    'Build your understanding of AI, develop practical skills and explore career opportunities through a progressive pathway combining AI foundations, applied AI and advanced concepts. We help you identify a suitable starting point based on your background.',
};

export const specialistPrograms = [
  {
    number: '01',
    id: 'generative-ai-agentic-systems',
    title: 'Generative AI & Agentic Systems Engineering',
    benefit:
      'Build AI applications that retrieve knowledge, use tools and support practical workflows.',
    icon: 'agents',
  },
  {
    number: '02',
    id: 'gpu-infrastructure-ai-data-centers',
    title: 'GPU Infrastructure & AI Data Center Engineering',
    benefit:
      'Explore the compute, networking and infrastructure behind large-scale AI systems.',
    icon: 'infrastructure',
  },
  {
    number: '03',
    id: 'ai-systems-performance',
    title: 'AI Systems Performance Engineering',
    benefit:
      'Develop skills in LLM inference, model serving and optimization for latency, throughput and cost.',
    icon: 'performance',
  },
  {
    number: '04',
    id: 'robotics-physical-ai-autonomous-systems',
    title: 'Robotics, Physical AI & Autonomous Systems Engineering',
    benefit:
      'Connect perception, planning and action through robotics and simulation.',
    icon: 'robotics',
  },
  {
    number: '05',
    id: 'reinforcement-learning-frontier-ai',
    title: 'Reinforcement Learning & Frontier AI Research Engineering',
    benefit:
      'Explore how intelligent systems learn, improve and make decisions through experimentation.',
    icon: 'research',
  },
  {
    number: '06',
    id: 'cloud-kubernetes-ai-security',
    title: 'Cloud Platform, Kubernetes & AI Security Engineering',
    benefit:
      'Build, secure and operate cloud platforms supporting production AI workloads.',
    icon: 'cloud',
  },
  {
    number: '07',
    id: 'ai-accelerators-architecture-semiconductors',
    title:
      'AI Accelerators, Computer Architecture & Semiconductor Systems Engineering',
    benefit:
      'Understand the hardware, memory systems and accelerator architectures powering AI.',
    icon: 'hardware',
  },
  {
    number: '08',
    id: 'staff-ai-architect-leadership-cto',
    title: 'Staff AI Architect, AI Leadership & CTO Readiness',
    benefit:
      'Strengthen enterprise architecture, technical strategy and engineering leadership skills.',
    icon: 'leadership',
  },
  {
    number: '09',
    id: 'forward-deployed-engineering',
    title: 'Forward Deployed Engineering',
    benefit:
      'Translate customer challenges into practical, deployed AI solutions with measurable business value.',
    icon: 'deployment',
  },
] as const;

// Specific subject signals take precedence over a broad topic recommendation.
export function recommendProgram(article: {
  topic: string;
  title: string;
  slug: string;
  tags: string[];
  subtopics: string[];
}) {
  const subject = [
    article.title,
    article.slug,
    ...article.tags,
    ...article.subtopics,
  ]
    .join(' ')
    .replaceAll('-', ' ')
    .toLowerCase();
  const signals: [RegExp, number][] = [
    [
      /\b(inference|model serving|latency|throughput|quantization|kv cache)\b/,
      2,
    ],
    [
      /\b(semiconductor|accelerator architecture|computer architecture|memory systems)\b/,
      6,
    ],
    [/\b(gpu|data center|compute cluster)\b/, 1],
    [/\b(robotics|physical ai|autonomous systems|simulation)\b/, 3],
    [/\b(kubernetes|cloud platform|ai security)\b/, 5],
    [/\b(reinforcement learning|post training)\b/, 4],
    [/\b(cto|technical strategy|engineering leadership)\b/, 7],
    [/\b(forward deployed|customer challenges)\b/, 8],
    [/\b(rag|retrieval|agents?|generative ai)\b/, 0],
  ];
  const match = signals.find(([pattern]) => pattern.test(subject));
  if (match) return specialistPrograms[match[1]];
  const byTopic: Record<string, number> = {
    'generative-ai': 0,
    'agentic-ai': 0,
    nlp: 0,
    'computer-vision': 3,
    'reinforcement-learning': 4,
    research: 4,
    'ai-engineering': 2,
    'mlops-llmops': 5,
    architectures: 7,
    build: 8,
  };
  return byTopic[article.topic] === undefined
    ? transitionProgram
    : specialistPrograms[byTopic[article.topic]];
}

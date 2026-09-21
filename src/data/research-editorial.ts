export const researchEditorial = {
  title: 'Research Papers & Insights',
  headline:
    'Understand the idea. Trace the evidence. See what it could mean in practice.',
  introduction:
    'TheJobPoolConsultants reviews publicly available research papers, explains the ideas behind them, and explores their engineering implications. Findings belong to the original authors and cited sources. Unless explicitly stated otherwise, TheJobPoolConsultants is not reporting original experimental research.',
  homepageSupport:
    'Start with the idea. Understand what the authors tested. See what the evidence supports. Then go deeper into the original paper.',
  approach:
    'TheJobPoolConsultants does not treat explanation as experimentation. We review published research, trace claims to original sources, explain what the reported evidence supports, identify important limitations, and explore possible engineering implications.',
  independence:
    'Unless an article explicitly states otherwise, TheJobPoolConsultants has not independently reproduced the experiments or validated the reported results.',
  disclosure:
    'This article is an educational explanation of publicly available research. TheJobPoolConsultants did not conduct the experiments described unless explicitly stated. Research findings are attributed to the original authors and sources. Examples, diagrams, engineering interpretations, and proposed experiments are included to help readers understand and apply the ideas.',
  sourceNote:
    'Primary sources support descriptions of the original research. TheJobPoolConsultants explanations, diagrams, examples, and engineering interpretations are identified separately.',
} as const;

export const articleTypes = [
  'explainer',
  'deep-dive',
  'architecture',
  'research',
  'tutorial',
  'comparison',
  'news-analysis',
  'career',
  'paper-to-product',
  'paper-explained',
  'research-map',
  'engineering-interpretation',
  'ai-in-5-minutes',
  'one-big-idea',
] as const;

export const paperArticleTypes = [
  'research',
  'paper-to-product',
  'paper-explained',
  'research-map',
  'engineering-interpretation',
] as const;
export function articleTypeLabel(type: string) {
  const labels: Record<string, string> = {
    research: 'Research Papers & Insights',
    'paper-to-product': 'Paper → Product',
    'paper-explained': 'Paper Explained',
    'research-map': 'Research Map',
    'engineering-interpretation': 'Engineering Interpretation',
  };
  return labels[type] || type.replaceAll('-', ' ');
}

export function isPaperBased(data: {
  type: string;
  topic: string;
  sources: readonly { kind: string }[];
}) {
  return (
    (paperArticleTypes as readonly string[]).includes(data.type) ||
    data.topic === 'research' ||
    data.sources.some((source) => source.kind === 'paper')
  );
}

export const statementKinds = {
  source: { label: 'Source-backed summary', marker: 'PAPER' },
  interpretation: {
    label: 'Engineering interpretation',
    marker: 'INTERPRETATION',
  },
  example: { label: 'Illustrative example', marker: 'EXAMPLE' },
  experiment: { label: 'Proposed experiment', marker: 'EXPERIMENT IDEA' },
  perspective: {
    label: 'TheJobPoolConsultants perspective',
    marker: 'PERSPECTIVE',
  },
  limitation: { label: 'Limit of the evidence', marker: 'LIMIT' },
} as const;

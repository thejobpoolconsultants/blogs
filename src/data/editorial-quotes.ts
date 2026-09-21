/** Original publication copy, selected by editors. Never randomly rotate it. */
export interface EditorialQuote {
  lines: readonly string[];
  emphasisLine?: number;
}

export const editorialQuotes = {
  hero: {
    lines: [
      'The future of AI won’t be defined by one model.',
      'It will be defined by how the pieces work together.',
    ],
  },
  machineLearning: {
    lines: [
      'A model learns the pattern.',
      'Reality decides whether it generalizes.',
    ],
  },
  deepLearning: {
    lines: [
      'The breakthrough wasn’t more rules.',
      'It was learning the representation.',
    ],
  },
  nlp: {
    lines: [
      'Words are what we write.',
      'Meaning is what the model must discover.',
    ],
  },
  embeddings: {
    lines: [
      'Language looks like text to us.',
      'To a machine, it begins as geometry.',
    ],
  },
  representation: { lines: ['Before generation, there was representation.'] },
  generativeAI: {
    lines: ['Generation made AI impressive.', 'Grounding makes it useful.'],
  },
  trustworthySystems: {
    lines: [
      'A model can generate an answer.',
      'A system has to earn your trust.',
    ],
  },
  rag: { lines: ['RAG gives a model evidence.', 'Not certainty.'] },
  retrieval: {
    lines: [
      'Retrieval brings the evidence.',
      'Generation still has to use it well.',
    ],
  },
  agentHeadline: { lines: ['The agent isn’t one model anymore.'] },
  agentResponsibility: {
    lines: ['The moment AI can act, architecture becomes responsibility.'],
  },
  architecture: {
    lines: [
      'The model is one component.',
      'Reliability lives in everything around it.',
    ],
  },
  architectureFlow: {
    lines: [
      'When AI becomes a system, the arrows matter as much as the boxes.',
    ],
  },
  research: {
    lines: ['Research papers,', 'without the wall of equations.'],
  },
  build: {
    lines: [
      'Theory explains what should happen.',
      'Building shows you what actually does.',
    ],
  },
  learning: {
    lines: ['You don’t need another list of links.', 'You need an order.'],
  },
  learningNext: {
    lines: [
      'The hardest part of learning AI isn’t finding content.',
      'It’s knowing what comes next.',
    ],
  },
  computerVision: {
    lines: ['Pixels are the input.', 'Understanding is the objective.'],
  },
  evaluation: {
    lines: [
      'A demo shows what worked once.',
      'Evaluation shows whether it works again.',
    ],
  },
  operations: {
    lines: [
      'Deployment is not the finish line.',
      'It is where the real experiment begins.',
    ],
  },
  aiEngineering: {
    lines: [
      'The intelligence may come from the model.',
      'The experience comes from the engineering.',
    ],
  },
  contextSelection: {
    lines: ['More context is not the goal.', 'The right context is.'],
  },
  evolution: {
    lines: [
      'First we taught machines to predict.',
      'Then to generate.',
      'Now we’re teaching systems to act.',
    ],
  },
  footer: {
    lines: ['Curiosity starts the question.', 'Evidence earns the answer.'],
  },
  signature: {
    lines: [
      'Ask better questions.',
      'Build better systems.',
      'Understand what comes next.',
    ],
    emphasisLine: 2,
  },

  // The twelve-statement One Big Idea library. Selection below is explicit.
  wiserSystems: {
    lines: ['The model is getting smarter.', 'The system has to get wiser.'],
  },
  contextDesign: {
    lines: [
      'The context window is a capacity.',
      'The context is a design decision.',
    ],
    emphasisLine: 1,
  },
  betterArchitecture: {
    lines: [
      'More intelligence doesn’t remove the need for better architecture.',
      'It increases it.',
    ],
  },
  nextMoment: {
    lines: [
      'A model predicts the next token.',
      'A product has to understand the next moment.',
    ],
  },
  connectedIntelligence: {
    lines: [
      'The future of AI is not one giant model.',
      'It is intelligent pieces working together.',
    ],
  },
  invisibleExperience: {
    lines: [
      'The best AI experience may be the one where you stop noticing the AI.',
    ],
  },
  agentSystem: {
    lines: ['The model proposes.', 'The system decides what happens next.'],
  },
  answerContext: {
    lines: [
      'A prompt asks a question.',
      'A system decides what information the answer deserves.',
    ],
  },
  modelPossibilities: {
    lines: [
      'The breakthrough is rarely the model alone.',
      'It is what the model makes possible.',
    ],
  },
  designedTrust: {
    lines: [
      'Intelligence is becoming a capability.',
      'Trust still has to be designed.',
    ],
  },
  intent: {
    lines: [
      'We used to design software around screens.',
      'Now we can design it around intent.',
    ],
  },
  nextInterface: {
    lines: [
      'The next interface may not ask where you want to go.',
      'It may understand what you’re trying to achieve.',
    ],
  },
} as const satisfies Record<string, EditorialQuote>;

export type EditorialQuoteId = keyof typeof editorialQuotes;

export const oneBigIdeaLibrary = [
  'wiserSystems',
  'contextDesign',
  'betterArchitecture',
  'nextMoment',
  'connectedIntelligence',
  'invisibleExperience',
  'agentSystem',
  'answerContext',
  'modelPossibilities',
  'designedTrust',
  'intent',
  'nextInterface',
] as const satisfies readonly EditorialQuoteId[];

export const homepageEditorial = {
  hero: 'hero',
  bigIdea: 'contextDesign',
  bigIdeaPath: 'articles/context-is-a-design-decision/',
} as const;

// Topic IDs and taxonomy remain defined in topics.ts.
export const topicInsightIds: Partial<Record<string, EditorialQuoteId>> = {
  'artificial-intelligence': 'contextDesign',
  'machine-learning': 'machineLearning',
  'deep-learning': 'deepLearning',
  nlp: 'nlp',
  'generative-ai': 'generativeAI',
  'agentic-ai': 'agentSystem',
  'computer-vision': 'computerVision',
  'ai-engineering': 'aiEngineering',
  'mlops-llmops': 'operations',
  research: 'research',
  architectures: 'architecture',
  build: 'build',
};

export const tagInsightIds: Partial<Record<string, EditorialQuoteId>> = {
  Evaluation: 'evaluation',
  Embeddings: 'embeddings',
  RAG: 'rag',
  'Context Engineering': 'contextDesign',
};

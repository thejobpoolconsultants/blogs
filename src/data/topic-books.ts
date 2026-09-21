import sectionData from './topic-sections.json' with { type: 'json' };

export interface TopicSection {
  id: string;
  title: string;
  concepts: string[];
}
export interface SectionReading {
  article: string;
  sections: string[];
  /** Exact concept labels this article introduces, not a claim of full coverage. */
  concepts?: string[];
}
const books: Record<string, TopicSection[]> = sectionData;
export const sectionsFor = (topic: string): TopicSection[] =>
  books[topic] || [];
export const conceptId = (section: string, concept: string) =>
  section +
  '--' +
  concept
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const ml = 'what-machines-learn';
const dl = 'neural-networks-learn-representations';
const words = 'how-machines-represent-words';
const attention = 'attention-paper-to-product';
const rag = 'how-rag-actually-works';
const context = 'context-is-a-design-decision';
const agent = 'agent-isnt-one-model';
const production = 'production-rag-architecture';
const baseline = 'build-a-retrieval-baseline';

// Editorial associations are explicit. Only published articles are resolved at render time.
// An empty section is a place in the learning sequence, never a fabricated article.
export const topicReading: Record<string, SectionReading[]> = {
  'artificial-intelligence': [
    {
      article: ml,
      sections: ['start-here', 'learning-systems'],
      concepts: ['Machine Learning'],
    },
    {
      article: dl,
      sections: ['learning-systems'],
      concepts: ['Deep Learning'],
    },
    { article: words, sections: ['language-perception'], concepts: ['NLP'] },
    {
      article: agent,
      sections: ['agentic-systems'],
      concepts: ['AI agents', 'Tools'],
    },
    { article: context, sections: ['ai-systems'] },
  ],
  'machine-learning': [
    {
      article: ml,
      sections: [
        'start-here',
        'ml-fundamentals',
        'supervised-learning',
        'evaluation',
      ],
      concepts: [
        'What is Machine Learning?',
        'Training vs inference',
        'Generalization',
        'Overfitting',
        'Train / validation / test sets',
      ],
    },
  ],
  'deep-learning': [
    {
      article: dl,
      sections: ['start-here', 'neural-network-fundamentals', 'training'],
      concepts: [
        'Neural network intuition',
        'Neuron',
        'Weights',
        'Bias',
        'Layers',
        'Activation functions',
        'Loss functions',
        'Gradient descent',
        'Backpropagation',
      ],
    },
    {
      article: attention,
      sections: ['attention', 'transformers'],
      concepts: [
        'Query',
        'Key',
        'Value',
        'Self-attention',
        'Multi-head attention',
        'Encoder',
        'Decoder',
        'Positional encoding',
      ],
    },
  ],
  nlp: [
    {
      article: words,
      sections: [
        'start-here',
        'text-processing',
        'classical-representation',
        'word-embeddings',
      ],
      concepts: [
        'Language as data',
        'Tokenization',
        'Bag of Words',
        'TF-IDF',
        'Vector similarity',
      ],
    },
    {
      article: attention,
      sections: ['attention', 'transformers'],
      concepts: [
        'Attention mechanism',
        'Self-attention',
        'Transformer architecture',
        'Encoder',
        'Decoder',
        'Encoder-decoder',
      ],
    },
    {
      article: baseline,
      sections: ['search-retrieval'],
      concepts: ['Lexical search'],
    },
    { article: rag, sections: ['modern-nlp'], concepts: ['RAG'] },
  ],
  'generative-ai': [
    {
      article: context,
      sections: ['context-engineering'],
      concepts: ['Context selection', 'Context limits', 'Context quality'],
    },
    {
      article: words,
      sections: ['embeddings'],
      concepts: ['Vector similarity', 'Semantic representation'],
    },
    {
      article: rag,
      sections: ['start-here', 'rag', 'evaluation'],
      concepts: [
        'Retrieval',
        'Chunking',
        'Embeddings',
        'Vector search',
        'Generation',
        'Citations',
        'Groundedness',
        'Hallucination',
      ],
    },
    { article: production, sections: ['production-genai'] },
  ],
  'agentic-ai': [
    {
      article: agent,
      sections: [
        'start-here',
        'tool-calling',
        'state',
        'human-in-the-loop',
        'observability',
        'security',
        'production-agents',
      ],
      concepts: [
        'What is an AI agent?',
        'Agent vs chatbot',
        'Agent loop',
        'Tools',
        'Approvals',
        'Permissions',
      ],
    },
  ],
  'ai-engineering': [
    { article: baseline, sections: ['python-for-ai'] },
    {
      article: production,
      sections: [
        'start-here',
        'data-pipelines',
        'reliability',
        'security',
        'production-architecture',
      ],
    },
  ],
  'mlops-llmops': [
    {
      article: production,
      sections: [
        'start-here',
        'evaluation-pipelines',
        'observability',
        'production-reliability',
      ],
    },
  ],
  research: [
    {
      article: attention,
      sections: [
        'foundational-papers',
        'deep-learning-papers',
        'nlp-papers',
        'transformer-papers',
        'paper-product',
      ],
      concepts: [
        'Attention',
        'Transformers',
        'source-backed summary',
        'evidence',
        'limitations',
        'engineering interpretation',
        'product implications',
      ],
    },
    {
      article: words,
      sections: ['foundational-papers', 'nlp-papers'],
      concepts: ['Representation learning'],
    },
    { article: rag, sections: ['retrieval-rag-papers'] },
  ],
  architectures: [
    {
      article: production,
      sections: [
        'start-here',
        'rag-architecture',
        'data-architecture',
        'evaluation-architecture',
        'observability-architecture',
        'security-architecture',
      ],
    },
    { article: agent, sections: ['agent-architecture'] },
    { article: baseline, sections: ['search-architecture'] },
  ],
  build: [
    {
      article: baseline,
      sections: ['start-here', 'nlp', 'evaluation'],
      concepts: [
        'How to use the build guides',
        'Baselines first',
        'How experiments are described',
        'retrieval evaluation',
      ],
    },
    {
      article: production,
      sections: ['architecture'],
      concepts: ['production RAG'],
    },
  ],
};

export const topicMenuLabels: Record<string, string> = {
  nlp: 'NLP',
  research: 'Research',
  architectures: 'Architecture',
  'artificial-intelligence': 'AI',
  'reinforcement-learning': 'RL',
  'mlops-llmops': 'MLOps & LLMOps',
  build: 'Build',
  careers: 'Career',
};

export const researchAttribution =
  'TheJobPoolConsultants explains research. Original findings remain attributed to their authors and sources.';

export const tags = [
  'Fundamentals',
  'Evaluation',
  'Neural Networks',
  'Embeddings',
  'Transformers',
  'RAG',
  'Agents',
  'Architecture',
  'Python',
  'Information Retrieval',
  'Context Engineering',
] as const;
export const tagSlug = (tag: string) =>
  tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

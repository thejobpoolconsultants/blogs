// Authored examples only. No API, real-time model or actual program curriculum.
export const retrievalSamples = [
  {
    id: 'A',
    question: 'What should I learn first?',
    title: 'Sample handbook · First steps',
    excerpt:
      'Start with AI foundations. Then try a small project that applies what you learn.',
    answer: 'Begin with AI foundations, then apply them in a small project.',
  },
  {
    id: 'B',
    question: 'How can an answer use evidence?',
    title: 'Sample handbook · Evidence',
    excerpt:
      'Retrieve a relevant document. Use its contents to support the answer, and show the source.',
    answer:
      'Find a relevant document, base the answer on it, and show which source was used.',
  },
  {
    id: 'C',
    question: 'How do I test a prototype?',
    title: 'Sample handbook · Test and improve',
    excerpt:
      'Choose one clear problem. Build a small working example, then test it against a simple acceptance checklist.',
    answer:
      'Choose a clear problem, build a small working example, and check it against an acceptance checklist.',
  },
] as const;

export function retrievalResult(index: number) {
  if (!Number.isInteger(index) || index < 0 || index >= retrievalSamples.length)
    throw new RangeError('Unknown sample question');
  return {
    index,
    ...retrievalSamples[index],
    position: index / (retrievalSamples.length - 1),
  };
}

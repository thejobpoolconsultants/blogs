import { deepLearning } from './deep-learning.ts';
import { machineLearning } from './machine-learning.ts';
import type { TopicSequence, KnowledgeConcept } from './types.ts';

export const topicSequences: TopicSequence[] = [machineLearning, deepLearning];
export const sequenceFor = (id: string) =>
  topicSequences.find((sequence) => sequence.id === id);
export const sectionPath = (sequence: TopicSequence, section?: string) =>
  'topics/' + sequence.id + '/' + (section ? section + '/' : '');
export const conceptPath = (
  sequence: TopicSequence,
  section: string,
  concept: KnowledgeConcept,
) => sectionPath(sequence, section) + '#' + concept.slug;

/** Public projections never include draft concepts or links to unpublished articles. */
export function publicSequence(
  sequence: TopicSequence,
  published: Set<string>,
): TopicSequence {
  return {
    ...sequence,
    sections: sequence.sections.map((section) => ({
      ...section,
      ...(section.relatedArticleSlugs
        ? {
            relatedArticleSlugs: section.relatedArticleSlugs.filter((slug) =>
              published.has(slug),
            ),
          }
        : {}),
      concepts: section.concepts
        .filter((concept) => concept.status !== 'draft')
        .map((concept) => {
          const { articleSlug, ...details } = concept;
          return concept.status === 'published' &&
            articleSlug &&
            published.has(articleSlug)
            ? { ...details, status: 'published', articleSlug }
            : { ...details, status: 'planned' };
        }),
    })),
  };
}
export const conceptCount = (sequence: TopicSequence) =>
  sequence.sections.reduce(
    (count, section) => count + section.concepts.length,
    0,
  );

export type ConceptLevel =
  'beginner' | 'intermediate' | 'advanced' | 'production';
export interface ConceptBase {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  level: ConceptLevel;
  group?: string;
}
export type KnowledgeConcept = ConceptBase &
  (
    | { status: 'published'; articleSlug: string }
    | { status: 'planned' | 'draft'; articleSlug?: string }
  );
export interface KnowledgeSection {
  number: string;
  slug: string;
  title: string;
  description: string;
  introduction: string;
  insight?: string;
  insightSupporting?: string;
  concepts: KnowledgeConcept[];
}
export interface TopicSequence {
  id: string;
  title: string;
  description: string;
  insight: string;
  stages: string[];
  flow: string[];
  learningPath: { id: string; title: string };
  sections: KnowledgeSection[];
  /** Old fragment -> current section/anchor. Preserve these when renaming chapters. */
  legacyHashes?: Record<string, string>;
}

import { topics } from '../data/topics.ts';
import { sectionsFor, topicReading } from '../data/topic-books.ts';
import { sequenceFor, sectionPath } from '../data/topic-sequences/index.ts';

export interface NavigableArticle {
  data: {
    title: string;
    slug: string;
    topic: string;
    description: string;
    section?: string;
    order?: number;
    status: 'published' | 'draft' | 'archived';
    publishedAt: Date;
  };
}
export interface TopicArticle {
  title: string;
  slug: string;
  description: string;
  order: number;
  section: string;
  path: string;
}
export interface TopicNavigation {
  id: string;
  title: string;
  path: string;
  sections: {
    id: string;
    title: string;
    number: string;
    path: string;
    articles: TopicArticle[];
  }[];
}

/** Article metadata owns placement; section metadata owns the chapter order. */
export function topicNavigation(
  topicId: string,
  entries: readonly NavigableArticle[],
  now = new Date(),
): TopicNavigation {
  const topic = topics.find((item) => item.id === topicId);
  if (!topic) throw new Error('Unknown navigation topic: ' + topicId);
  const sequence = sequenceFor(topicId);
  const sections = sectionsFor(topicId).map((section, index) => ({
    id: section.id,
    title: section.title,
    number: String(index + 1).padStart(2, '0'),
    path: sequence
      ? sectionPath(sequence, section.id)
      : `topics/${topicId}/#${section.id}`,
    articles: [] as TopicArticle[],
  }));
  const slugs = new Set<string>();
  for (const { data } of entries) {
    if (
      data.topic !== topicId ||
      data.status !== 'published' ||
      data.publishedAt > now
    )
      continue;
    if (slugs.has(data.slug))
      throw new Error('Duplicate navigation article: ' + data.slug);
    slugs.add(data.slug);
    const associated =
      sequence?.sections.find((section) =>
        section.concepts.some((concept) => concept.articleSlug === data.slug),
      )?.slug ||
      topicReading[topicId]?.find((reading) => reading.article === data.slug)
        ?.sections[0];
    const sectionId = data.section || associated || sections[0]?.id;
    const section = sections.find((item) => item.id === sectionId);
    if (!section)
      throw new Error(`Unknown section ${sectionId} for ${data.slug}`);
    section.articles.push({
      title: data.title,
      slug: data.slug,
      description: data.description,
      order: data.order || 1,
      section: section.id,
      path: `articles/${data.slug}/`,
    });
  }
  for (const section of sections)
    section.articles.sort(
      (a, b) => a.order - b.order || a.slug.localeCompare(b.slug),
    );
  return {
    id: topic.id,
    title: topic.title,
    path: `topics/${topicId}/`,
    sections,
  };
}

export function articleNeighbors(navigation: TopicNavigation, slug: string) {
  const articles = navigation.sections.flatMap((section) => section.articles);
  const index = articles.findIndex((article) => article.slug === slug);
  return {
    previous: index > 0 ? articles[index - 1] : null,
    next:
      index >= 0 && index < articles.length - 1 ? articles[index + 1] : null,
  };
}

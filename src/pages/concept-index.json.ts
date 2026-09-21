import {
  topicSequences,
  publicSequence,
  conceptPath,
} from '../data/topic-sequences';
import { publishedArticles } from '../utils/content';
import { url } from '../utils/urls';

export async function GET() {
  const published = new Set(
    (await publishedArticles()).map((article) => article.data.slug),
  );
  const entries = topicSequences.flatMap((source) => {
    const sequence = publicSequence(source, published);
    return sequence.sections.flatMap((section) =>
      section.concepts.map((concept) => ({
        title: concept.title,
        number: concept.number,
        topic: sequence.title,
        section: section.title,
        status: concept.status,
        description: concept.description,
        url: url(conceptPath(sequence, section.slug, concept)),
      })),
    );
  });
  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

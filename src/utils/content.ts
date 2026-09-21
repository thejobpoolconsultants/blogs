import { getCollection } from 'astro:content';
export async function publishedArticles() {
  const entries = await getCollection('articles');
  const slugs = new Set<string>();
  const orders = new Set<string>();
  for (const entry of entries) {
    if (slugs.has(entry.data.slug))
      throw new Error('Duplicate slug: ' + entry.data.slug);
    slugs.add(entry.data.slug);
    if (entry.data.series) {
      const key = entry.data.series + ':' + entry.data.seriesOrder;
      if (orders.has(key)) throw new Error('Duplicate series order: ' + key);
      orders.add(key);
    }
    for (const slug of entry.data.relatedArticles) {
      if (!entries.some((a) => a.data.slug === slug))
        throw new Error('Unknown related article: ' + slug);
    }
  }
  return entries
    .filter(
      (a) => a.data.status === 'published' && a.data.publishedAt <= new Date(),
    )
    .sort(
      (a, b) =>
        b.data.publishedAt.getTime() - a.data.publishedAt.getTime() ||
        a.data.title.localeCompare(b.data.title),
    );
}
export function readingTime(body = '') {
  return Math.max(
    1,
    Math.ceil(body.replace(/<[^>]*>/g, '').split(/\s+/).length / 220),
  );
}
export function dateLabel(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'yaml';
import { load } from 'cheerio';
import { topics } from '../src/data/topics.ts';
import { sectionsFor } from '../src/data/topic-books.ts';
import {
  topicNavigation,
  articleNeighbors,
} from '../src/utils/topic-navigation.ts';
import { absoluteUrl, url } from '../site.config.mjs';

const now = new Date('2026-10-12T23:59:59Z');
const fixture = (
  slug,
  section,
  order,
  status = 'published',
  date = '2026-10-01',
) => ({
  data: {
    slug,
    title: slug,
    topic: 'artificial-intelligence',
    section,
    order,
    status,
    description: 'An inspectable navigation test article.',
    publishedAt: new Date(date),
  },
});
const navigation = topicNavigation(
  'artificial-intelligence',
  [
    fixture('third', 'foundations', 2),
    fixture('last', 'ai-systems', 1),
    fixture('first', 'start-here', 1),
    fixture('second', 'foundations', 1),
    fixture('draft-only', 'start-here', 1, 'draft'),
    fixture('future-only', 'start-here', 1, 'published', '2027-01-01'),
  ],
  now,
);
assert.deepEqual(
  navigation.sections.flatMap((section) =>
    section.articles.map((article) => article.slug),
  ),
  ['first', 'second', 'third', 'last'],
);
assert.equal(articleNeighbors(navigation, 'first').previous, null);
assert.equal(articleNeighbors(navigation, 'last').next, null);
assert.equal(
  articleNeighbors(navigation, 'first').next.slug,
  'second',
  'Next must cross a section boundary',
);
assert.equal(
  articleNeighbors(navigation, 'second').previous.slug,
  'first',
  'Previous must cross a section boundary',
);
assert.deepEqual(articleNeighbors(navigation, 'missing'), {
  previous: null,
  next: null,
});
assert.throws(
  () =>
    topicNavigation(
      'artificial-intelligence',
      [fixture('invalid', 'not-a-section', 1)],
      now,
    ),
  /Unknown section/,
);
assert.throws(
  () =>
    topicNavigation(
      'artificial-intelligence',
      [fixture('same', 'start-here', 1), fixture('same', 'foundations', 2)],
      now,
    ),
  /Duplicate navigation article/,
);

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(file)));
    else if (/\.mdx?$/.test(file)) files.push(file);
  }
  return files;
}
const entries = await Promise.all(
  (await walk('src/content/articles')).map(async (file) => {
    const text = await readFile(file, 'utf8');
    const metadata = parse(
      text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || '',
    );
    return {
      data: { ...metadata, publishedAt: new Date(metadata.publishedAt) },
    };
  }),
);
const published = entries.filter(
  (entry) =>
    entry.data.status === 'published' && entry.data.publishedAt <= new Date(),
);
for (const entry of entries)
  for (const key of [
    'progress',
    'completed',
    'statusByUser',
    'readPercentage',
    'completionDate',
  ])
    assert(!Object.hasOwn(entry.data, key));

for (const topic of topics) {
  const model = topicNavigation(topic.id, entries);
  assert.deepEqual(
    model.sections.map((section) => section.id),
    sectionsFor(topic.id).map((section) => section.id),
  );
  const $ = load(await readFile(`dist/topics/${topic.id}/index.html`, 'utf8'));
  assert.equal($('.reader-chapter').length, model.sections.length);
  assert.equal(
    $('[data-topic-article]').length,
    published.filter((entry) => entry.data.topic === topic.id).length,
  );
  assert.equal($('link[rel=canonical]').attr('href'), absoluteUrl(model.path));
}
for (const { data } of published) {
  const model = topicNavigation(data.topic, entries);
  const section = model.sections.find((item) =>
    item.articles.some((article) => article.slug === data.slug),
  );
  const $ = load(
    await readFile(`dist/articles/${data.slug}/index.html`, 'utf8'),
  );
  const active = $('[data-topic-article][aria-current=page]');
  assert.equal(active.length, 1);
  assert.equal(active.attr('href'), url(`articles/${data.slug}/`));
  assert.equal($('[data-chapter][open]').attr('data-chapter'), section.id);
  assert.equal($('[data-chapter][open]').length, 1);
  const { previous, next } = articleNeighbors(model, data.slug);
  assert.equal(
    $('.article-previous-next [rel=prev]').attr('href') || null,
    previous ? url(previous.path) : null,
  );
  assert.equal(
    $('.article-previous-next [rel=next]').attr('href') || null,
    next ? url(next.path) : null,
  );
  assert.equal(
    $('link[rel=canonical]').attr('href'),
    absoluteUrl(`articles/${data.slug}/`),
  );
  assert.equal($('h1').text().trim(), data.title);
  const schema = $('script[type="application/ld+json"]')
    .toArray()
    .flatMap((node) => JSON.parse($(node).text())['@graph'] || []);
  const crumbs = schema.find(
    (item) => item['@type'] === 'BreadcrumbList',
  ).itemListElement;
  assert.deepEqual(
    crumbs.map((item) => item.name),
    ['Knowledge Library', model.title, section.title, data.title],
  );
  assert.equal(crumbs.at(-1).item, absoluteUrl(`articles/${data.slug}/`));
  assert(
    schema.some(
      (item) =>
        item['@type'] === 'BlogPosting' &&
        item.datePublished &&
        item.author &&
        item.publisher,
    ),
  );
  assert.equal(
    $('.reader-breadcrumb [aria-current=page]').text().trim(),
    data.title,
  );
  assert.equal(
    $(
      '[data-reader-sidebar] input, [data-reader-sidebar] progress, [data-reader-sidebar] [role=progressbar]',
    ).length,
    0,
  );
  assert(
    !/\b(?:completed|unread|progress|completion)\b|[✓○]/i.test(
      $('.topic-sidebar-navigation').text(),
    ),
  );
  const headings = $('.prose h2[id], .prose h3[id]')
    .toArray()
    .filter((heading) => !$(heading).closest('[data-pagefind-ignore]').length);
  for (const heading of headings)
    assert(
      $(`.reader-toc a[href="#${$(heading).attr('id')}"]`).length,
      data.slug + ': heading missing from TOC',
    );
}
const landing = load(await readFile('dist/topics/index.html', 'utf8'));
assert.equal(landing('h1').text().trim(), 'Find your starting point.');
assert.equal(landing('[data-reader-sidebar]').length, 0);
assert.equal(landing('.directory-group').length, 7);
assert.equal(landing('.directory-group li').length, 15);
const scripts = await readFile('src/scripts/topic-reader.ts', 'utf8');
assert(!/localStorage|sessionStorage|indexedDB|fetch\s*\(/.test(scripts));
assert(scripts.includes('IntersectionObserver'));
assert(!/addEventListener\(['"]scroll/.test(scripts));
console.log(
  `Topic reader checks passed: ${topics.length} topics, ${published.length} article routes, section/article ordering, cross-section neighbors, first/last boundaries, active articles, expanded sections, breadcrumbs, H2/H3 contents, canonical URLs, and no reader tracking.`,
);

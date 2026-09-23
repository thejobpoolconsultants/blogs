import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { load } from 'cheerio';
import {
  topicSequences,
  publicSequence,
  conceptCount,
  sectionPath,
} from '../src/data/topic-sequences/index.ts';

const expectedML = [
  24, 41, 18, 23, 32, 15, 23, 11, 10, 31, 10, 11, 8, 19, 19, 13, 12, 12, 14, 25,
  16, 17,
];
const expectedDL = [
  16, 30, 17, 10, 17, 14, 18, 17, 12, 9, 8, 19, 19, 8, 18, 16, 21, 11, 13, 12,
  14, 14, 10, 12, 10, 11, 13, 10, 14, 25, 15, 21,
];
const search = JSON.parse(await readFile('dist/concept-index.json', 'utf8'));
let count = 0;
for (const sequence of topicSequences) {
  const ids = new Set();
  assert.equal(
    new Set(sequence.sections.map((section) => section.slug)).size,
    sequence.sections.length,
  );
  if (sequence.id === 'machine-learning') {
    assert.equal(sequence.sections.length, 22);
    assert.equal(conceptCount(sequence), 404);
    assert.deepEqual(
      sequence.sections.map((section) => section.concepts.length),
      expectedML,
    );
  }
  if (sequence.id === 'deep-learning') {
    assert.equal(sequence.sections.length, 32);
    assert.equal(conceptCount(sequence), 474);
    assert.deepEqual(
      sequence.sections.map((section) => section.concepts.length),
      expectedDL,
    );
  }
  for (const [index, section] of sequence.sections.entries()) {
    assert.equal(section.number, String(index + 1).padStart(2, '0'));
    assert.equal(
      new Set(section.concepts.map((concept) => concept.slug)).size,
      section.concepts.length,
    );
    const html = await readFile(
      'dist/' + sectionPath(sequence, section.slug) + 'index.html',
      'utf8',
    );
    const $ = load(html);
    assert.equal($('h1').text().trim(), section.title);
    assert.equal(
      $('title').text(),
      sequence.title + ': ' + section.title + ' | TheJobPoolConsultants',
    );
    assert(
      $('link[rel=canonical]')
        .attr('href')
        .endsWith('/blogs/' + sectionPath(sequence, section.slug)),
    );
    assert.equal(
      $('meta[name=description]').attr('content'),
      section.description,
    );
    const anchors = $('[id]')
      .toArray()
      .map((element) => $(element).attr('id'));
    assert.equal(
      new Set(anchors).size,
      anchors.length,
      section.slug + ': duplicate anchor',
    );
    assert.equal($('.chapter-disclosure[open]').length, 1);
    assert.equal(
      $('.book-section-link[aria-current=page]').attr('data-chapter-link'),
      section.slug,
    );
    for (const slug of section.relatedArticleSlugs || []) {
      await access('dist/articles/' + slug + '/index.html');
      assert.equal(
        $('[data-related-article="' + slug + '"]').attr('href'),
        '/blogs/articles/' + slug + '/',
      );
      if (slug === 'attention-paper-to-product')
        assert.equal(
          $('[data-related-article="' + slug + '"]').attr('data-article-topic'),
          'research',
        );
    }
    if (section.diagram) assert.equal($('.knowledge-cycle').length, 1);
    for (const [ordinal, concept] of section.concepts.entries()) {
      assert(!ids.has(concept.id), 'Duplicate concept ID: ' + concept.id);
      ids.add(concept.id);
      assert.equal(
        concept.number,
        section.number + '.' + String(ordinal + 1).padStart(2, '0'),
      );
      assert(concept.description.length > 20);
      assert(
        ['beginner', 'intermediate', 'advanced', 'production'].includes(
          concept.level,
        ),
      );
      const row = $('#' + concept.slug);
      if (concept.status === 'draft') {
        assert.equal(row.length, 0);
        assert(
          !search.some((entry) =>
            entry.url.endsWith('/' + section.slug + '/#' + concept.slug),
          ),
        );
        continue;
      }
      assert.equal(row.attr('data-concept-id'), concept.id);
      assert.equal(
        row.find('[data-concept-status]').attr('data-concept-status'),
        concept.status,
      );
      if (concept.status === 'published') {
        await access('dist/articles/' + concept.articleSlug + '/index.html');
        assert.equal(
          row.find('h3 a').attr('href'),
          '/blogs/articles/' + concept.articleSlug + '/',
        );
      } else
        assert.equal(
          row.find('a').length,
          0,
          'Planned concept must not pretend to have an article',
        );
      const entry = search.find(
        (entry) =>
          entry.topic === sequence.title && entry.number === concept.number,
      );
      assert(entry);
      assert.equal(entry.status, concept.status);
      assert(entry.url.endsWith('/' + section.slug + '/#' + concept.slug));
      count++;
    }
    assert.equal(
      $('.knowledge-concept').length,
      section.concepts.filter((concept) => concept.status !== 'draft').length,
    );
    assert(
      $('.book-learning')
        .text()
        .includes(sequence.title + ' overview'),
    );
    if (index < sequence.sections.length - 1)
      assert.equal(
        $('.book-pagination [rel=next]').attr('href'),
        '/blogs/' + sectionPath(sequence, sequence.sections[index + 1].slug),
      );
  }
  // Publication gates also apply to future books and changed article statuses.
  const fixture = structuredClone(sequence);
  fixture.sections[0].concepts.push({
    ...fixture.sections[0].concepts[0],
    id: 'private-draft',
    slug: 'private-draft',
    status: 'draft',
    articleSlug: 'private-article',
  });
  fixture.sections[0].relatedArticleSlugs = ['unpublished-reading'];
  const before = JSON.stringify(fixture);
  const safe = publicSequence(fixture, new Set());
  assert.equal(safe.sections[0].relatedArticleSlugs.length, 0);
  assert.equal(
    JSON.stringify(fixture),
    before,
    'Projection must not mutate editorial data',
  );
  assert(
    !safe.sections.some((section) =>
      section.concepts.some(
        (concept) =>
          concept.status !== 'planned' ||
          concept.articleSlug ||
          concept.id === 'private-draft',
      ),
    ),
  );
}
assert.equal(search.length, count);
assert(!JSON.stringify(search).includes('why-models-overfit'));
console.log(
  'Knowledge sequences verified: ' +
    topicSequences.length +
    ' routed book, ' +
    count +
    ' public concepts, canonical section pages, ordered navigation, article mappings, draft exclusion, and status-safe search.',
);

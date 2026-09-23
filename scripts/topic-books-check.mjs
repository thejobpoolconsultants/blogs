import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import { sequenceFor } from '../src/data/topic-sequences/index.ts';
import { topics } from '../src/data/topics.ts';
import {
  sectionsFor,
  conceptId,
  topicReading,
  researchAttribution,
} from '../src/data/topic-books.ts';

const expectedCounts = [
  8, 22, 32, 13, 12, 14, 14, 20, 15, 23, 20, 14, 18, 9, 17,
];
let sectionCount = 0;
for (const [index, topic] of topics.entries()) {
  const sections = sectionsFor(topic.id);
  assert.equal(
    sections.length,
    expectedCounts[index],
    topic.id + ': sequence changed',
  );
  if (sequenceFor(topic.id)) {
    sectionCount += sections.length;
    continue;
  }
  assert.equal(sections[0].id, 'start-here');
  assert.equal(
    new Set(sections.map((section) => section.id)).size,
    sections.length,
  );
  const $ = load(
    await readFile('dist/topics/' + topic.id + '/index.html', 'utf8'),
  );
  assert.equal($('h1').text().trim(), topic.title);
  const ids = $('[id]')
    .toArray()
    .map((node) => $(node).attr('id'));
  assert.equal(ids.length, new Set(ids).size, topic.id + ': duplicate anchors');
  assert.equal($('[data-book-panel]').length, sections.length + 1);
  for (const section of sections) {
    assert.equal($('#' + section.id).length, 1);
    for (const concept of section.concepts)
      assert.equal($('#' + conceptId(section.id, concept)).length, 1);
  }
  for (const item of topicReading[topic.id] || []) {
    for (const section of item.sections) {
      assert(
        sections.some((entry) => entry.id === section),
        topic.id + ': unknown section ' + section,
      );
      assert(
        $(
          '#' +
            section +
            ' .book-reading a[href="/blogs/articles/' +
            item.article +
            '/"]',
        ).length > 0,
        topic.id + ': missing published reading',
      );
    }
    for (const concept of item.concepts || []) {
      assert(
        sections.some(
          (section) =>
            item.sections.includes(section.id) &&
            section.concepts.includes(concept),
        ),
        topic.id + ': unassigned concept ' + concept,
      );
    }
  }
  if (topic.id === 'research')
    assert($('.book-heading').text().includes(researchAttribution));
  sectionCount += sections.length;
}
const directory = load(await readFile('dist/topics/index.html', 'utf8'));
assert.equal(directory('.directory-group').length, 7);
assert.equal(directory('.directory-group li').length, 15);
const build = load(
  await readFile('dist/articles/build-a-retrieval-baseline/index.html', 'utf8'),
);
for (const kind of [
  'implementation',
  'experiment',
  'observation',
  'limitation',
])
  assert.equal(build('[data-build-kind="' + kind + '"]').length, 1);
assert(
  build('[data-build-kind="observation"]').text().includes('expected output'),
);
console.log(
  'Topic books verified: 15 topics, 7 directory groups, ' +
    sectionCount +
    ' ordered sections, stable anchors, published reading, research attribution, and build labels.',
);

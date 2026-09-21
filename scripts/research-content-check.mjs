import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import {
  isPaperBased,
  paperArticleTypes,
  researchEditorial,
} from '../src/data/research-editorial.ts';

// Future paper types and paper citations must trigger the same disclosure.
for (const type of paperArticleTypes)
  assert(isPaperBased({ type, topic: 'generative-ai', sources: [] }));
assert(isPaperBased({ type: 'explainer', topic: 'research', sources: [] }));
assert(
  isPaperBased({
    type: 'explainer',
    topic: 'nlp',
    sources: [{ kind: 'paper' }],
  }),
);
assert(
  !isPaperBased({
    type: 'tutorial',
    topic: 'build',
    sources: [{ kind: 'docs' }],
  }),
);

let articles = 0;
let paperArticles = 0;
let classifiedStatements = 0;
for (const entry of await readdir('dist/articles', { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const $ = load(
    await readFile(`dist/articles/${entry.name}/index.html`, 'utf8'),
  );
  const article = $('article[data-paper-based]');
  assert.equal(article.length, 1, entry.name + ': missing classification');
  const paper = article.attr('data-paper-based') === 'true';
  const sourceEntries = $('#sources li[data-source-role]');
  assert(sourceEntries.length > 0, entry.name + ': missing source roles');
  for (const node of sourceEntries.toArray()) {
    assert(
      ['primary', 'supporting'].includes($(node).attr('data-source-role')),
    );
    assert(
      ['paper', 'docs', 'textbook', 'repository'].includes(
        $(node).attr('data-source-kind'),
      ),
    );
    assert($(node).find('.source-scope').text().trim().length >= 20);
  }
  assert.equal(
    $('.research-editorial-note').length,
    paper ? 1 : 0,
    entry.name + ': disclosure count',
  );
  if (paper) {
    assert(
      $('#sources [data-source-role="primary"][data-source-kind="paper"]')
        .length > 0,
    );
    assert(
      $('.research-editorial-note')
        .text()
        .includes(researchEditorial.disclosure),
    );
    paperArticles++;
  }
  for (const node of $('[data-provenance="source"]').toArray()) {
    assert(
      $(node).find('.provenance-source a[href^="https://"]').length > 0,
      entry.name + ': unlinked summary',
    );
  }
  assert(
    !/\b(?:our research found|our experiments show|we discovered|we proved|our study demonstrates|scientists proved|the research proves|objectively better)\b/i.test(
      article.text(),
    ),
    entry.name + ': review unscoped research claim',
  );
  assert(!article.text().includes('Original sources'));
  classifiedStatements += $('[data-provenance]').length;
  articles++;
}
const attention = load(
  await readFile('dist/articles/attention-paper-to-product/index.html', 'utf8'),
);
assert.equal(
  attention('h1').text().trim(),
  'Attention changed how information moves.',
);
for (const kind of [
  'source',
  'interpretation',
  'example',
  'experiment',
  'perspective',
  'limitation',
])
  assert(attention(`[data-provenance="${kind}"]`).length > 0);
assert(
  attention('article')
    .text()
    .includes('This is a proposed experiment. No results are claimed here.'),
);
assert(
  attention('article')
    .text()
    .includes(
      'The following is an engineering exercise, not a new experimental result.',
    ),
);
for (const route of ['research', 'topics/research']) {
  const $ = load(await readFile(`dist/${route}/index.html`, 'utf8'));
  assert($('h1').text().includes(researchEditorial.title));
  assert(
    $('.research-coverage').text().includes(researchEditorial.independence),
  );
}
console.log(
  `Research content gate passed: ${articles} articles, ${paperArticles} automatic disclosures, ${classifiedStatements} classified statements. Editorial judgment and experiment reproduction are separate from this structural check.`,
);

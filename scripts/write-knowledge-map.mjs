import { mkdir, writeFile } from 'node:fs/promises';
import {
  topicSequences,
  sectionPath,
} from '../src/data/topic-sequences/index.ts';

await mkdir('docs/content', { recursive: true });
for (const sequence of topicSequences) {
  const concepts = sequence.sections.flatMap((section) => section.concepts);
  const lines = [
    '# ' + sequence.title + ' knowledge map',
    '',
    'This document is generated from the typed sequence. Run `node scripts/write-knowledge-map.mjs` after an editorial change, then format the generated Markdown.',
    '',
    'The canonical implementation specification supplies the section titles and sequential numbers. Its 22 chapters replace the previous 11 broad sections. The accompanying conceptual outline informed the structure; where their example numbers differ, the implementation specification takes precedence.',
    '',
    '## Current coverage',
    '',
    '- Ordered sections: ' + sequence.sections.length + '.',
    '- Concepts: ' + concepts.length + '.',
    '- Published concepts: ' +
      concepts.filter((concept) => concept.status === 'published').length +
      '.',
    '- Planned concepts: ' +
      concepts.filter((concept) => concept.status === 'planned').length +
      '.',
    '- Draft concepts in the sequence: ' +
      concepts.filter((concept) => concept.status === 'draft').length +
      '.',
    '- Existing article: `what-machines-learn`, referenced from 01.01, rather than copied into a new page.',
    '- The existing article draft `why-models-overfit` remains private. The Overfitting concept is a public planned entry with no draft link.',
    '',
    '## Data and reusable UI',
    '',
    '`src/data/topic-sequences/types.ts` defines TopicSequence, KnowledgeSection, and a discriminated KnowledgeConcept union. Published concepts require an articleSlug. Every concept has a stable id, display number, section-local slug, title, description, level, and status; grouping is optional.',
    '',
    '`src/data/topic-sequences/machine-learning.ts` is the single canonical ML source. `index.ts` registers books, computes public counts, builds paths, and projects public content. It can register other subjects without introducing subject-specific UI.',
    '',
    'Five new components in `src/components/knowledge/` provide TopicKnowledgeLayout, TopicSidebar, TopicConceptList, TopicConceptStatus, and TopicSectionPager. They reuse TopicInsight, ConceptFlow, ArticleList, and BuildMethod. The other 14 subjects continue using their existing book layout until their data is migrated.',
    '',
    'The old Machine Learning entry was removed from topic-sections.json. Its sectionsFor adapter now reads the typed sequence, so the directory count cannot drift from the new book.',
    '',
    '## URLs and compatibility',
    '',
    '- Overview: `/blogs/' + sectionPath(sequence) + '`.',
    '- Chapter: `/blogs/' + sectionPath(sequence, 'clustering') + '`.',
    '- Concept: `/blogs/' + sectionPath(sequence, 'clustering') + '#k-means`.',
    '- Published article: `/blogs/articles/what-machines-learn/`.',
    '- There are 22 new static section pages. Concepts are anchored rows, not hundreds of empty routes.',
    '- The old overview fragment links are mapped through legacyHashes, including start-here, evaluation, ensemble-learning, and former concept fragments. Browser navigation replaces these with their new URLs. Without JavaScript, the overview still provides the chapter directory.',
    '- Each section has its own canonical URL, title, description, breadcrumbs, and previous/next links. Sequence numbers describe editorial order, never personal completion.',
    '',
    '## Status and publication rules',
    '',
    '- `published`: the title links to an eligible published article. Mark this only when the article supports the concept.',
    '- `planned`: render the concept title, intended guide scope, level, and “Article in preparation”. The row does not link to an invented article.',
    '- `draft`: omit the concept from public navigation, content, counts, and the concept index. Article drafts and future-dated articles are excluded by the existing publishedArticles helper.',
    '- publicSequence also downgrades a published mapping to planned if its referenced article is unavailable, removing articleSlug from the public projection. The build gate flags invalid published mappings so editors can correct them before release.',
    '- Descriptions of planned guides are coverage plans, not claims that those guides or experiments already exist.',
    '',
    '## Add a concept',
    '',
    '1. Edit the relevant section in machine-learning.ts. Add a unique stable id and slug, the display number, title, scope description, level, and status planned.',
    '2. Use group for a logical right-column heading where useful. Concept numbers remain sequential within the chapter.',
    '3. Keep an existing concept’s stable id and slug when editing its title. Counts, menus, concept rows, and search entries are derived from this record.',
    '4. Regenerate this document, update the deliberate structural count assertions to match the reviewed editorial change, and run the checks below.',
    '',
    '## Publish an article for a concept',
    '',
    '1. Complete the article under the existing editorial/source rules. Set the article status and publication date appropriately.',
    '2. Set the concept status to published and articleSlug to the real article slug. Reuse the existing article instead of duplicating it.',
    '3. Build the site. Confirm that the concept title opens the article, article breadcrumbs include the section, and search reports a published article available.',
    '',
    '## Reorder safely',
    '',
    'Reorder the sections array and update display numbers and concept numbers together. Never rename stable concept IDs or section/concept slugs just to match new numbering. Previous/next navigation derives from array order. If a URL must change, add a compatibility mapping and test it; do not silently break shared links. Review the expected canonical order assertions when the editorial sequence intentionally changes.',
    '',
    '## Search and navigation',
    '',
    '`concept-index.json` contains only public concept metadata and valid section anchors. The existing search combines exact/punctuation-normalized concept-title matches with Pagefind article and section results. Planned results show the topic, section, and “Article in preparation”. Choosing an article-type filter limits results to articles; topic filters apply to both sources.',
    '',
    'The requested K-Means, SHAP, Random Forest, PCA, Cross Validation, and Data Drift queries have dedicated browser checks. Draft concepts never enter this JSON endpoint; hidden draft content also never enters static section HTML.',
    '',
    'Desktop navigation is sticky with an internal scroll region. Section links and disclosure controls are separate keyboard targets. Native details elements allow collapse/reopen, with one chapter expanded at a time. At 1000px and below, the sidebar becomes a topic/selected-section disclosure. Escape closes it, and a concept deep link opens its chapter and highlights its current row. Native page routes and disclosures work without JavaScript.',
    '',
    '## Verification commands',
    '',
    '- `npm run build`: existing site/research checks plus the knowledge-sequence gate.',
    '- `npm run verify:knowledge`: all chapter metadata, anchors, numbers, statuses, mappings, counts, draft exclusion, and the concept search projection.',
    '- `npm run test:machine-learning`: the requested pages at 375px, 768px, and 1440px in both themes; accessibility, keyboard/disclosures, deep links, search, history, and no-JavaScript navigation.',
    '- `npm run test:topics`: regression checks for the existing topic books.',
    '- `npm run check`, `npm run lint`, `npm run format:check`.',
    '',
    '## Complete ordered concept inventory',
  ];
  for (const section of sequence.sections) {
    lines.push(
      '',
      '### ' + section.number + ' — ' + section.title,
      '',
      'URL: `/blogs/' + sectionPath(sequence, section.slug) + '`',
      '',
      section.description,
      '',
      '| Number | Concept | Level | Status | Group |',
      '| --- | --- | --- | --- | --- |',
    );
    for (const concept of section.concepts)
      lines.push(
        '| ' +
          [
            concept.number,
            concept.title,
            concept.level,
            concept.status,
            concept.group || '—',
          ].join(' | ') +
          ' |',
      );
  }
  await writeFile(
    'docs/content/' +
      sequence.id.toUpperCase().replaceAll('-', '_') +
      '_KNOWLEDGE_MAP.md',
    lines.join('\n') + '\n',
  );
}

import { mkdir, writeFile } from 'node:fs/promises';
import {
  topicSequences,
  sectionPath,
} from '../src/data/topic-sequences/index.ts';

await mkdir('docs/content', { recursive: true });
for (const sequence of topicSequences) {
  const concepts = sequence.sections.flatMap((section) => section.concepts);
  const example =
    sequence.sections.find((section) =>
      section.concepts.some((concept) => concept.status === 'planned'),
    ) || sequence.sections[0];
  const exampleConcept =
    example.concepts.find((concept) => concept.status === 'planned') ||
    example.concepts[0];
  const lines = [
    '# ' + sequence.title + ' knowledge map',
    '',
    'Generated from src/data/topic-sequences/' +
      sequence.id +
      '.ts. Regenerate with node scripts/write-knowledge-map.mjs, then format the generated Markdown.',
    '',
    'The supplied canonical sequence replaces the previous 11-section outline. The top-level chapter names and complete numbered lists take precedence over abbreviated sidebar examples.',
    '',
    '## Coverage',
    '',
    '- Sections: ' + sequence.sections.length + ', plus Overview.',
    '- Concepts: ' + concepts.length + '.',
    '- Published concept references: ' +
      concepts.filter((concept) => concept.status === 'published').length +
      '.',
    '- Planned concepts: ' +
      concepts.filter((concept) => concept.status === 'planned').length +
      '.',
    '- Draft concepts: ' +
      concepts.filter((concept) => concept.status === 'draft').length +
      '.',
    '- Learning path: ' +
      sequence.learningPath.title +
      ' at /blogs/learn/' +
      sequence.learningPath.id +
      '/.',
    '',
    'Counts are calculated from the data. Sequence numbers describe editorial order, never personal completion. Planned descriptions state intended coverage; they are not full articles or claims of completed experiments.',
    '',
    '## Reusable architecture',
    '',
    'TopicSequence → KnowledgeSection → KnowledgeConcept. Each concept has a stable id, display number, section-local slug, title, description, level, optional group, and published/planned/draft status. Published concepts require an articleSlug.',
    '',
    'The shared TopicKnowledgeLayout, TopicSidebar, TopicConceptList, TopicConceptStatus, and TopicSectionPager render every registered book. TopicInsight, ConceptFlow, ArticleList, and BuildMethod are reused. Optional navTitle, notice, relatedArticleSlugs, and diagram fields support concise sidebar labels, editorial notes, published related reading, and a staged learning-cycle visual.',
    '',
    'Related reading retains the referenced article’s original topic, type, title, URL, sources, and research attribution. It does not publish a new concept guide or duplicate an article body.',
    '',
    'The sequence registry projects only public content and supplies the sectionsFor adapter, keeping the Topics directory count consistent. Other topics can be added to the registry without a separate topic-specific UI.',
    '',
    '## URL convention',
    '',
    '- Overview: /blogs/' + sectionPath(sequence),
    '- Section: /blogs/' + sectionPath(sequence, example.slug),
    '- Concept: /blogs/' +
      sectionPath(sequence, example.slug) +
      '#' +
      exampleConcept.slug,
    '- Article: /blogs/articles/{articleSlug}/',
    '',
    'Each chapter has a real static route, canonical metadata, breadcrumbs, previous/next links, an overview link, and the topic learning path. Concepts use anchors within chapter pages; there are no empty concept routes. Existing fragment URLs migrate through legacyHashes. Preserve those mappings when renaming sections.',
    '',
    '## Status and publication',
    '',
    '- published: the concept title opens an eligible published article.',
    '- planned: show the concept with Article in preparation and no invented article link.',
    '- draft: omit the concept from public navigation, rows, counts, and search.',
    '- publicSequence removes draft concepts, excludes unpublished related reading, and removes article links when the target article is unavailable. The build gate flags invalid published mappings before release.',
    '- The existing article publication-date and status filters also exclude drafts and future-dated articles. No draft body is copied into the knowledge index.',
    '',
    '## How to add and publish articles',
    '',
    '1. Edit src/data/topic-sequences/' +
      sequence.id +
      '.ts. Add a concept with a unique stable id and slug, the correct display number, a scope description, level, optional group, and planned status.',
    '2. Write the real article using the existing content schema and editorial/source rules. Keep it draft until ready. Date emerging-architecture coverage and identify the source/model version.',
    '3. Set the concept to published with the real articleSlug only when the article supports it. To supply background instead, add its slug to the section’s relatedArticleSlugs. The article keeps its original classification.',
    '4. Regenerate this document, run the build and browser checks, and verify the concept link, search status, article breadcrumbs, and research/source disclosures.',
    '',
    '## Reorder safely',
    '',
    'Reorder the sections array and update display numbers and concept numbers together. Keep stable IDs and slugs unchanged when changing display order or wording. Previous/next links derive from array order. If a URL must change, add a compatibility mapping and test it. Update the deliberate canonical count/order assertions only for an intentional editorial change.',
    '',
    '## Search and navigation',
    '',
    'The public concept-index.json endpoint contains metadata and valid chapter anchors. Search combines normalized concept-title matches with Pagefind results. Planned matches show the topic, chapter, and Article in preparation. Topic filters apply to both result sources; article-type filters exclude concept-index entries. Draft concepts and unavailable article links never enter the public concept projection.',
    '',
    'Desktop navigation is sticky, sized to the available viewport, and internally scrollable without blocking the footer. Chapter links and disclosure controls are separate keyboard targets. Only one chapter expands at a time. At 1000px and below the menu is a collapsible topic/section control. Escape closes it; concept anchors highlight the selected concept. Native links and disclosures work without JavaScript.',
    '',
    '## Verification',
    '',
    '- npm run build: site links/assets, metadata, feeds, draft exclusion, research safeguards, and knowledge-sequence checks.',
    '- npm run verify:knowledge: every concept number, ID, anchor, status, article mapping, and public search entry.',
    '- npm run test:' +
      sequence.id +
      ': responsive layouts, themes, navigation, keyboard access, deep links, search, and accessibility.',
    '- npm run check; npm run lint; npm run format:check.',
    '',
    '## Published concept mappings',
    '',
    '| ID | Number | Concept | Article slug |',
    '| --- | --- | --- | --- |',
  ];
  for (const concept of concepts.filter(
    (concept) => concept.status === 'published',
  ))
    lines.push(
      '| ' +
        [concept.id, concept.number, concept.title, concept.articleSlug].join(
          ' | ',
        ) +
        ' |',
    );
  lines.push('', '## Complete section and concept inventory');
  for (const section of sequence.sections) {
    lines.push(
      '',
      '### ' + section.number + ' — ' + section.title,
      '',
      'URL: /blogs/' + sectionPath(sequence, section.slug),
      '',
      section.description,
    );
    if (section.notice) lines.push('', section.notice);
    if (section.relatedArticleSlugs?.length)
      lines.push(
        '',
        'Related reading: ' + section.relatedArticleSlugs.join(', ') + '.',
      );
    lines.push(
      '',
      '| ID | Number | Concept | Level | Status | Group |',
      '| --- | --- | --- | --- | --- | --- |',
    );
    for (const concept of section.concepts)
      lines.push(
        '| ' +
          [
            concept.id,
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

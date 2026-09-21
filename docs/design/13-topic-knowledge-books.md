# Topic knowledge books

The Topics directory now groups 15 subjects into seven compact lists. Each subject opens a knowledge book with an overview, an ordered section menu, and one active content section. The requested sequence contains 219 sections. Article publication status is separate from the planned learning sequence.

## Reading experience

- Desktop: a sticky, independently scrollable section menu sits beside the content. The active section has a gold rule and a tinted background; only its concepts expand.
- Mobile and tablet: the menu becomes a collapsible topic-specific control, such as **NLP sections**. Selecting a section closes the menu and focuses its heading. Escape closes the menu and returns focus to its summary.
- Section and concept links use ordinary URL fragments, for example `/blogs/topics/nlp/#transformers` and `/blogs/topics/nlp/#word-embeddings--vector-similarity`. Refresh, browser Back/Forward, copied links, and generated heading links restore the correct section.
- Without JavaScript, all sections remain readable in document order and the same links work as normal anchors. Section content is rendered as static HTML, not fetched after a click.
- Overview articles are listed once. Section reading is explicitly curated, including relevant articles from other topics. Unwritten guides are labeled **Guide planned**; empty sections describe their reserved place in the sequence.
- Topic headings use the subject name. The existing NLP and Agentic AI signature lines remain as overview headings, and their article titles are unchanged. Existing concept diagrams and editorial insights remain in the overview.
- Research attribution stays above all research sections. The overview retains the existing evidence/independence disclosure. Build guides distinguish implementation, experiment, observation, and limitation; expected output and proposed exercises are explicitly labeled.

## Adding content without changing the sequence

1. Write the article using the existing content schema and editorial standards. Keep incomplete work in draft status.
2. Find its section in `src/data/topic-sections.json`. This file stores the section order, stable IDs, and concept labels for all 15 topics. Keep existing IDs when editing titles so shared links continue to work.
3. Add a curated association to `topicReading` in `src/data/topic-books.ts`: the article slug, the section IDs it supports, and optionally the exact concept labels it introduces. A concept association means related reading, not a claim that the article fully covers the concept.
4. Connect the topic to an existing learning path in `src/data/learning-paths.ts` when appropriate. Topics without a dedicated path link to the learning-path directory.
5. Run `npm run build`. Its topic gate catches missing sections, duplicate anchors, invalid associations, missing published reading, and missing research/build labels. Only eligible published articles resolve into the rendered reading lists. Add mappings when their article is ready to publish; the gate rejects stale or unpublished mappings.

`topics.ts` remains the canonical article taxonomy. Its `subtopics` values are unchanged, preserving existing article metadata. Chapter concepts are a separate editorial navigation layer: Topic → Section → Concept → Article → Learning Path. There are no new placeholder article routes or extra section pages in the sitemap.

## Implementation

- `src/components/TopicBook.astro`: shared server-rendered layout for every topic.
- `src/data/topic-sections.json`: the complete requested sequence.
- `src/data/topic-books.ts`: typed accessors, curated reading, concept anchors, compact menu labels, and research attribution.
- `src/data/topic-flows.ts`: the existing five conceptual progressions.
- `src/scripts/topic-book.ts`: progressive section switching, history, focus, responsive menu behavior, and malformed-fragment fallback.
- `src/styles/topic-books.css`: directory and book styles using existing light/dark tokens.
- `src/components/BuildMethod.astro`: a compact explanation of the four build-guide labels.
- The published retrieval baseline and tutorial template now use the four requested categories. The tutorial's expected `model training` result is `('training', 1 / 3)`; it is not presented as a retrieval benchmark.

## Validation

`npm run build` includes the existing local-link, metadata, draft-exclusion, and research-provenance checks plus `scripts/topic-books-check.mjs`. It still generates 70 HTML pages and indexes 24 publication/topic pages.

`npm run test:topics` runs browser checks across all topic pages and the directory in light/dark themes at 375px and 1440px. It also visits all 219 sections, checks keyboard selection, history, refresh, concept/heading links, unknown/malformed fragments, responsive menu resizing, Escape, no-JavaScript readability, and the continued absence of `/rss/`. Screenshots and the accessibility report are saved under `artifacts/topic-books/`.

The existing theme-aware branding, publication navigation, RSS XML feed, article URLs, and research disclosures are retained. No commit, push, or deployment is part of this change.

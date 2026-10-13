# Topic reader navigation

The knowledge library uses topic → section → article navigation. It has no reading-progress or completion system. The library landing page keeps “Find your starting point.”, its seven categories, and its 15 topic entries. The sidebar appears only within a topic or published article.

## Structure and metadata

`src/utils/topic-navigation.ts` builds navigation from the existing section catalogue and published article frontmatter. Section order comes from `sectionsFor`; article placement and order come from the article's `section` and `order` fields. Existing associations are retained as a compatibility fallback. Draft, archived, and future-dated articles are excluded. Planned concepts stay in the central knowledge index and are not presented as published sidebar articles.

The optional schema additions are a section ID and a positive integer article order. All 16 existing published articles now have explicit placement. No user-specific fields were added. The existing `status` field describes editorial publication availability; it does not describe a reader.

For example:

```yaml
topic: 'ai-engineering'
section: 'model-serving'
order: 1
```

Use the topic's existing section ID, not a newly invented navigation label. When several articles share a section, assign their article order there. The sidebar uses each article's actual title and slug, and the previous/next links traverse published articles in section order, including across section boundaries. The first article has no previous link; the last has no next link. Editorial series navigation remains separately available.

## Reader layout and controls

The article layout has a 285 px sticky sidebar, a responsive main column up to about 900 px, and a 210 px right-hand table of contents on large screens. The sidebar accounts for the header/viewport space and scrolls independently when necessary.

The sidebar shows the topic title, actual section count, All topics link, numbered sections, and real article links. The topic heading and section count remain above the independently scrolling links. The current article alone gets stronger weight, a subtle background, a restrained gold accent, and `aria-current="page"`. Its section opens automatically. Sections may be opened or closed with native disclosure controls, using only the current page's DOM state.

On mobile, Browse topic opens a native modal drawer. The same navigation DOM moves between the desktop sidebar and the drawer. There are no duplicate navigation trees or IDs. Tab and Shift+Tab stay inside the drawer; collapsed-section links are excluded from the focus loop. Escape and Close restore focus to Browse topic. Choosing an article navigates through a normal anchor link.

The right table of contents lists the current article's H2/H3 headings and sources. IntersectionObserver updates `aria-current="location"` for the heading being read, including after an anchor jump. No continuous scroll handler or reading-progress calculation is used.

## Compatibility and SEO

Existing published article URLs remain `/blogs/articles/<slug>/`. Existing topic section routes and fragment anchors remain valid; no article route was renamed. Machine Learning and Deep Learning retain their existing legacy-fragment mappings. Normal links remain available with JavaScript disabled.

Breadcrumbs use Knowledge Library → topic → section → article, with a matching BreadcrumbList. Canonical URLs, BlogPosting metadata, authors, publication/update dates, descriptions, Open Graph images, RSS, sitemap, and search are preserved through the existing pipeline. Sidebar content is excluded from full-text indexing to avoid duplicating article bodies.

Content availability labels such as Article in preparation remain where needed in the central indexes. Sidebar navigation has no completed/unread labels, checkmarks, circular status indicators, progress bars, percentages, or completed-count ratios. Existing theme preferences are independent of this feature. No reading state is persisted.

## Reusable components

- `TopicReaderLayout`, `TopicReaderSidebar`, `TopicSidebarSection`, and `TopicArticleLink` render the hierarchy.
- `ArticleBreadcrumbs`, `ArticleTableOfContents`, and `ArticlePreviousNext` render article context and navigation.
- Existing `TopicSidebar` delegates to the shared sidebar for the routed knowledge books.
- `src/scripts/topic-reader.ts` handles the drawer and heading navigation. Topic-index scripts retain existing fragment behavior.

The previous inline-menu browser checks were updated for the native drawer. Shared book checks retain all section/concept coverage, search behavior, direct concept anchors, publication-safe reading, legacy links, and no-JavaScript navigation.

## Validation commands

Run from the blogs project. On Windows, use `npm.cmd` when PowerShell execution policy prevents the npm PowerShell wrapper.

```text
npm.cmd run build
npm.cmd run check
npm.cmd run format:check
npm.cmd run verify:reader
npm.cmd run preview
npm.cmd run test:reader
npm.cmd run test:topics
npm.cmd run test:machine-learning
npm.cmd run test:deep-learning
```

The static reader checks cover all 15 topics and 16 published article routes, ordering, publication exclusions, duplicate/invalid metadata, first/last links, cross-section links, current-article highlighting, automatic section expansion, H2/H3 contents, breadcrumbs, canonical URLs, and the absence of reader tracking.

Browser checks cover mobile/tablet/desktop layouts in both themes, keyboard controls, focus containment and restoration, drawer selection, sticky navigation, active-heading behavior, anchors/history/search, and accessibility. The existing build still verifies every generated page, local link and asset, canonical/brand metadata, feed, search index, research disclosure, and knowledge index.

Database changes: **none**. Authentication changes: **none**. Progress tracking: **not implemented**. Completion status: **not implemented**. Deployment: **not performed**.

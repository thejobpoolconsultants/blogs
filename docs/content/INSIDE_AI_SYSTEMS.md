# Inside AI Systems — One Problem, One Architecture, One Lesson.

The first week is a complete educational reading series for students learning how an AI application works. Read one lesson per day; all seven articles are available together. Day numbers describe a learning sequence, not fabricated publication dates. The local article date is October 12, 2026. Deployment and ongoing publication remain manual.

## The first seven lessons

| Day | Article                                             | Program | Main checkpoint                                                             |
| --- | --------------------------------------------------- | ------- | --------------------------------------------------------------------------- |
| 1   | Your AI Model Is Fast. Why Are Users Still Waiting? | 03      | Separate client TTFT, queue wait, and completion time on a request timeline |
| 2   | Why AI Requests Wait: Bounded Queues and Deadlines  | 03      | Calculate backlog and drain time; define admission and expiry behavior      |
| 3   | When a Document Assistant Answers Without Evidence  | 01      | Test current, historical, forbidden, missing, and conflicting evidence      |
| 4   | Why an AI Agent Creates the Same Ticket Twice       | 01      | Trace a lost response, stable operation ID, and reconciliation              |
| 5   | Why More AI Replicas Do Not Immediately Fix a Spike | 06      | Distinguish desired, starting, and ready capacity                           |
| 6   | When Caching Makes an AI Answer Fast and Wrong      | 06      | Specify scoped keys, invalidation, and permission-change behavior           |
| 7   | How to Release an AI Change Without Guessing        | 08      | Record quality gates, live rollout criteria, and recovery dependencies      |

Each lesson contains prerequisites, learning outcomes, a practical problem, an architecture, a worked example, mistakes and limitations, an exercise with an inspectable completion checkpoint, and verified primary documentation or research references. Numerical scenarios are explicitly illustrative. Paper-backed content retains the site's research disclosure.

## Entry points and changed areas

- Homepage: daily-series feature and **Explore Blogs by Program**, with Read Articles links.
- Series: `/blogs/series/inside-ai-systems/`, with seven ordered lessons and calculated reading times.
- Articles: seven MDX files in `src/content/articles/inside-ai-systems/`; existing article routes are preserved.
- Architectures: accessible inline numbered flows plus standalone HTML viewers in `public/diagrams/inside-ai-systems/`. Viewers are loaded only when requested and support themes, inspection, and export.
- Program pages: existing collection pages now include available educational articles, with truthful empty states for collections lacking full articles.
- Article browser: Program, Topic, and Learning Level filters; combined filtering, shareable query parameters, result counts, and empty-state/reset controls.
- Shared metadata: optional validated `program` field overrides heuristic recommendations for explicitly assigned articles.
- Article navigation: Day labels, table of contents, existing previous/next links, related reading, program destinations, and the existing enquiry form.
- Search, RSS, social cards, and sitemap: generated through the existing pipeline.

The enquiry copy uses the exact TheJobPoolConsultants name and requested limited-seats message. The existing main-site program catalogue and Google enquiry URL are reused. **Individual specialist program destination URLs are absent from the existing configuration**; external Explore This Program links retain its verified shared `/programs` destination. The local specialist article collections have distinct URLs. No destination URLs were invented.

## Maintaining the daily format

Use `templates/inside-ai-systems.md` for the next article. Choose one concrete failure and one learning outcome before drafting. Add a new ordered lesson to `src/data/inside-ai-systems.ts`, assign a canonical topic and program, and use the next unique `seriesOrder`.

Verify technical claims against official documentation or original papers. Put citations near the relevant claims and describe the scope of each source in frontmatter. Execute any runnable examples. Label unrun designs, pseudocode, simulations, invented numbers, and proposed experiments clearly. Do not imply that teaching exercises are provider benchmarks or independently reproduced research.

Architecture source candidates are retained in `docs/design/inside-ai-systems/`. The generator writes working candidates to ignored `.archify/` directories. Finalize each changed candidate with Archify's complete showcase gate, inspect any flagged layout, and copy only the passing artifact to its public viewer path. Preserve previous evidence when changing an already finalized candidate.

Day numbers and counts come from content. A planned lesson must have a Coming soon state until its full article is available. Do not create a link to a draft or invent future publication dates. The first week's files are route-eligible in the local static build; this change does not deploy them.

Suggested future subjects, **not written or scheduled**: GPU memory and data movement (02/07), data-center networking (02), robot perception-to-action failures (04), reward design (05), and customer requirements-to-deployment decisions (09). The seven topic categories and 15 field pages remain separately navigable.

## Verification

Run from `TheJPC-blogs/blogs` with Node 24 or later. On Windows, use `npm.cmd` when PowerShell script execution is restricted.

```text
npm.cmd run check
npm.cmd run build
npm.cmd run preview
node scripts/inside-ai-browser-qa.mjs
```

The browser check uses the local preview at port 4321 and Microsoft Edge. It covers mobile/desktop containment, resolved light/dark themes, WCAG accessibility scans, complete lesson content, adjacent reading links, source links, validated viewer-byte identity, combined filters, keyboard focus, program collections, reduced motion, and full-text search.

The build runs the existing metadata/link/anchor, brand, feed, search, research disclosure, topic-book, and knowledge-sequence checks. Existing build warnings about MDX head directives and three typecheck hints in the anatomy scripts are unrelated to this series.

Human editorial review remains distinct from structural checks. No publication automation, newsletter signup, external message, or deployment is introduced.

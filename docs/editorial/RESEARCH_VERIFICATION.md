# Research editorial system verification

Companion audit: [RESEARCH_CONTENT_AUDIT.md](RESEARCH_CONTENT_AUDIT.md).

## Delivered changes

- Research destination: Research Papers & Insights, with explicit educational coverage and non-reproduction language on both the hub and topic page. Short navigation remains Research.
- Homepage: paper-specific heading and copy about authors, tests, evidence and primary reading.
- Content schema: required primary/supporting role, source kind and a human-readable evidence scope. Published paper-based content requires a primary paper.
- Automatic disclosure: research/paper formats, research-topic articles and any article citing a paper receive About this article near sources. Five current articles qualify.
- Statement component: six semantic variants provide source-backed summary, interpretation, example, proposed experiment, perspective and limitation labels. Eighteen classified statements are present.
- Attention article: title retained; subtitle sharpened; findings, supported conclusions, limits, interpretation, example, proposed experiment and open questions separated. Both existing explicit experiment statements retained.
- Source corrections: added Peters et al. for contextual representations and Stanford's IDF subsection; narrowed scikit-learn links; distinguished primary research from background documentation/textbooks throughout.
- Other articles: examples and proposed designs identified, and the NLP mental model scoped to embedding-based language models. Existing article routes, paper authorship, taxonomy IDs and the excluded overfitting draft remain intact.
- Writing system: editorial evidence rule, checklist, safe public format labels, reserved original-research formats, and all six templates updated. Research template now uses the proper paper type/topic.
- Build gate: validates rendered disclosure and source structure, links, critical retained statements and risky research phrases. Scientific claim review remains an editorial responsibility.

## Checks

| Check                     | Result                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Production build          | Passed; 70 HTML pages, 4,443 local links/assets, metadata, feeds, search and draft exclusion checked                                      |
| Research build gate       | Passed; nine published articles, five automatic disclosures, 18 classified statements                                                     |
| Typecheck                 | Passed; 71 files, zero errors, warnings or hints                                                                                          |
| ESLint                    | Passed                                                                                                                                    |
| Formatting                | Passed                                                                                                                                    |
| Responsive browser checks | 32: eight routes, 375px/1440px, light/dark                                                                                                |
| Accessibility             | 16 axe audits, zero violations                                                                                                            |
| Interaction checks        | Mobile contents links, machine type filters, human-readable search labels and no-JavaScript disclosures passed                            |
| Rendered claim scan       | All 70 generated pages scanned; zero matches for the targeted unqualified original-research/validation phrases                            |
| Tutorial code             | Existing assertions and common-word/paraphrase queries passed; this is a local code check, not academic reproduction                      |
| Visual review             | Research hero, source-backed summary, proposed experiment and automatic disclosure inspected in desktop/mobile and light/dark screenshots |

Existing nonblocking Astro/MDX module-directive build warnings remain. There were no final compile, browser-console or local asset errors. Physical-device and screen-reader sessions were not performed.

The code execution confirmed that “the” matches the agents document and “a” matches the retrieval document, while the paraphrase “learning changes weights” has no token overlap. The original tutorial's “the” example was correct and retained.

## Reproduce

Run from the `blogs/` project:

```sh
npm run build
npm run check
npm run lint
npm run format:check
npm run verify:research
node scripts/research-browser-qa.mjs
```

The browser script uses the local preview at `http://127.0.0.1:4321/blogs/`. Artifacts: `artifacts/research/qa.json`, screenshots in that directory, `rendered-claim-audit.json`, `artifacts/research-language-audit.txt` and `artifacts/research-build.log`.

## Git and editorial limits

The existing working tree has modified LICENSE/README and untracked website files; this work remains there. No commit, push or deployment occurred. The removed RSS subscription page remains removed; its XML feed is unchanged.

No paper experiment was rerun. Source review checks attribution and scope, not the validity or reproducibility of the original findings. Future empirical claims require documented work and a deliberate extension of the currently supported content types. See the audit's remaining-risk section for source-access and editorial-review limits.

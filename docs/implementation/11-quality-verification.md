# Quality verification

Verified 2026-09-20 against the production build served at http://127.0.0.1:4321/blogs/.

| Command/check                          | Final result                                            | Failures or warnings                                                                                                                                                                              |
| -------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm ci                                 | Pass; 451 packages installed from lockfile              | One transitive whatwg-encoding deprecation notice. First attempt encountered a Windows native-module lock held by the preview server; stopped that server and reran successfully.                 |
| npm run check                          | Pass; 45 files, 0 errors, 0 warnings, 0 hints           | Deprecated Astro/Zod and lint-config APIs corrected during implementation.                                                                                                                        |
| npm run lint                           | Pass                                                    | None.                                                                                                                                                                                             |
| npm run format:check                   | Pass                                                    | A README punctuation edit required reformatting before the final pass.                                                                                                                            |
| npm run build                          | Pass; 70 HTML pages, 24 searchable pages, 10 PNG cards  | Astro/MDX/Vite emits upstream module-level `use astro:head-inject` warnings. Static diagrams and their shared styles were verified in the browser. No missing assets.                             |
| node scripts/verify.mjs (inside build) | Pass; 4,169 local link/asset references                 | Checks headings, anchors, metadata, social assets, brand spelling, JSON-LD, feeds, search index, and draft exclusion. First run found the 404 canonical; corrected to the actual 404.html output. |
| npm run test:browser                   | Pass                                                    | 64 responsive checks; 14 automated accessibility audits; zero final browser errors or failed local requests.                                                                                      |
| Python code extracted from tutorial    | Pass                                                    | All three assertions passed; model-training query ranks the training document first.                                                                                                              |
| npm audit                              | Pass; zero findings after patched dependency resolution | Pin Satori's fflate dependency to compatible 0.7.5 because its original exact pin had a moderate advisory.                                                                                        |
| git diff --check                       | Pass                                                    | Git's Windows line-ending normalization notice for README is informational.                                                                                                                       |
| Repository brand scan                  | Pass                                                    | Machine-readable lowercase package/URL identifiers and the explicit forbidden-variant validator are intentional.                                                                                  |

## Browser coverage

Eight widths: 320, 375, 430, 768, 1024, 1280, 1440, and 1920. At each width, checked homepage, ML/NLP/Generative AI topic pages, architecture and code articles, search, and a learning path. No page-level horizontal overflow.

Automated accessibility checks cover homepage, three topic pages, two articles, and search in both light and dark themes. A light-theme syntax token contrast issue was corrected. These checks are not a claim of exhaustive WCAG certification.

Interaction checks: persisted theme across navigation/reload, real Pagefind search, topic/type filters, base-prefixed results, no-result feedback, canonical-link and code clipboard actions, mobile menu/Escape, skip-link focus, reduced motion, and no-JavaScript article reading.

The first search test exposed an Astro/Vite preload placeholder in the bundled dynamic import. The production search loader now lives in public/search.js and is loaded as a native module. This avoids that bundler failure while retaining a local static index.

A real editorial draft, why-models-overfit, is excluded from routes, sitemap, RSS, social-card generation, published counts, and Pagefind. No draft article result appears in browser search.

## Visual review

Reviewed desktop light/dark homepages, mobile homepage/menu/search, ML/NLP/Generative AI pages, architecture reading layout, tutorial/code/sharing layout, and a generated social card. Corrected a split-list grid placement and embedded Inter in social cards after finding an operating-system font fallback.

Artifacts are local and ignored: artifacts/browser-qa.json and PNG screenshots. Browser automation used local Microsoft Edge because the in-app browser tool failed during initialization with missing sandbox metadata.

## Scope of verification

No Lighthouse score or live-host performance number is claimed. Output is static, primary fonts are local, UI JavaScript is small, and Pagefind loads only on search. Production hosting, DNS, GitHub Actions execution, and external social-crawler previews require deployment and administrator access.

No commit, push, merge, or deployment occurred. Preview remains available locally; stop it with `npx astro preview stop`.

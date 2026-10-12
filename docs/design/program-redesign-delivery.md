# Program discovery redesign

The local implementation follows the supplied preview: a warm white page, navy typography, bronze accents, large detailed artwork and a three/two/one-column program grid. The career-transition route is a separate native disclosure before the specialist cards. Cards contain no simulation controls. Program pages carry the explainers, exercises and editorial previews.

## Source and scope

Program identities were checked against `src/data/programs.ts` and the sibling website's `JPC-APP/lib/public-programs.ts`. That source names Program 09 **Forward Deployed Engineering**, not “Forward Deployed Engineer Readiness.” It contains broad program descriptions but no current lesson list or published admission prerequisites. These gaps are disclosed in the interface; educational examples and suggested audiences are not presented as official curriculum.

The existing configured main website, programs destination and Google enquiry form return HTTP 200 after redirects. Individual external curriculum URLs are unavailable in the verified source. “Explore Program” opens an implemented local educational preview with the verified main programs and enquiry destinations. No individual external URL, enrolment commitment, credential or career outcome was invented.

## Delivered files

- Discovery copy and visual metadata: `src/data/program-discovery.ts`.
- Homepage, simplified cards, native beginner disclosure and accessible artwork: `src/pages/index.astro`, `src/components/ProgramsSection.astro`, `FeaturedTransitionProgram.astro`, `ProgramArtwork.astro`.
- Nine program previews: `src/pages/programs/[id].astro`; three starter previews: `src/pages/guides/[id].astro`.
- Twelve complete Markdown drafts: `src/content/program-guides/`. Each is explicitly `status: draft`; previews have noindex and are excluded from sitemap, Pagefind and RSS. Publishing requires an editorial decision and the existing published-article schema.
- Nine distinct illustrations, each in 480/960-pixel WebP and AVIF: `public/illustrations/programs/`. Original PNG masters are saved locally in `artifacts/redesign/masters/`. These are raster illustrations; their source prompts are retained, rather than implying they are editable vectors.
- Actual built-in generation prompts: `docs/design/program-imagegen-prompts.json`; objectives, parts, palettes and simplifications: `program-art-prompts.json`.
- Editable graphs and records: `ProgramLab.astro`, `src/data/program-labs.ts`, `public/illustrations/program-guides/` and `public/examples/programs/q-learning-seed17.json`.
- Seven retained Anatomy SVG mechanisms appear only in the deeper technical previews. The architecture and delivery pages use ownership/dependency maps, a tradeoff matrix and working-document artifacts in place of the earlier arbitrary allocator and record-routing rig. Original Anatomy source and generated assets remain available.
- Three Archify viewers: `public/diagrams/`. Final specifications are the three `*.v3.workflow.json` files; earlier accepted candidates remain frozen. Explicit domain legends avoid mislabeling infrastructure as agent/tool behavior. Document preparation, thermal support, monitoring and scoped data dependencies are visible. Standalone viewers are validated separately from Astro page metadata.
- Seven runnable standard-library Python exercises: `public/examples/programs/`.

## Teaching and editorial decisions

The assistant distinguishes document preparation, permitted retrieval, evidence support and tool authorization. Missing evidence and denied submission have explicit outcomes.

Infrastructure includes component inspection and a weight-storage calculator. Parameter count × bits ÷ 8 gives ideal storage, with GB/GiB conversions and exclusions. It is not total GPU memory.

Serving uses an aligned finite simulation timeline with arrival, waiting, execution and completion. A batch changes the first-response and throughput tradeoff under the stated inputs; no device benchmark is implied.

Navigation uses actual breadth-first search and a separately recorded simulated trajectory. An incomplete map stops the simulation. The separate sorting-arm SVG remains labeled as another simplified robotics example.

Reinforcement learning runs seeded tabular Q-learning and plots recorded returns, reproduced by Python. A poor reward example compares explicitly calculated policy rollouts; it does not pretend to retrain on button selection.

The accelerator graph is a hypothetical Roofline ceiling with stated compute, bandwidth and intensity units. Architecture choices highlight affected system boundaries. Delivery follows six artifacts and changes scope when procedures are incomplete.

Existing published articles were reviewed. The retrieval article now makes permissions and the distinction from training explicit; the language-representation article expands TF-IDF at first use. Accurate research disclosures, walkthroughs and source attribution were preserved.

## Actual tools and skills

- **Imagegen** (`C:/Users/abhin/.codex/skills/.system/imagegen/SKILL.md`): built-in generation, one independent call per illustration. Sharp performs size/format optimization.
- **Anatomy** (`C:/Users/abhin/.claude/skills/anatomy/SKILL.md`): retained editable mechanisms and installed line-end/4× pose checks.
- **Archify** (`.agents/skills/archify/SKILL.md`): typed specifications, showcase delivery receipts and exact-artifact browser checks.
- Primary-source research, Astro content rendering, Playwright/axe, Python and repository checks. Baoyu, Humanizer, Visual Explainer, SEO Machine and Marketing Skills were not run or claimed.

## Verification and limits

Commands: `npm run format:check`, `npm run lint`, `npm run check`, `npm run build`, `npm run test:programs`, `node scripts/redesign/poses-qa.mjs`, `npm run test:browser`.

Reports and screenshots are local in `artifacts/redesign/`, including 52 responsive checks at 360/768/1024/1440, 20 light/dark accessibility checks, nine distinct image hashes, seven CPU exercises and 18 zero-error pose line checks. Archify acceptance is 9/9 for each artifact, with zero composition errors or warnings; browser receipts and perceptual screenshots are separate evidence.

The cloud exercise verifies actual local HTTP 401/200/403 behavior. Docker is installed, but its local Linux engine is not running, so the Docker container command was not executed. The container instructions use documented bind-mount and loopback-publishing syntax.

Remaining source questions: current detailed curricula, admission prerequisites, individual public curriculum URLs and any updated Program 09 title/lesson list. The local work does not authorize publication or invent answers to those questions.

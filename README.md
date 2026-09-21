# TheJobPoolConsultants — AI Knowledge Platform

A static public publication for understanding intelligence and building AI systems. Covers artificial intelligence, ML, deep learning, NLP, generative AI, agents, computer vision, reinforcement learning, data science, engineering, operations, research, architecture, practical experiments, and career learning.

## Local development

Run commands from this repository (the nested `blogs` directory in the supplied workspace). Requires Node 24+ and npm.

```sh
npm ci
npm run dev
```

Open the displayed local URL with `/blogs/` appended. For full-text search, use the production preview:

```sh
npm run build
npm run preview -- --port 4321
```

Open http://127.0.0.1:4321/blogs/. The build generates HTML, Pagefind search, feeds, sitemap, and article social PNGs. Astro 7 preview runs in the background; stop it with `npx astro preview stop`.

## Technology and structure

Astro 7, TypeScript, Markdown/MDX collections, Tailwind CSS, Pagefind, and locally bundled fonts. No backend, database, login, external font requests, or analytics.

```text
.github/workflows/   CI and Pages deployment
src/content/        Sourced articles with validated frontmatter
src/data/           Topics, tags, authors, series, learning paths
src/components/     Reading cards, concept flows, architecture diagrams
src/layouts/        Shared semantic shell and SEO
src/pages/          Static routes, feeds, and generated social cards
src/styles/         Theme tokens, layout, prose, responsive rules
src/utils/          URLs, content visibility, dates, reading time
scripts/            Build verification and browser QA
templates/          Six editorial starting points
docs/               Audit, implementation decisions, design, backlog
public/brand/       Original SVG mark
site.config.mjs     Public origin and base path
```

## Content creation

Copy a template to `src/content/articles/<topic>/<slug>.mdx`. Complete all metadata and verified sources. Keep `status: draft` until review. Only published, nonfuture articles appear on public pages, search, RSS, and social cards. Archived entries are excluded.

The schema in `src/content.config.ts` validates topics, canonical subtopics/tags, authors, and series references. Related article slugs must exist; slugs and series positions must be unique. Use both `series` and `seriesOrder` together. Updated dates cannot precede publication.

Add topics in `src/data/topics.ts`, series in `series.ts`, paths in `learning-paths.ts`, and real contributor metadata in `authors.ts`. Path steps may remain planned; use an empty article slug rather than a broken link. No personal credentials are invented.

Use MDX `ConceptFlow`, `ArchitectureDiagram`, or `Callout` for teaching. Native headings, tables, and fenced code handle prose. Add images under public and pass paths through `url()`. Provide alt text and captions, preserve licenses, and review both themes.

## Quality checks

```sh
npm run check
npm run lint
npm run format:check
npm run build
npm run test:browser
```

`npm run format` applies formatting. Build verification checks generated internal links/assets/anchors, metadata, JSON-LD, brand spelling, feeds, social cards, and draft exclusion.

Browser QA expects the preview on port 4321 and installed Microsoft Edge. It checks eight widths from 320 to 1920, light/dark accessibility, search and filters, clipboard behavior, keyboard navigation, reduced motion, and no-JavaScript reading. It saves screenshots and a JSON report under ignored `artifacts/`. For another environment, adapt the browser launch channel or install Playwright Chromium.

## GitHub Pages deployment

Target: https://thejobpoolconsultants.github.io/blogs/. `site.config.mjs` controls origin and `/blogs/`; all navigation and metadata use shared URL helpers.

An administrator must select **Settings > Pages > Source > GitHub Actions**. After review, a push to main or manual workflow run installs from the lockfile, validates, builds, uploads the artifact, and deploys with the official Pages actions. Normal deployment requires no application secrets. No automatic commit or push is part of local development.

For a custom domain, change origin and base in site.config.mjs, configure DNS/Pages, and add public/CNAME for the actual domain. Rebuild and rerun tests; application links do not need rewriting.

## SEO, editorial, and contributions

See [SEO guide](SEO_GUIDE.md), [editorial guide](EDITORIAL_GUIDE.md), [brand voice](BRAND_VOICE.md), [content strategy](CONTENT_STRATEGY.md), and [contributing](CONTRIBUTING.md). Initial coverage is deliberately small. Planned collections and path stages are labeled.

Newsletter and analytics are absent. A future integration belongs in the shared layout and needs a real provider, privacy review, and documented configuration. Never show simulated subscription success.

## License

MIT; see [LICENSE](LICENSE). Third-party fonts and dependencies retain their respective licenses. Linked research remains owned by its authors/publishers.

## Brand alignment and visual review

The publication shares the main platform's midnight/navy, ivory, gold and typography, with cyan technical diagrams. See [the design audit](docs/design/01-brand-alignment-audit.md) and [final visual review](docs/design/08-final-visual-audit.md).

With the production preview on port 4321, run `node scripts/redesign-qa.mjs` for the new interaction checks and `node scripts/visual-review.mjs` to reproduce the requested desktop/mobile screenshots in `artifacts/redesign/`. The main website return link is configured separately as `siteConfig.mainSite`.

## Supplied publication artwork

All 12 supplied logo images have been semantically renamed and archived; optimized active assets are under `public/brand/thejobpoolconsultants/knowledge-hub/`. See the [source mapping](docs/design/09-blog-brand-assets-audit.md) and [asset usage and verification report](docs/design/10-brand-asset-usage.md). Paths are centralized in `src/data/brand-assets.ts`. Regenerate with `node scripts/prepare-brand-assets.mjs`, format the generated file, and verify against the running preview with `node scripts/brand-assets-qa.mjs`.

The header and footer use dedicated transparent light/dark logos. See the [theme-aware logo report](docs/design/11-theme-aware-logo.md) for paths, generation provenance and verification. Run `node scripts/theme-logo-qa.mjs` for theme-switching checks.

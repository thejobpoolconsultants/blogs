# Brand asset usage and migration report

Theme-aware logo update: see [11-theme-aware-logo.md](11-theme-aware-logo.md) for the current light/dark assets, implementation and verification.

The 12 supplied originals have been renamed semantically and moved out of `logo/`. All original bytes are preserved; SHA-256 hashes are recorded in the asset manifest. The original filenames, dimensions, visual inspection and decisions are in [09-blog-brand-assets-audit.md](09-blog-brand-assets-audit.md). `logo/README.md` is now only a migration pointer.

## Asset tree

All filenames below have the prefix `thejobpoolconsultants-`.

```text
public/brand/thejobpoolconsultants/knowledge-hub/
├── asset-manifest.json
├── logos/
│   ├── knowledge-hub-light.png
│   └── knowledge-hub-light-384.png
    knowledge-hub-dark.png
    knowledge-hub-dark-384.png
├── emblems/
│   ├── knowledge-hub-emblem.png
│   └── knowledge-hub-emblem-96.png
├── banners/
│   ├── understand-intelligence-banner.webp
│   ├── understand-intelligence-banner-960.webp
│   ├── understand-intelligence-banner-visual-mobile.webp
│   ├── blogs-knowledge-hub-banner.webp
│   ├── blogs-knowledge-hub-banner-960.webp
│   └── blogs-knowledge-hub-banner-visual-mobile.webp
├── social/
│   └── knowledge-hub-social-card.png
└── archive/
    ├── publication-dark-editorial-mockup.png
    ├── publication-modular-navy-mockup.png
    ├── publication-ivory-mockup.png
    ├── publication-orbit-systems-mockup.png
    ├── publication-hybrid-mockup.png
    ├── knowledge-hub-horizontal-logo.png
    ├── knowledge-hub-orbit-lockup.png
    ├── knowledge-hub-emblem.png
    ├── understand-intelligence-banner.png
    ├── blogs-knowledge-hub-banner.png
    ├── blogs-knowledge-hub-crest.png
    └── heritage-logo-checkerboard-reference.png
```

## Every active production image

Paths in this table are relative to the directory above; the full filename prefix is included. KB values are decimal, rounded.

| File                                                                            | Dimensions | Size   | Use and component                                             |
| ------------------------------------------------------------------------------- | ---------- | ------ | ------------------------------------------------------------- |
| logos/thejobpoolconsultants-knowledge-hub-light.png                             | 768×317    | 242 KB | Retina desktop/footer source in `Brand.astro`                 |
| logos/thejobpoolconsultants-knowledge-hub-light-384.png                         | 384×159    | 68 KB  | Normal desktop/footer source in `Brand.astro`                 |
| logos/thejobpoolconsultants-knowledge-hub-dark.png                              | 768×317    | 144 KB | Dark desktop/footer source in `Brand.astro`                   |
| logos/thejobpoolconsultants-knowledge-hub-dark-384.png                          | 384×159    | 45 KB  | Small dark desktop/footer source in `Brand.astro`             |
| emblems/thejobpoolconsultants-knowledge-hub-emblem.png                          | 320×315    | 158 KB | About identity in `PublicationEmblem.astro`                   |
| emblems/thejobpoolconsultants-knowledge-hub-emblem-96.png                       | 96×95      | 20 KB  | Mobile header and drawer                                      |
| banners/thejobpoolconsultants-understand-intelligence-banner.webp               | 1600×900   | 114 KB | Large About supporting artwork in `BrandBanner.astro`         |
| banners/thejobpoolconsultants-understand-intelligence-banner-960.webp           | 960×540    | 55 KB  | Responsive About source                                       |
| banners/thejobpoolconsultants-understand-intelligence-banner-visual-mobile.webp | 768×673    | 58 KB  | About diagram-only crop at ≤640px                             |
| banners/thejobpoolconsultants-blogs-knowledge-hub-banner.webp                   | 1600×533   | 71 KB  | Homepage Knowledge Hub feature in `BrandBanner.astro`         |
| banners/thejobpoolconsultants-blogs-knowledge-hub-banner-960.webp               | 960×320    | 33 KB  | Responsive homepage source                                    |
| banners/thejobpoolconsultants-blogs-knowledge-hub-banner-visual-mobile.webp     | 768×367    | 32 KB  | Homepage topic-diagram crop at ≤640px                         |
| social/thejobpoolconsultants-knowledge-hub-social-card.png                      | 1200×630   | 920 KB | Default Open Graph/Twitter card, from the intelligence banner |

`public/brand/mark.svg` remains the official favicon. The nine existing article-specific generated PNGs under `social/` remain unchanged; `social/default.png` is retained as a compatibility route serving the new fallback image.

## Placement and accessibility

**Desktop header:** the requested original-style crest with the right-hand publication extension is primary. It renders directly on the header: original navy artwork in light mode and a dedicated transparent ivory asset in dark mode. The complete lockup is 288px wide (253px at intermediate widths), with no plate, wrapper padding, rounding or filter. Its detailed crest requires a taller masthead than the previous plain wordmark. Text is not repeated visibly beside it. A semantic HTML brand label remains available to assistive technology and indexing.

**Mobile header:** below 800px the book/orbit emblem appears beside real HTML `TheJobPoolConsultants` and `Blogs · Knowledge Hub`. It uses a 42px emblem, reduced to 32px at the narrowest breakpoint. The image has empty alt because the adjacent HTML supplies the identity. Desktop variants are hidden on mobile; both header variants load eagerly so a theme change or viewport resize can show them immediately. The drawer repeats a compact identity block with the same HTML wording.

**Footer:** the same theme-aware horizontal lockup appears at a smaller width, loaded lazily. Alt text for meaningful primary logo images is `TheJobPoolConsultants Blogs Knowledge Hub`. The enclosing home link has an explicit full-name accessible label.

**Homepage:** the real HTML hero and interactive intelligence map remain. A lower publication feature uses the Blogs Knowledge Hub banner, accompanied by HTML copy and real links to topics, research, architecture and learning paths. On mobile only the right-hand topic/system illustration is shown, avoiding tiny embedded headings and painted buttons. The banner itself links to the topic index so its baked promotional affordance is not a dead control.

**About:** a compact emblem sits beside the HTML company name and descriptor above the existing HTML H1. Further down, the intelligence banner supports the concepts-to-systems section; its mobile source contains the map rather than a second baked-in headline. The emblem is decorative in this context because the neighboring text names it.

**Topics, research, articles:** inherit the global header/footer identity. No full crest is repeated inside topic cards, paper cards, article previews or technical diagrams. The existing content remains dominant. The orbit lockup and stacked crest are retained as named alternative masters, not forced into additional interface placements.

**Banner alternatives:** the publication banner's alt identifies the company/publication and connected AI subjects. The intelligence banner's alt identifies its purpose and the data-to-feedback map. They do not transcribe every small embedded phrase. Every production image has explicit dimensions; responsive picture sources include their own dimensions to reserve the correct mobile aspect ratio.

## Social metadata and favicon

`BaseLayout.astro` defaults to the centralized social-card path through `absoluteUrl()`, producing a URL beneath `/blogs/`. The social PNG fits the full 1672×941 source inside 1200×630 with narrow navy side padding; nothing is stretched or cropped. Article-specific metadata still overrides the default with its existing unique image. Organization JSON-LD now points to the primary production logo.

The supplied emblem and existing favicon were compared visually at 16, 32, 48 and 180px. The emblem's text/detail disappears at favicon sizes. The simple official arrow mark remains recognizable, so it is retained with its full organization-name title. No horizontal logo is used as a favicon.

## Optimization and maintenance

- Originals total 17.14 MB and are retained only in the archive. They are not referenced by page markup.
- Transparent outer margins are trimmed from active logos/emblems; the original light artwork is unchanged, while the dedicated dark master is resized with its alpha preserved. Lossless PNG is preserved for these assets.
- Banners are resized to 1600/960px WebP at quality 88, with separately defined visual-only mobile crops. Their large variants are approximately 93–95% smaller than the supplied originals.
- Banners and footer imagery load lazily with asynchronous decoding. Header branding loads eagerly. No new dependencies or runtime image service were introduced.
- The social PNG favors image quality and compatibility, at about 920 KB; it is metadata, not a page-body download.
- `src/data/brand-assets.ts` centralizes paths, dimensions, the exact company name and descriptor. Components use `url()`; metadata uses `absoluteUrl()`.
- Regenerate with `node scripts/prepare-brand-assets.mjs`, then format the generated file. The script verifies workspace paths, refuses archive collisions, and checks migration hashes. Once originals are archived it regenerates derivatives from those masters.

## Files changed

Shared components: `Brand.astro`, new `BrandBanner.astro`, new `PublicationEmblem.astro`, `BaseLayout.astro`, and new `brand-assets.css`. Page sources: homepage, About, and the default branch of the social-image route. Every page receives the shared branding; article/topic/research content templates are preserved. Scripts: reproducible asset preparation and image/browser verification. No schema, routing, search, feed or deployment workflow changes were needed.

## Verification

- All 12 originals passed SHA-256 integrity checks; no old images remain in `logo/`.
- All 13 production images passed dimensions/format checks; PNG logo/emblem transparency is retained.
- 80 route/viewport/theme checks passed: homepage, About, topics, research and an article at 320, 375, 390, 430, 768, 1024, 1440 and 1920px, in light and dark mode.
- 20 axe audits passed with no violations, covering the five routes at 375px and 1440px in both themes. Image alternatives, HTML H1s, drawer Escape, responsive image selection and metadata overrides were checked.
- Build passes: 70 HTML pages, 24 searchable pages and 4,510 local links/assets verified, including base paths, canonical metadata, feeds and draft exclusion.
- Type check, lint and formatting checks pass. Existing upstream Astro/MDX module-directive build warnings remain; no new compile or browser errors were found.
- Screenshots and JSON results: `artifacts/brand-assets/`. Includes desktop/mobile page views, 1920px and tablet homepages, primary header, footer, drawer and both responsive publication-feature treatments. Screenshots wait for lazy image decoding.

Local preview: `http://127.0.0.1:4321/blogs/`. Run `node scripts/brand-assets-qa.mjs` against that preview to reproduce asset integrity, responsive and accessibility verification. Automated audits are supplemented by visual inspection; no physical-device or screen-reader session was performed.

## Git state and remaining work

The repository already contained the previous uncommitted implementation: modified LICENSE/README and untracked site directories. This integration remains in that working tree. No commit, push or deployment was performed. The old source image folder remains only as a README pointer. No required asset work remains; unused design alternatives and the checkerboard legacy image are intentionally archived rather than displayed.

# Blog brand asset audit

Completed before renaming or migrating source files. All 12 source images in `logo/` were inspected visually, with Sharp metadata/alpha statistics and SHA-256 comparisons. The five tall images were reviewed together; all seven remaining images were inspected separately. No exact duplicate files were found.

## Source mapping

All source files are PNG. Names in the proposed-name column are prefixed with `thejobpoolconsultants-`. Originals will be preserved byte-for-byte under the knowledge-hub archive; production derivatives will be generated only for active roles.

| Current File                                    | Dimensions | Visual Description                                                                                                                                        | Proposed New Name                        | Intended Use                                                                           | Keep/Delete            |
| ----------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------- |
| ChatGPT Image Sep 20, 2026, 05_37_18 PM (1).png | 724×2172   | Tall dark editorial homepage mockup; embedded headings, cards, navigation and diagrams; irregular partial alpha                                           | publication-dark-editorial-mockup.png    | Design reference                                                                       | Keep/archive           |
| ChatGPT Image Sep 20, 2026, 05_37_19 PM (2).png | 761×2067   | Related modular navy full-page concept, same editorial themes with different layout; partial alpha                                                        | publication-modular-navy-mockup.png      | Design reference                                                                       | Keep/archive           |
| ChatGPT Image Sep 20, 2026, 05_37_19 PM (3).png | 724×2172   | Ivory/light full-page concept with dark feature panels; partial alpha                                                                                     | publication-ivory-mockup.png             | Design reference                                                                       | Keep/archive           |
| ChatGPT Image Sep 20, 2026, 05_37_19 PM (4).png | 724×2171   | Dark orbit/system homepage concept; partial alpha                                                                                                         | publication-orbit-systems-mockup.png     | Design reference                                                                       | Keep/archive           |
| ChatGPT Image Sep 20, 2026, 05_37_19 PM (5).png | 734×2143   | Mixed light hero and dark editorial panels; partial alpha                                                                                                 | publication-hybrid-mockup.png            | Design reference                                                                       | Keep/archive           |
| ChatGPT Image Sep 20, 2026, 05_38_01 PM.png     | 1448×1086  | Navy/ivory original-style crest with company name and a right-hand “Blogs · Knowledge Hub” extension; genuine transparency                                | knowledge-hub-horizontal-logo.png        | Primary desktop header and footer; trim empty margins only                             | Keep/production master |
| ChatGPT Image Sep 20, 2026, 05_38_21 PM (1).png | 2172×724   | Modern orbit/network mark and ivory/gold company wordmark with publication descriptor; genuine transparency, best on dark                                 | knowledge-hub-orbit-lockup.png           | Alternative technical lockup, retained rather than repeated in the interface           | Keep/archive           |
| ChatGPT Image Sep 20, 2026, 05_38_22 PM (2).png | 1254×1254  | Round navy/gold book-and-orbit emblem; company name and “Knowledge Hub”; genuine transparency                                                             | knowledge-hub-emblem.png                 | Mobile header/drawer and About hero                                                    | Keep/production master |
| ChatGPT Image Sep 20, 2026, 05_38_22 PM (3).png | 1672×941   | Opaque navy intelligence-map banner: company name, publication label, “Understand intelligence. Build what’s next.”, small promotional copy and baked CTA | understand-intelligence-banner.png       | About supporting artwork; contained 1200×630 social adaptation                         | Keep/production master |
| ChatGPT Image Sep 20, 2026, 05_38_22 PM (4).png | 2172×724   | Opaque navy “Blogs Knowledge Hub” banner, network/subject diagram, embedded promotional text and CTA                                                      | blogs-knowledge-hub-banner.png           | Homepage Knowledge Hub feature, with real adjacent HTML links; visual-only mobile crop | Keep/production master |
| ChatGPT Image Sep 20, 2026, 05_38_35 PM.png     | 1448×1086  | Original-style navy/ivory stacked crest; full company name and publication descriptor; genuine transparency                                               | blogs-knowledge-hub-crest.png            | Alternative stacked identity, retained without competing with the primary lockup       | Keep/archive           |
| JPC -Logo.png                                   | 507×400    | Historical crest and legacy spaced wording; checkerboard is baked into RGB pixels, alpha is fully opaque                                                  | heritage-logo-checkerboard-reference.png | Provenance/reference only; never served as production identity                         | Keep/archive           |

The tall concepts are related design variants, not production banners or exact duplicates. Their tiny embedded interface copy and irregular partial transparency make them unsuitable as live page imagery. No attempt will be made to recreate live interfaces with screenshots.

## Transparency and sizing decisions

All four separate logo/emblem candidates have real transparent pixels and no visible baked checkerboard. The legacy image has an alpha channel but every alpha value is 255; its checkerboard is therefore actual image content. The two banners are opaque by design.

Removing only transparent outer margins yields approximately 1365×564 for the side-extension logo, 2015×411 for the orbit lockup, 948×934 for the emblem, and 1356×794 for the stacked crest. The side-extension logo's 2.42:1 artwork is too detailed for a 42px-high masthead. Use a bounded 300–320px desktop width with preserved aspect ratio; on mobile use a small emblem plus legible HTML company/publication text. Do not recolor or stretch the supplied identity.

The primary navy logo gets an ivory plate in either theme so its outline remains visible. The emblem is secondary and not repeated on article cards, topic cards or diagrams. The complex emblem is not suitable as a 16px favicon; retain the official arrow mark.

## Existing implementation audit

Astro static output uses `siteConfig.base = /blogs/`, with `url()` and `absoluteUrl()` helpers. `Brand.astro` currently supplies the header/footer wordmark; `BaseLayout.astro` owns shared metadata, mobile drawer, favicon, and organization JSON-LD. Pages retain real HTML titles and copy. Article-specific social PNGs are generated by `src/pages/social/[card].png.ts`; they must continue overriding the default.

There is no runtime image service. Public assets should be optimized ahead of time with the installed Sharp dependency, given explicit intrinsic dimensions, and referenced through a centralized brand asset module. Below-fold banners should use lazy loading and responsive WebP variants. Logos remain lossless PNG with alpha. Preserve all original masters in `public/brand/thejobpoolconsultants/knowledge-hub/archive/`; archive filenames are semantic and not referenced from page markup.

## Planned integration

1. Move and semantically rename every original, checking source/destination paths and matching hashes.
2. Generate transparent logo/emblem derivatives, responsive banner WebPs, visual-only mobile crops, and a padded social PNG that preserves the entire original aspect ratio.
3. Centralize paths, dimensions, descriptor and metadata in `src/data/brand-assets.ts`.
4. Update shared desktop/mobile/footer branding; retain semantic HTML company text without duplicating the visible image wordmark.
5. Keep the homepage HTML H1 and interactive map. Add the wide publication banner in a lower Knowledge Hub feature, avoiding a competing baked-in hero headline. Place the intelligence banner as supporting About artwork with a visual-only mobile crop.
6. Add a compact About emblem; keep topics, research, and articles focused on their content rather than repeating logos.
7. Update default OG/Twitter image and organization logo; retain article-specific social output and the official favicon.
8. Verify image integrity, responsive behavior, accessibility, static base paths, build, type check, lint and formatting; document every active image and archive mapping.

No commits, pushes, deployment, or original-asset deletion are part of this work. The emptied `logo/` folder will contain only a migration pointer, not active image copies.

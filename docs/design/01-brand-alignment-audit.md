# Brand alignment audit

Audit completed before implementation, 20 September 2026.

## Source of truth

The sibling `TheJobPoolConsultants-Website/JPC-APP` application renders `PublicHome` through `app/page.tsx`. Its active chrome imports `Brand` from `components/jpc-next/brand-logo.tsx`: a plain **TheJobPoolConsultants** wordmark with a small contextual descriptor. The older supplied raster/seal logo components and `public-home.css` are not the current header. Reuse the active wordmark treatment, not an archived lockup. Copy the existing `public/brand/jpc/jpc-favicon.svg` for the browser icon.

Styles were traced through `app/layout.tsx` import order, `design-tokens.css`, `theme.css`, `typography.css`, and `account-auth.css`. Fonts come from Inter, Space Grotesk, and italic Cormorant Garamond in `layout.tsx`. Later theme and typography overrides take precedence over primitives.

| Role                    | Main light                    | Main dark         | Existing blog           |
| ----------------------- | ----------------------------- | ----------------- | ----------------------- |
| Background              | #F8F7F2                       | #0B1020           | #F7F8F2 / #17231F       |
| Surface                 | #FEFDF9                       | #111A2E           | white / #202E28         |
| Primary text            | #182033                       | #F3F0E8           | #202D28 / #EEF2E7       |
| Secondary text          | #596579                       | #C3CAD7           | #59645D / #B3C0B3       |
| Subtle border           | #E1E3E8                       | #26334D           | #D5D9CF / #405047       |
| Editorial gold          | #826734                       | #D0B171           | green #345832 / #C1DDA2 |
| Core navy               | #18264F                       | midnight surfaces | forest panels           |
| Headings                | Space Grotesk 600             | same              | Inter 550               |
| Editorial emphasis      | Cormorant Garamond italic 500 | same              | green sans-serif        |
| Body                    | Inter                         | same              | Inter                   |
| Button radius / height  | 8px / 44px minimum            | same              | 4px / 44px              |
| Content / reading width | 1320px / 760px                | same              | 1320px / 760px          |

Main-site public return URL is documented in `docs/auth/google-authentication.md`: `https://the-job-pool-consultants-website.vercel.app`. Keep it separate from the blog's GitHub Pages origin and `/blogs/` base.

## Inconsistencies and intended mapping

The green identity is embedded in root tokens, featured panels, diagram nodes, and social images. The repeated three-variant article art is unrelated to each story. The hero map is static; topic pages share a plain heading layout; the research hub lacks paper metadata. Header and footer do not signal the connection to the platform. Learning cards describe stages without showing the sequence. Mobile navigation is an in-flow two-column list.

Shared foundation: exact main backgrounds, surfaces, body/display/editorial fonts, wordmark, spacing rhythm, button dimensions, border and motion conventions. Publication extensions: accessible cyan for connections and technical systems (#126C82 light / #79C9DE dark); gold for insight; teal reserved for evaluation; muted red for failure. Topic microaccents use semantic tokens and never carry meaning alone. Keep IBM Plex Mono only for coordinates, code, and small labels.

## Change and preserve

Change the shared style layer, header/footer, interactive intelligence map, architecture diagram hierarchy, semantic article artwork, topic hero maps, learning previews, reading sidebars and callouts, research presentation, search framing, and social artwork palette. Introduce reusable KeyIdea and MentalModel components. Replace green favicon with the main site's actual asset.

Preserve Astro static output, MDX content collection/schema, all existing routes, 15 topics, articles and drafts, series, learning paths, local Pagefind, RSS/sitemap/canonicals, code copying, theme persistence, base-path helpers, and GitHub Pages workflow. Do not invent articles, authors, metrics, progress, or subscriptions. Do not touch the sibling application.

## Implementation phases

1. Shared semantic tokens and local font assets; active wordmark and platform links.
2. Home hierarchy, interactive map, featured architecture, topic cards, story artwork, learning sequences and full-width editorial statement.
3. Topic concept progressions, article reading experience, research metadata, command-style search, responsive navigation.
4. Build/type/lint/link checks; desktop/mobile light/dark browser and accessibility review; fix observed defects and save the requested screenshots.
5. Document shared tokens, editorial rules, topic accents, diagram language, responsive behavior, accessibility findings and final visual audit.

Skill lookup: UI/UX Pro Max supported restrained typography, visible focus, contrast checks, reduced motion and responsive review. Its generic purple palette recommendation is superseded by the actual brand sources above.

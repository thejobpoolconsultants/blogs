# Shared design tokens

`src/styles/tokens.css` is the semantic source; `global.css` retains the publication's layout and `editorial.css` defines its component treatment. The main application is the reference, not a runtime dependency.

| Semantic role        | Light   | Dark    |
| -------------------- | ------- | ------- |
| background-primary   | #F8F7F2 | #0B1020 |
| background-secondary | #F1F0E9 | #0E1528 |
| surface-primary      | #FEFDF9 | #111A2E |
| surface-muted        | #EEF0F4 | #10182A |
| text-primary         | #182033 | #F3F0E8 |
| text-secondary       | #596579 | #C3CAD7 |
| text-muted           | #5F6C80 | #99A4B7 |
| border-subtle        | #E1E3E8 | #26334D |
| editorial-gold       | #826734 | #D0B171 |
| intelligence         | #126C82 | #79C9DE |
| evaluation           | #28796C | #80BCAF |
| failure              | #9B4047 | #D27A82 |
| focus-ring           | #30456F | #8EA2DA |

Shared values come from the main site's active cascade; cyan and evaluation shades are publication extensions. Functional borders use #C6CCD6 / #465674 rather than the subtler divider token. Primary buttons use main navy in light mode and warm ivory in dark mode, an editorial variant of the main site's pale blue button. Both use the same 8px corner and 44px minimum target family.

Typography: Inter Variable for UI/body, Space Grotesk Variable 600 for headings, Cormorant Garamond 500 italic for editorial emphasis. IBM Plex Mono 400 remains limited to code and knowledge coordinates. All fonts are served locally; only the required Cormorant weight/style is imported. Browser font selection downloads the relevant Unicode subsets.

The 1320px outer measure, 760px reading measure, 20px mobile gutter, 8/12/16px corners, and 220ms transitions create continuity without duplicating the platform's application layouts. The existing short aliases (`paper`, `ink`, `wash`, etc.) resolve to semantic tokens so older content components remain compatible.

Theme choice persists under the existing `publication-theme` key. With no saved preference the system theme is used. No server, account, or cross-origin storage is involved.

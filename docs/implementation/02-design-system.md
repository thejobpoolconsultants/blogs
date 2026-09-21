> Historical implementation record. The current visual system is documented in [the brand alignment audit](../design/01-brand-alignment-audit.md) and [shared tokens](../design/02-shared-design-tokens.md).

# Design system

Goal: a calm technical publication with varied editorial rhythm.
Implementation: semantic light/dark tokens, Inter headlines, monospace metadata, thin rules, restrained forest accents, original SVG concept diagrams.
Files: src/styles/global.css, docs/design/design-system.md, BaseLayout and components.
Decision: persisted theme with system fallback; no external font requests or animation libraries.
Checks: responsive browser matrix, theme persistence, reduced motion, automated contrast/accessibility checks, screenshots.
Remaining: optional additional teaching illustrations as new articles are written.

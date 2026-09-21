# Contributing

Use a focused branch such as `content/retrieval-evaluation` or `fix/search-accessibility`. Keep the publication static.

1. Copy a template into `src/content/articles/<topic>/` and complete all frontmatter. Use `status: draft` until reviewed.
2. Check taxonomy IDs, tags, series order, author IDs, related slugs, publication dates, sources, and prerequisites.
3. Verify claims using primary sources. Run code and record the environment. Explain limitations.
4. Attribute licensed visuals, add meaningful alt text/captions, and inspect both themes.
5. Run `npm run check`, `npm run lint`, `npm run format:check`, and `npm run build`.
6. Preview at `/blogs/`. For UI changes, run browser QA and inspect screenshots.
7. Open a PR describing the reader-facing change, evidence, tests, and remaining limitations.

Do not edit generated dist, Pagefind files, or dependency artifacts. Keep one npm lockfile. Do not add credentials or private documents. Publishing requires repository review and the configured Pages workflow.

Checklist: technically accurate; no invented facts; one main heading; readable at 320px; usable keyboard focus; valid sources; base-safe URLs; social card not clipped; draft excluded; next reading step useful.

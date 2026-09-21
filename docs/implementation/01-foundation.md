# Foundation

Goal: a static, content-first publication.
Implementation: Astro 7, strict TypeScript, MDX, Tailwind Vite integration, locally bundled fonts, npm lockfile. Runtime Node 24.
Files: astro.config.mjs, site.config.mjs, package.json, tsconfig.json.
Decision: native Astro output without React, backend, accounts, or database. URL helpers support the project prefix and later domain changes.
Checks: Astro validation, production build, generated-link verification.
Remaining: hosting administration after review.

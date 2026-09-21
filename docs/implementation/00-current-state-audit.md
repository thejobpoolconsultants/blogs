# Current-state audit

Audited 2026-09-20 before implementation.

- Actual repository: the nested `blogs` directory inside the supplied workspace folder.
- Remote: https://github.com/thejobpoolconsultants/blogs.git
- Branch: `main`; HEAD: `8d452249f3ceb99d229fc4c5fcc4c2c187caf5b7`.
- Initial working tree: clean.
- Complete tracked file tree: `README.md`, `LICENSE`. The only other directory is Git metadata (`.git`).
- README contains only a repository heading. LICENSE is MIT, copyright 2026. Preserve its terms; normalize the organization spelling.
- No application, dependencies, source, assets, framework, workflows, Pages configuration, or existing functionality to migrate.
- Available runtime: Node 24.16.0, npm 11.13.0, Python.

## Architecture and implementation tree

Use Astro static output, strict TypeScript, Markdown/MDX collections, Tailwind's Vite integration, and Pagefind search. All public URLs go through one site/base configuration. No backend, credentials, accounts, or subscriptions.

```text
.github/workflows/{ci,deploy-pages}.yml
docs/{implementation,content,design}/
public/{brand,diagrams,social}/
scripts/verify.mjs
src/content/articles/<topic>/*.mdx
src/{components,layouts,styles,utils,data}/
src/pages/{topics,articles,series,learn,tags,authors}/
src/pages/{index,about,search,ai-evolution,landscape,404}.astro
src/pages/{rss.xml,robots.txt}.ts
astro.config.mjs
site.config.mjs
package.json / package-lock.json / tsconfig.json
README.md / CONTRIBUTING.md / BRAND_VOICE.md / EDITORIAL_GUIDE.md
CONTENT_STRATEGY.md / SEO_GUIDE.md / templates/
```

Create the above architecture and replace README. Update only brand spelling in LICENSE. Build topic hubs for all 15 areas, a modest set of substantive starter articles, and explicit empty states for unpublished work. Do not manufacture research, credentials, counts, or completed lessons.

## Risks and verification

Project hosting requires `/blogs/` on navigation, assets, canonicals, feeds, and search. Verify generated links and browser requests at that prefix. Search requires a production build. New content must validate taxonomy references and exclude drafts. GitHub Pages requires an administrator to select GitHub Actions as its source after review and push. No commit, push, or deployment is authorized.

The Windows sandbox process launcher failed before executing commands; read-only audit commands succeeded through the approved escalation path. This does not affect project architecture.

# Content model

Goal: validated content with truthful publication state.
Implementation: collection schema validates metadata, topic/subtopic/tag/author/series references, dates, and series ordering. Shared publishedArticles rejects duplicate slugs/orders and broken related references.
Files: src/content.config.ts, src/utils/content.ts, src/data, src/content/articles.
Decision: exclude draft, archived, and future-dated content from all public routes, feeds, and social cards. Nine sourced starter articles; no fake backlog articles.
Checks: schema validation, production output inspection, draft-exclusion regression.
Remaining: editorial expansion and real individual author metadata.

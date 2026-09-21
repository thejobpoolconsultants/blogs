# Search and discovery

Goal: useful search without a server.
Implementation: Pagefind builds a local index for articles and topic summaries. A small accessible form supports query URLs, topic/type filters, results, pagination, failure states, and no-JavaScript browse links.
Files: src/pages/search.astro, public/search.js, package build script; tags, series, learn, landscape, and evolution routes.
Decision: only ten search results loaded per batch; stale searches cannot overwrite newer results. Index excerpts are rendered as text.
Checks: actual production search, filters, empty results, result URLs under /blogs/, keyboard form.
Remaining: optional typo suggestions and richer query analytics only if privacy requirements are agreed.

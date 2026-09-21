# SEO and discovery

Site identity and base path live in `site.config.mjs`. Use `url()` for local paths and `absoluteUrl()` for canonical/public URLs.

BaseLayout emits title, description, canonical, Open Graph, X card, RSS discovery, Organization, and WebSite data. Article routes add BlogPosting and BreadcrumbList data. Do not invent ratings, reviews, or personal credentials.

Astro sitemap includes static public pages; search and the error page are excluded. RSS includes only published, nonfuture articles. Robots references the base-prefixed sitemap. On project Pages, a robots file below /blogs/ cannot govern the entire github.io origin; page-level robots metadata remains applicable. A custom-domain deployment places robots.txt at the origin root.

Social cards are generated PNGs at 1200 × 630, one per published article plus a default. Review them after headline changes.

Changing domains: edit origin and base once, configure DNS and Pages, and add public/CNAME only for the real domain. Rebuild and rerun link/search tests. Do not create redirects to an unconfigured host.

Use human-first titles, accurate summaries, and actual source dates. Search indexes article bodies and topic summaries; content status filtering is shared across routes, feeds, and cards.

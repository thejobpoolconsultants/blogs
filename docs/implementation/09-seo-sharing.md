# SEO and sharing

Goal: correct public URLs and previews.
Implementation: per-page metadata, canonical, Open Graph/X, Organization/WebSite, article and breadcrumb structured data; sitemap, RSS, robots; generated 1200×630 PNGs; clipboard, LinkedIn, X, mailto.
Files: BaseLayout, article route, social endpoint, RSS/robots endpoints, SEO_GUIDE.
Decision: single source for origin/base. No fake credentials or ratings.
Checks: metadata/JSON parsing, image existence, feed URLs, social image visual inspection.
Remaining: real-host crawler/preview verification after deployment.

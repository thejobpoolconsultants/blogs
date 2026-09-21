# Source images migrated

All 12 original PNGs have semantic filenames under `public/brand/thejobpoolconsultants/knowledge-hub/archive/`. Optimized active assets live alongside that archive in `logos/`, `emblems/`, `banners/`, and `social/`.

See [the complete original-name mapping](../docs/design/09-blog-brand-assets-audit.md) and [production usage](../docs/design/10-brand-asset-usage.md). `asset-manifest.json` records original hashes and production dimensions. Run `node scripts/prepare-brand-assets.mjs` to regenerate optimized derivatives from the archived originals, then format the generated TypeScript file.

This folder is a migration pointer, not a production image source.

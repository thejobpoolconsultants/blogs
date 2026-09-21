# GitHub Pages

Goal: reproducible deployment to https://thejobpoolconsultants.github.io/blogs/.
Implementation: official Pages artifact/deploy job pattern, Node 24, npm ci, validation before upload, minimal per-job permissions, concurrency, main push and manual triggers. Separate PR CI.
Files: .github/workflows/deploy-pages.yml, ci.yml, site.config.mjs.
Decision: explicit npm ci steps preserve lockfile reproducibility. The official Astro composite action was inspected, but its npm install behavior is less strict than the requested lockfile-only install.
References: https://docs.astro.build/en/guides/deploy/github/ and https://github.com/withastro/action/blob/v6/action.yml.
Checks: local build and project-prefix browser/asset/link checks. GitHub workflow execution requires a pushed commit.
Administrator: select Settings → Pages → Source → GitHub Actions. Review then commit/push manually. This task does not publish.
Custom domain: edit origin/base, add the actual CNAME, configure DNS, rebuild, and verify. See SEO_GUIDE.

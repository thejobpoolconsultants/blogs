# Article system

Goal: serious reading with an obvious next step.
Implementation: constrained reading column, TOC from Markdown headings, author/date/estimated reading time, sources, prerequisites/outcomes, tags, related content, ordered series previous/next, share controls, highlighted code with copy, scrollable tables.
Files: src/pages/articles/[slug].astro, components, content.
Decision: native Markdown semantics cover definitions, comparisons, citations, and code rather than creating unused wrapper components. MDX handles teaching diagrams.
Checks: snippet execution, clipboard tests, heading/anchor validation, article accessibility and mobile review.
Remaining: longer multipart series can use the existing order navigation.

# Navigation and taxonomy

Goal: broad coverage with an uncluttered entry point.
Implementation: all 15 topic/subtopic lists from the brief are centralized in topics.ts; desktop exposes eight primary subjects and All topics. Mobile uses a native details menu.
Files: src/data/topics.ts, src/layouts/BaseLayout.astro, src/pages/topics.
Decision: concepts link to library searches and explain that dedicated coverage may be planned.
Checks: generated link crawler and mobile keyboard test.
Remaining: add content before increasing navigational density.

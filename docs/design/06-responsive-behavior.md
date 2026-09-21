# Responsive behavior

The publication uses the existing outer content measure, with 48px desktop, 32px intermediate and 20px mobile gutters. Cards move from three columns to two and then one. The hero becomes a single reading sequence below 800px; at 375px the headline reads “Understand / intelligence. / Build / what’s next.” The intelligence map follows the text and actions.

The horizontal algorithms-to-agents journey becomes a vertical connected sequence on narrow screens. Topic illustrations follow topic copy on mobile. Learning previews show actual ordered stage names rather than completion status.

Articles use a left Contents column, a 760px text column and a compact right context rail when space permits. Below 1200px the context rail moves below the article. Below 800px Contents becomes a collapsed native disclosure; the article body stays at 17–18px and code/tables can scroll inside their own regions.

The mobile navigation is a right-hand drawer with an explicit close action, Escape support, focus containment, and an inert background. On wider viewports it closes automatically. Without JavaScript it remains an ordinary expandable navigation list that opens and closes natively. The existing theme choice works across navigation.

Search filters stack on narrow screens; input font sizes remain at least 16px. Touch actions meet a 44px minimum where used as primary controls. Long text, source links, concept lists and code are checked for viewport overflow.

Reproducible checks: `npm run test:browser`, `node scripts/redesign-qa.mjs`, and `node scripts/visual-review.mjs` against the preview on port 4321. Screenshot outputs are in ignored `artifacts/redesign/` to keep generated review artifacts out of the source tree.

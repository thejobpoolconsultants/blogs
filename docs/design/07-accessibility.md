# Accessibility verification

Verified in Microsoft Edge through Playwright against the built `/blogs/` preview on 20 September 2026. The in-app browser connection could not initialize because its runtime rejected the session sandbox metadata; the repository's installed browser test tooling provided the fallback.

## Results

- 14 desktop axe audits: homepage, Machine Learning, NLP, Generative AI, two article layouts and search in both light and dark themes; zero violations.
- 11 additional axe audits: open mobile drawer and mobile Agents, agent article, research hub, research topic, and populated search in both themes; zero violations.
- 64 route/viewport overflow checks across 320, 375, 430, 768, 1024, 1280, 1440 and 1920px passed. Ten additional mobile route/theme checks passed.
- Theme persistence, code copying, canonical link copying, full-text search, topic/type filtering, base-prefixed results, empty results and skip-to-content all passed.
- Map focus explanations and keyboard activation, search shortcut typing safety, mobile Contents, drawer focus containment, inert background and Escape return all passed.
- Reduced motion disables smooth scrolling and component transitions. Static articles and expandable mobile navigation remain usable without JavaScript.

## Implementation choices

Gold and cyan have separate light/dark text values. Decorative topic microaccents do not carry text meaning. Focus outlines use the main site's focus token with 3px thickness and offset. Native buttons, disclosures, anchors, labels, selects and search inputs are retained. Search status uses a polite live region; result excerpts are safely rendered. An icon-only mobile search link and theme control retain explicit accessible names.

The article's Contents links indicate the current section as headings enter the reading viewport. The content column is 760px at the checked 1440px viewport. On mobile the context rail follows the article, and code/tables scroll within the reading column. Decorative thumbnail artwork is hidden from assistive technology; meaningful architecture figures use text labels and captions.

Reports: `artifacts/browser-qa.json` and `artifacts/redesign/interaction-qa.json`. Automated audits and keyboard checks support the result; they are not a claim of complete assistive-technology certification. No physical-device or screen-reader session was performed.

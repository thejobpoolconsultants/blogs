# Editorial statements and quote language

## Existing language and retained lines

The audit found editorial language in the homepage hero, featured agent article, topic introductions, architecture/research/build sections, learning-path heading, context statement and footer. Article titles already carried three of the requested signature lines. Those titles remain unchanged in article metadata, feeds and social images.

| Retained line                                                       | Current placement                                                                  |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| The agent isn’t one model anymore.                                  | Existing article title and homepage feature; now also the Agentic AI topic heading |
| RAG gives a model evidence. Not certainty.                          | Existing article title; RAG tag insight                                            |
| You don’t need another list of links. You need an order.            | Homepage learning section; learning-path index heading                             |
| The context window is a capacity. The context is a design decision. | Fixed homepage One Big Idea; AI topic and Context Engineering tag insights         |
| Before generation, there was representation.                        | Existing article title; NLP topic heading                                          |

The primary hero heading, article titles, taxonomy, topic identifiers, navigation structure, diagrams and page layouts are retained. The removed `/rss/` page and its footer link remain absent.

## Replaced and introduced copy

| Placement                      | Previous language                                                                    | Current language                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Homepage hero support          | Explore the ideas, systems and engineering patterns shaping artificial intelligence… | The future of AI won’t be defined by one model. It will be defined by how the pieces work together.             |
| Featured agent support         | Models propose. Tools execute. State remembers…                                      | The model proposes. The system decides what happens next.                                                       |
| Architecture introduction      | Some ideas become much easier when you can see how the pieces connect.               | The model is one component. Reliability lives in everything around it.                                          |
| Research section heading       | Research without the wall of equations.                                              | Read the paper for the result. Understand the idea for what comes next.                                         |
| Build section heading          | Turn understanding into something real.                                              | Theory explains what should happen. Building shows you what actually does.                                      |
| Learning-path index            | You don’t need to learn everything. You need a direction.                            | You don’t need another list of links. You need an order.                                                        |
| Learning support               | Existing practical instructions                                                      | Adds: The hardest part of learning AI isn’t finding content. It’s knowing what comes next. Instructions remain. |
| Evolution introduction         | Each layer adds possibilities…                                                       | First we taught machines to predict. Then to generate. Now we’re teaching systems to act.                       |
| About editorial-values heading | From first principles to production systems.                                         | Ask better questions. Build better systems. Understand what comes next.                                         |
| Footer                         | Built for curiosity. Grounded in evidence.                                           | Curiosity starts the question. Evidence earns the answer.                                                       |

The old ML, Deep Learning and Generative AI topic headline variations are replaced by their topic names, followed by a dedicated insight. NLP and Agentic AI use the retained signature headings above. This gives the topic title and insight separate jobs without stacking multiple competing slogans.

## Topic and concept coverage

| Topic or concept | Selected statement                                                                   |
| ---------------- | ------------------------------------------------------------------------------------ |
| Machine Learning | A model learns the pattern. Reality decides whether it generalizes.                  |
| Deep Learning    | The breakthrough wasn’t more rules. It was learning the representation.              |
| NLP              | Words are what we write. Meaning is what the model must discover.                    |
| Embeddings       | Language looks like text to us. To a machine, it begins as geometry.                 |
| Generative AI    | Generation made AI impressive. Grounding makes it useful.                            |
| Agentic AI       | The model proposes. The system decides what happens next.                            |
| Computer Vision  | Pixels are the input. Understanding is the objective.                                |
| AI Engineering   | The intelligence may come from the model. The experience comes from the engineering. |
| MLOps / LLMOps   | Deployment is not the finish line. It is where the real experiment begins.           |
| Evaluation       | A demo shows what worked once. Evaluation shows whether it works again.              |
| RAG transition   | Retrieval brings the evidence. Generation still has to use it well.                  |

Architecture, Research, Build and Context Engineering reuse the selections above in their relevant topic, hub or tag pages. Twelve topic pages have an insight. Existing descriptive introductions remain. Reinforcement Learning, Data Science and Careers retain their existing copy; no unrelated statement is forced into them. Evaluation, Embeddings, RAG and Context Engineering are existing tags, not new taxonomy entries.

## Central data and components

- `src/data/editorial-quotes.ts`: typed statements, the complete requested twelve-item One Big Idea library, explicit homepage selections, and topic/tag mappings. Stored alternatives are available for future editorial use; they are not all displayed.
- `src/components/EditorialStatement.astro`: a feature variant that reuses the existing homepage quote band, plus an inline variant for section headings and supporting copy. It supports a gold label, one emphasized line, semantic heading/paragraph selection and an optional link.
- `src/components/TopicInsight.astro`: a smaller statement with a topic/insight label, thin gold rule and optional explanation. It adds no card, decorative quotation marks, attribution or icon.

`homepageEditorial.bigIdea` is explicitly `contextDesign`. Changing it is an editorial decision in source. There is no timer, random selection, hydration or carousel. If the statement changes, review its companion `bigIdeaPath` at the same time. Both components render complete HTML without JavaScript.

## Article placement and technical review

Only two article bodies gain a statement, each at a relevant transition:

1. `how-rag-actually-works.mdx`: retrieval statement before the concrete failure example.
2. `production-rag-architecture.mdx`: evaluation statement before observability and evaluation.

There is no global article-template injection. The other articles retain their existing prose and callouts. For future long articles, use approximately one to three statements only when they clarify an argument.

The Machine Learning selection uses the supplied shorter alternative instead of claiming generalization proves a pattern was worth finding. The NLP insight explains that meaning is represented through learned relationships and assessed on specific tasks. The Generative AI insight notes that grounding requires evaluation and retrieved evidence can still be misused. The evolution text retains the explanation that fields overlap and coexist; it is a conceptual progression, not a strict historical claim.

The twelve stored campaign statements require contextual editorial review before publication. For example, the next-token line belongs with autoregressive language models, and intent/understanding language should not imply human-like cognition. These are publication statements supplied for TheJobPoolConsultants, with no famous-person or research attribution. Existing genuine paper authors and sources are unchanged.

## Verification

- Production build: passed; 70 HTML pages and 4,440 local links/assets verified. Search still indexes 24 pages; feeds, metadata, draft exclusion and `/blogs/` routing pass.
- Astro typecheck: 61 files, zero errors, warnings or hints.
- ESLint and Prettier: passed.
- `node scripts/editorial-qa.mjs`: 115 responsive checks across 28 routes at 375px and 1440px in both themes, plus homepage checks at 320px, 768px and 1024px.
- Twenty-four axe audits: zero violations across homepage, NLP, Generative AI, learning paths, About and the RAG article in both primary viewport sizes and themes.
- Confirmed one H1 per page, no horizontal overflow, no clipped statement text, no fake quotation attribution markup, three protected article titles unchanged, fixed homepage statement after reload and readable statements with JavaScript disabled.
- Visual review: desktop dark homepage, desktop light NLP page, mobile light hero and One Big Idea, mobile dark Generative AI, mobile learning paths and About signature. Typography wraps naturally and uses the existing theme tokens; inline statements inherit color inside the navy agent panel.

Screenshots and results are in `artifacts/editorial/`; build output is in `artifacts/editorial-build.log`. Existing nonblocking Astro/MDX module-directive warnings remain. Automated audits and screenshot inspection do not replace physical-device or screen-reader testing.

Files affected include the central data and two components; homepage; topic, hub and tag templates; learning index; AI evolution; About; shared footer; two articles; verification script; and editorial documentation. Existing working-tree changes are preserved. No commit, push or deployment was performed.

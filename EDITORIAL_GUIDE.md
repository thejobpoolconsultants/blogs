# Editorial guide

**Never make the explanation stronger than the evidence.**

TheJobPoolConsultants explains research. It does not claim to have performed the research unless that work was actually conducted and documented.

## Before writing

Choose a topic, canonical subtopics, audience, prerequisite, and one learning outcome. Check the centralized taxonomy instead of inventing duplicate labels. Draft first.

## Structure and terminology

Headlines should raise an honest question. Open with a concrete problem, define unfamiliar terms, explain the mechanism, show an example, and state trade-offs. End with a connected article or learning path. Use the exact TheJobPoolConsultants name. Distinguish ML, deep learning, NLP, and generative AI rather than treating them as synonyms.

For research: question, core idea, previous limitation, method, evidence, what results do not establish, engineering interpretation, open questions, primary sources. Preserve the paper's publication date separately from the article's date.

For architecture: problem, requirements, components, request/data flow, security, observability, evaluation, scaling, failures, alternatives, and a production checklist. Label proposed designs.

For tutorials: prerequisites, exact environment, runnable code, expected behavior, checks, limitations, and next experiment. Execute every runnable snippet. Label pseudocode explicitly.

## Evidence and maintenance

Validate technical claims against original papers or official documentation. Cite near the claim and in frontmatter sources. Do not manufacture benchmarks or author credentials. Preserve publishedAt; change updatedAt for substantive revisions and explain changed conclusions in the body.

AI-assisted drafts require the same technical and editorial review as any submission. Never publish generated references without checking them. Do not present unrun experiments as results.

## Visual and accessibility review

Use meaningful diagrams, descriptive captions, source attribution, and readable labels in both themes. Keep crucial meaning in text. Images require alt text; purely decorative images use empty alt. Test code/table overflow and keyboard controls.

See templates for starting structures. They are editorial prompts, not finished articles.

## Research Papers & Insights

Separate what the authors report, what the evidence supports, its material limits, TheJobPoolConsultants interpretation, invented teaching examples, and proposed reader experiments. A benchmark is not universal superiority; correlation is not causation. Use “reported,” “under these conditions,” “may” or “suggests” where the evidence warrants it, while stating established mechanisms directly.

Bad: “The Transformer proved attention is superior to recurrence.”

Better: “The authors report strong results in their translation comparisons and analyze the parallelization advantages of self-attention.” Link the exact paper section and keep the conclusion within the evaluated setting.

Bad: “Attention understands relationships between words.”

Better: “Attention allows token representations to incorporate information from other positions using learned, input-dependent weights.”

Use attribution such as “The authors report,” “In the reported experiments,” or “One engineering interpretation is.” Do not write “our research found,” “our experiments show,” “we discovered,” “we proved,” or “we validated” about work this publication did not perform. Checking a source or running a tutorial snippet is not independent validation of a paper.

### Types, sources and automatic disclosures

Public formats include Research Papers & Insights, Paper → Product, Paper Explained, Research Map and Engineering Interpretation. Machine IDs are centralized in `src/data/research-editorial.ts`. Original Research, Experiment Results, Reproduction Study and Independent Validation are reserved for future documented work and are not currently accepted article types. Adding them requires an explicit schema/editorial change, methods, data/code or access limitations, environment, comparisons, results and reproducibility evidence. A type name or checkbox cannot substantiate such a claim.

Every source requires `role: primary | supporting`, `kind: paper | docs | textbook | repository`, and a specific `supports` description. Primary means original research discussed in the article. Documentation and textbooks can support background without being the primary research. Put links near claims as well as in frontmatter. A source list does not support every inference in an article.

The shared article layout automatically inserts `ResearchEditorialNote` near sources for research/paper types, the research topic, or any cited paper. Published paper-based articles require at least one primary paper. Do not duplicate the automatic disclosure in MDX. Preserve primary publication dates separately from article dates.

### Statement components

Use `ResearchStatement.astro` only where classification helps the reader. Its six semantic variants provide the requested labels:

| Kind           | Visible label                     | Authoring requirement                                                                                  |
| -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| source         | Source-backed summary             | Required source URL and sourceLabel; sourceKind defaults to paper, use docs for official documentation |
| interpretation | Engineering interpretation        | Identify the application assumptions and distinguish inference from findings                           |
| example        | Illustrative example              | Say when scenarios, data or diagrams are invented                                                      |
| experiment     | Proposed experiment               | State controls and observations to record; the component explicitly says no results are claimed        |
| perspective    | TheJobPoolConsultants perspective | Clearly editorial analysis, not a researcher attribution                                               |
| limitation     | Limit of the evidence             | Explain what the cited evaluation does not establish                                                   |

Example MDX:

```mdx
import ResearchStatement from '../../../components/ResearchStatement.astro';

<ResearchStatement
  kind="source"
  source="https://arxiv.org/abs/1706.03762"
  sourceLabel="Vaswani et al., section 6"
>
  <p>
    Summarize the authors’ reported evaluation with its task and comparison
    limits.
  </p>
</ResearchStatement>

<ResearchStatement kind="experiment">
  <p>Describe a controlled reader exercise. Do not invent its outcome.</p>
</ResearchStatement>
```

Keep Markdown headings outside the component so the table of contents includes them. Use paragraphs and restrained labels; do not wrap every sentence in a callout. Copy the research template into an `.mdx` article when using components.

### Research quality gate

- Link original sources and attribute authors and reported results.
- Separate reported findings, interpretations and invented examples.
- State material limitations and benchmark/population/compute scope.
- Distinguish causation from correlation and observations from proposed tests.
- Never describe unperformed experiments as completed results.
- Keep marketing copy within the evidence's meaning.
- Confirm that no wording implies original research or independent validation by TheJobPoolConsultants.
- Complete source roles, kinds and evidence scopes; check citation targets.
- Run the build, typecheck, lint and research browser checks.

`npm run build` includes the structural research gate. `npm run verify:research` reruns it on the existing build. Schema checks enforce source metadata and primary papers; the rendered-content gate checks disclosures, source links and high-risk phrases. These checks cannot establish whether a claim is scientifically correct. Human editorial review remains required.

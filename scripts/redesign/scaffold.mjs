import { readFile, writeFile, mkdir } from 'node:fs/promises';
const old = await readFile('src/components/ProgramsSection.astro', 'utf8');
const preserved = old.slice(old.indexOf('<section\n  class="guidance-section"'));
const section = `---
import { specialistPrograms } from '../data/programs';
import { discovery } from '../data/program-discovery';
import { url, siteConfig } from '../utils/urls';
import ProgramArtwork from './ProgramArtwork.astro';
---
<section id="programs" class="section programs-section" aria-labelledby="programs-title" data-pagefind-ignore>
  <div class="section-heading specialist-heading">
    <div><p class="eyebrow">Go further in your field</p><h2 id="programs-title">Nine specialist programs.</h2></div>
    <p class="muted">Explore a pathway. Build a project. Understand the system.</p>
  </div>
  <div class="program-grid" aria-labelledby="programs-title">
    {specialistPrograms.map((program) => {
      const info = discovery[program.icon];
      const detail = url('programs/' + program.id + '/');
      return <article class="program-card" id={program.id} aria-labelledby={program.id + '-title'}>
        <div class="program-card-top"><span class="meta">Program {program.number}</span></div>
        <h3 id={program.id + '-title'}>{program.title}</h3>
        <ProgramArtwork kind={program.icon} />
        <p class="program-sentence">{info.sentence}</p>
        <p class="program-concepts">{info.concepts}</p>
        <p class="program-project"><a href={detail + '#project'}>Project example</a> · {info.project}</p>
        <p class="entry-note muted">Prerequisites: request current requirements.</p>
        <div class="program-card-actions">
          <a class="button primary" href={detail} aria-label={'Explore Program — ' + program.title}>Explore Program <span aria-hidden="true">→</span></a>
          <a class="button" href={siteConfig.enquiryForm} target="_blank" rel="noopener noreferrer" aria-label={'Enquire — ' + program.title}>Enquire <span aria-hidden="true">↗</span></a>
        </div>
      </article>;
    })}
  </div>
  <p class="program-details-note muted">These project examples introduce each field. Confirm the current curriculum, prerequisites, fees and schedule with the team.</p>
</section>
`;
await writeFile('src/components/ProgramsSection.astro', section + preserved);
let home = await readFile('src/pages/index.astro', 'utf8');
home = home.replace("import RetrievalWorkstation from '../components/RetrievalWorkstation.astro';", "import '../styles/program-discovery.css';");
home = home.replace(/  <section class="hero career-hero">[\s\S]*?  <\/section>\n  <FeaturedTransitionProgram \/>/, `  <section class="discovery-hero">
    <p class="eyebrow">TheJobPoolConsultants · Blogs &amp; Knowledge Hub</p>
    <h1>Choose the work you want to build.</h1>
    <p class="lead">Explore AI applications, infrastructure and systems performance.</p>
    <div class="hero-actions"><a class="text-link" href="#programs">Explore specialist programs ↓</a><a class="text-link" href="#transition-program-title">Start with foundations ↓</a></div>
  </section>
  <FeaturedTransitionProgram />`);
home = home.replace('title="Your Next Career Starts with Understanding AI."', 'title="Choose the work you want to build."');
await writeFile('src/pages/index.astro', home);
await writeFile('src/components/FeaturedTransitionProgram.astro', `---
import { transitionProgram, programWebsite } from '../data/programs';
import { starterGuides } from '../data/program-discovery';
import { url, siteConfig } from '../utils/urls';
---
<section class="transition-feature" aria-labelledby="transition-program-title" data-pagefind-ignore>
  <article class="transition-program">
    <div>
      <p class="eyebrow">New to AI? Start here.</p>
      <h2 id="transition-program-title">{transitionProgram.title}</h2>
      <p class="transition-tagline">From Non-Tech to Tech — Your Guided Path into AI</p>
      <p>Start with a familiar problem, build your foundations and test a small project. This beginner pathway is separate from the nine specialist programs below.</p>
      <p class="program-audience"><strong>For:</strong> Beginners, career switchers and professionals exploring AI. The team can help identify a starting point from your background.</p>
      <div class="program-actions"><a class="button primary" href={programWebsite(transitionProgram.id)} target="_blank" rel="noopener noreferrer">Explore Program ↗</a><a class="text-link" href={siteConfig.enquiryForm} target="_blank" rel="noopener noreferrer">Get career guidance ↗</a></div>
    </div>
    <nav class="foundation-list" aria-label="Foundation article drafts">
      {starterGuides.map((guide, index) => <a href={url('guides/' + guide.id + '/')}><small>Start {index + 1} · Editorial preview</small>{guide.title}</a>)}
    </nav>
  </article>
</section>`);
const diagram = JSON.parse(await readFile('docs/design/document-assistant.workflow.json', 'utf8'));
diagram.nodes.forEach((node) => { node.width = 180; });
await writeFile('docs/design/document-assistant.workflow.json', JSON.stringify(diagram, null, 2) + '\n');
await mkdir('public/diagrams', { recursive: true });

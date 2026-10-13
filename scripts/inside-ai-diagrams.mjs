import { mkdir, writeFile } from 'node:fs/promises';
import { format, resolveConfig } from 'prettier';
import { insideAiLessons } from '../src/data/inside-ai-systems.ts';

// Candidate files are authored teaching designs, not a map of this site's code.
const positions = [
  [40, 120],
  [400, 120],
  [760, 120],
  [760, 340],
  [400, 340],
  [40, 340],
];
const stamp = '20261012-090000';
const diagramFormat = await resolveConfig(
  'docs/design/inside-ai-systems/day-1.architecture.json',
);
for (const [index, lesson] of insideAiLessons.entries()) {
  const day = index + 1;
  const directory = `.archify/architecture-inside-ai-day-${day}-${stamp}`;
  const components = lesson.nodes.map(([label, sublabel, type], i) => ({
    id: `step-${i + 1}`,
    type,
    label,
    sublabel,
    pos: day === 5 ? [positions[i][0] + 200, positions[i][1]] : positions[i],
    size: [180, 76],
  }));
  const connections = lesson.edges.map((label, i) => ({
    id: `flow-${i + 1}`,
    from: `step-${i + 1}`,
    to: `step-${i + 2}`,
    label,
    variant: i === 2 ? 'security' : 'emphasis',
  }));
  if (day === 6)
    connections.push({
      id: 'valid-cache-hit',
      from: 'step-3',
      to: 'step-5',
      label: 'hit',
      variant: 'dashed',
      fromSide: 'left',
      toSide: 'top',
      via: [
        [670, 158],
        [670, 260],
        [490, 260],
      ],
    });
  if (day === 5)
    connections.push({
      id: 'capacity-feedback',
      from: 'step-6',
      to: 'step-1',
      label: 'measured demand',
      variant: 'dashed',
      fromSide: 'left',
      toSide: 'left',
      via: [
        [80, 378],
        [80, 158],
      ],
    });
  const candidate = {
    schema_version: 1,
    diagram_type: 'architecture',
    meta: {
      title: `Day ${day}: ${lesson.title}`,
      output: `${directory}/day-${day}.html`,
      quality_profile: 'showcase',
      locale: 'en',
    },
    components,
    connections,
    cards: [
      { dot: 'cyan', title: 'The practical problem', items: [lesson.problem] },
      {
        dot: 'emerald',
        title: 'Conditions and side paths',
        items: [...lesson.notes],
      },
      {
        dot: 'rose',
        title: 'One lesson',
        items: [
          lesson.lesson,
          'Proposed teaching design; not a measured deployment or benchmark.',
        ],
      },
    ],
  };
  await mkdir(directory, { recursive: true });
  await mkdir('docs/design/inside-ai-systems', { recursive: true });
  await writeFile(
    `docs/design/inside-ai-systems/day-${day}.architecture.json`,
    await format(JSON.stringify(candidate), {
      ...diagramFormat,
      filepath: `docs/design/inside-ai-systems/day-${day}.architecture.json`,
    }),
  );
  await writeFile(
    `${directory}/candidate.json`,
    JSON.stringify(candidate, null, 2) + '\n',
  );
  console.log(`${directory}/candidate.json`);
}

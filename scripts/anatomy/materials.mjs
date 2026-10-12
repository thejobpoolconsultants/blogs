// Each material retains the kit's face shading; light and dark are authored separately.
export const materials = {
  blue: {
    light: ['#2563EB', '#1643A0', '#1D52C7', '#3974F0', '#81AEFF'],
    dark: ['#3776EF', '#15356F', '#204C9C', '#326BCD', '#85AEFF'],
  },
  teal: {
    light: ['#0D9488', '#075C56', '#0B756C', '#20A69A', '#73D1C5'],
    dark: ['#18A99C', '#064C48', '#096E65', '#159286', '#70D6C9'],
  },
  violet: {
    light: ['#7C3AED', '#49228B', '#632EBB', '#8D54EF', '#B895FF'],
    dark: ['#975DF0', '#482572', '#653798', '#8651CC', '#C29AFF'],
  },
  amber: {
    light: ['#D97706', '#864906', '#B26106', '#E48B1F', '#FFC56A'],
    dark: ['#E9942B', '#6D420C', '#98601C', '#C78326', '#FFD18A'],
  },
  coral: {
    light: ['#E76F51', '#99412D', '#BE543B', '#EF856B', '#FFB39E'],
    dark: ['#EC8066', '#75382B', '#A34F3C', '#CD6953', '#FFB59F'],
  },
  green: {
    light: ['#16A34A', '#0A622A', '#107E39', '#2BB65B', '#83DD9E'],
    dark: ['#36BB65', '#15582D', '#208346', '#2EAB5B', '#91E1AB'],
  },
  navy: {
    light: ['#152747', '#091426', '#10203A', '#223D62', '#557399'],
    dark: ['#344F76', '#12213A', '#1B3250', '#2D486C', '#7292BC'],
  },
};
export const materialCss = Object.entries(materials)
  .flatMap(([name, themes]) =>
    Object.entries(themes).map(
      ([theme, [face, ...shades]]) =>
        `.iso[data-theme="${theme}"] .material-${name},:root[data-theme="${theme}"] .iso .material-${name}{--anatomy-paper:${face};--anatomy-top:${shades[3]};--anatomy-shade-0:${shades[0]};--anatomy-shade-1:${shades[1]};--anatomy-shade-2:${shades[2]};--anatomy-shade-3:${shades[3]};--anatomy-hi:${shades[0]};--anatomy-mid:${shades[0]};--anatomy-lo:${shades[0]};--anatomy-faint:${shades[1]};--anatomy-dot:${shades[0]};--anatomy-lit:${shades[3]};--anatomy-lit-top:${shades[3]};--anatomy-lit-shade:${shades[2]}}`,
    ),
  )
  .join('\n');
export function materialFor(kind, name) {
  if (
    name.startsWith('stand.') ||
    name.includes('support') ||
    name.includes('post') ||
    name.includes('upright')
  )
    return '';
  const rules = {
    retrieval: [
      [/document/, 'teal'],
      [/selector/, 'amber'],
      [/terminal/, 'blue'],
    ],
    transition: [
      [/learning.document|learning.tray|learning.connector/, 'teal'],
      [/learning.code/, 'amber'],
      [/terminal|learning.project/, 'blue'],
    ],
    agents: [
      [/knowledge|connection.documents/, 'teal'],
      [/tool|connection.tools/, 'blue'],
      [/assistant/, 'violet'],
    ],
    infrastructure: [
      [/compute/, 'blue'],
      [/network|storage/, 'teal'],
      [/cooling/, 'amber'],
    ],
    performance: [
      [/request|output/, 'blue'],
      [/compute|processing/, 'violet'],
      [/batch/, 'amber'],
    ],
    robotics: [
      [/camera/, 'teal'],
      [/robot/, 'coral'],
      [/object-1|bin-1/, 'amber'],
      [/object|bin/, 'blue'],
    ],
    research: [
      [/agent/, 'violet'],
      [/goal|route/, 'teal'],
      [/reward/, 'amber'],
    ],
    cloud: [
      [/service|router/, 'blue'],
      [/access/, 'green'],
    ],
    hardware: [
      [/compute/, 'violet'],
      [/memory/, 'teal'],
      [/operand|result|bus/, 'amber'],
    ],
    leadership: [
      [/console/, 'navy'],
      [/connection|capacity/, 'teal'],
      [/constraint/, 'amber'],
    ],
    deployment: [
      [/records/, 'teal'],
      [/prototype|connector/, 'blue'],
      [/acceptance/, 'green'],
    ],
  };
  return (rules[kind] || []).find(([pattern]) => pattern.test(name))?.[1] || '';
}

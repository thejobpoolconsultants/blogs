import sharp from 'sharp';
import { mkdir, readFile, writeFile, rename, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const relative = 'brand/thejobpoolconsultants/knowledge-hub';
const destination = path.join(root, 'public', relative);
const prefix = 'thejobpoolconsultants-';
const mapping = [
  [
    'ChatGPT Image Sep 20, 2026, 05_37_18 PM (1).png',
    'publication-dark-editorial-mockup',
  ],
  [
    'ChatGPT Image Sep 20, 2026, 05_37_19 PM (2).png',
    'publication-modular-navy-mockup',
  ],
  [
    'ChatGPT Image Sep 20, 2026, 05_37_19 PM (3).png',
    'publication-ivory-mockup',
  ],
  [
    'ChatGPT Image Sep 20, 2026, 05_37_19 PM (4).png',
    'publication-orbit-systems-mockup',
  ],
  [
    'ChatGPT Image Sep 20, 2026, 05_37_19 PM (5).png',
    'publication-hybrid-mockup',
  ],
  [
    'ChatGPT Image Sep 20, 2026, 05_38_01 PM.png',
    'knowledge-hub-horizontal-logo',
  ],
  [
    'ChatGPT Image Sep 20, 2026, 05_38_21 PM (1).png',
    'knowledge-hub-orbit-lockup',
  ],
  ['ChatGPT Image Sep 20, 2026, 05_38_22 PM (2).png', 'knowledge-hub-emblem'],
  [
    'ChatGPT Image Sep 20, 2026, 05_38_22 PM (3).png',
    'understand-intelligence-banner',
  ],
  [
    'ChatGPT Image Sep 20, 2026, 05_38_22 PM (4).png',
    'blogs-knowledge-hub-banner',
  ],
  ['ChatGPT Image Sep 20, 2026, 05_38_35 PM.png', 'blogs-knowledge-hub-crest'],
  ['JPC -Logo.png', 'heritage-logo-checkerboard-reference'],
];
const sha = (buffer) => createHash('sha256').update(buffer).digest('hex');
const exists = async (file) =>
  access(file).then(
    () => true,
    () => false,
  );
function insideRoot(file) {
  const resolved = path.resolve(file);
  if (!resolved.startsWith(root + path.sep))
    throw new Error('Path outside blog workspace: ' + resolved);
  return resolved;
}
for (const folder of ['logos', 'emblems', 'banners', 'social', 'archive'])
  await mkdir(path.join(destination, folder), { recursive: true });
const originals = [];
for (const [oldName, name] of mapping) {
  const source = insideRoot(path.join(root, 'logo', oldName));
  const target = insideRoot(
    path.join(destination, 'archive', prefix + name + '.png'),
  );
  if (await exists(source)) {
    if (await exists(target))
      throw new Error('Refusing to overwrite existing archive: ' + target);
    const originalHash = sha(await readFile(source));
    await rename(source, target);
    if (sha(await readFile(target)) !== originalHash)
      throw new Error('Migration hash mismatch: ' + oldName);
  }
  const buffer = await readFile(target);
  const metadata = await sharp(buffer).metadata();
  originals.push({
    oldName,
    file: 'archive/' + prefix + name + '.png',
    width: metadata.width,
    height: metadata.height,
    bytes: buffer.length,
    sha256: sha(buffer),
  });
}
const source = (name) =>
  path.join(destination, 'archive', prefix + name + '.png');
const production = [];
async function save(pipeline, folder, name, extension) {
  const file = `${folder}/${prefix}${name}.${extension}`;
  const info = await pipeline.toFile(path.join(destination, file));
  production.push({
    file,
    width: info.width,
    height: info.height,
    bytes: info.size,
  });
  return { src: relative + '/' + file, width: info.width, height: info.height };
}
const logo = await save(
  sharp(source('knowledge-hub-horizontal-logo'))
    .trim({ threshold: 10 })
    .resize({ width: 768 })
    .png({ compressionLevel: 9 }),
  'logos',
  'knowledge-hub-light',
  'png',
);
const logoSmall = await save(
  sharp(source('knowledge-hub-horizontal-logo'))
    .trim({ threshold: 10 })
    .resize({ width: 384 })
    .png({ compressionLevel: 9 }),
  'logos',
  'knowledge-hub-light-384',
  'png',
);
// The dark master is a dedicated transparent ivory rendering, never an inverted
// light PNG. Keep its alpha and proportions when making production sizes.
const darkMaster = path.join(
  destination,
  'masters',
  prefix + 'knowledge-hub-dark-master.png',
);
const darkLogo = await save(
  sharp(darkMaster)
    .trim({ threshold: 10 })
    .resize({
      width: 768,
      height: 317,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 }),
  'logos',
  'knowledge-hub-dark',
  'png',
);
const darkLogoSmall = await save(
  sharp(darkMaster)
    .trim({ threshold: 10 })
    .resize({
      width: 384,
      height: 159,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 }),
  'logos',
  'knowledge-hub-dark-384',
  'png',
);
const emblem = await save(
  sharp(source('knowledge-hub-emblem'))
    .trim({ threshold: 10 })
    .resize({ width: 320 })
    .png({ compressionLevel: 9 }),
  'emblems',
  'knowledge-hub-emblem',
  'png',
);
const emblemSmall = await save(
  sharp(source('knowledge-hub-emblem'))
    .trim({ threshold: 10 })
    .resize({ width: 96 })
    .png({ compressionLevel: 9 }),
  'emblems',
  'knowledge-hub-emblem-96',
  'png',
);
async function banner(name, crop) {
  const large = await save(
    sharp(source(name))
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 88 }),
    'banners',
    name,
    'webp',
  );
  const medium = await save(
    sharp(source(name)).resize({ width: 960 }).webp({ quality: 88 }),
    'banners',
    name + '-960',
    'webp',
  );
  const mobile = await save(
    sharp(source(name))
      .extract(crop)
      .resize({ width: 768 })
      .webp({ quality: 88 }),
    'banners',
    name + '-visual-mobile',
    'webp',
  );
  return { ...large, medium, mobile };
}
const intelligenceBanner = await banner('understand-intelligence-banner', {
  left: 835,
  top: 95,
  width: 770,
  height: 675,
});
const publicationBanner = await banner('blogs-knowledge-hub-banner', {
  left: 980,
  top: 110,
  width: 1120,
  height: 535,
});
const social = await save(
  sharp(source('understand-intelligence-banner'))
    .resize({ width: 1200, height: 630, fit: 'contain', background: '#0b1020' })
    .png({ compressionLevel: 9 }),
  'social',
  'knowledge-hub-social-card',
  'png',
);
const assets = {
  logo: { ...logo, small: logoSmall },
  darkLogo: { ...darkLogo, small: darkLogoSmall },
  emblem: { ...emblem, small: emblemSmall },
  intelligenceBanner,
  publicationBanner,
  social,
};
await writeFile(
  path.join(root, 'src/data/brand-assets.ts'),
  `// Generated by scripts/prepare-brand-assets.mjs. Paths are relative to the configured site base.\nexport const brand = {\n  name: 'TheJobPoolConsultants',\n  descriptor: 'Blogs · Knowledge Hub',\n  favicon: 'brand/mark.svg',\n  assets: ${JSON.stringify(assets, null, 2)}\n} as const;\n`,
);
await writeFile(
  path.join(destination, 'asset-manifest.json'),
  JSON.stringify({ originals, production }, null, 2) + '\n',
);
console.log(
  JSON.stringify(
    {
      originalFiles: originals.length,
      originalBytes: originals.reduce((sum, f) => sum + f.bytes, 0),
      production,
    },
    null,
    2,
  ),
);

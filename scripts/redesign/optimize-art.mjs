import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const [source, kind] = process.argv.slice(2);
if (
  !source ||
  !/^(agents|infrastructure|performance|robotics|research|cloud|hardware|leadership|deployment)$/.test(
    kind,
  )
)
  throw new Error('Use source PNG and verified program kind.');
await mkdir('public/illustrations/programs', { recursive: true });
await mkdir('artifacts/redesign/masters', { recursive: true });
await copyFile(source, path.join('artifacts/redesign/masters', kind + '.png'));
const receipts = [];
for (const width of [480, 960]) {
  for (const format of ['webp', 'avif']) {
    const target = path.join(
      'public/illustrations/programs',
      kind + '-' + width + '.' + format,
    );
    const info = await sharp(source)
      .resize(width, width, { fit: 'cover' })
      .toFormat(format, { quality: format === 'webp' ? 83 : 60 })
      .toFile(target);
    receipts.push({
      target,
      bytes: info.size,
      width: info.width,
      height: info.height,
    });
  }
}
await writeFile(
  'artifacts/redesign/masters/' + kind + '.json',
  JSON.stringify(receipts, null, 2) + '\n',
);
console.log(JSON.stringify(receipts));

import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import { siteConfig, absoluteUrl } from '../site.config.mjs';
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...(await walk(file)));
    else result.push(file);
  }
  return result;
}
const files = await walk('dist');
const pages = files.filter((f) => f.endsWith('.html'));
const errors = [];
let links = 0;
const parsed = new Map();
for (const file of pages)
  parsed.set(path.resolve(file), load(await readFile(file, 'utf8')));
for (const [file, $] of parsed) {
  const relative = path.relative(path.resolve('dist'), file);
  if ($('h1').length !== 1) errors.push(relative + ': expected one h1');
  if (!$('title').text().includes(siteConfig.name))
    errors.push(relative + ': missing brand title');
  if (!$('meta[name="description"]').attr('content'))
    errors.push(relative + ': missing description');
  if (!$('main#main').length) errors.push(relative + ': missing main target');
  if (!$('link[rel="canonical"]').attr('href')?.startsWith(absoluteUrl()))
    errors.push(relative + ': wrong canonical');
  if (
    /\b(?:JPC|TJPC|The JPC|The Job Pool Consultants|Job Pool Consultants|TheJobPoolConsultant)\b/.test(
      $('body').text(),
    )
  )
    errors.push(relative + ': brand variation');
  for (const node of $('script[type="application/ld+json"]').toArray()) {
    try {
      JSON.parse($(node).text());
    } catch {
      errors.push(relative + ': invalid JSON-LD');
    }
  }
  for (const node of $('img').toArray())
    if ($(node).attr('alt') === undefined)
      errors.push(relative + ': image without alt');
  for (const node of $('[href],[src]').toArray()) {
    for (const attr of ['href', 'src']) {
      const raw = $(node).attr(attr);
      if (!raw || /^(mailto:|tel:|data:)/.test(raw)) continue;
      const pagePath = relative
        .split(path.sep)
        .join('/')
        .replace(/index\.html$/, '');
      const target = new URL(raw, absoluteUrl(pagePath));
      if (target.origin !== siteConfig.origin) continue;
      if (!target.pathname.startsWith(siteConfig.base)) {
        errors.push(relative + ': outside base ' + raw);
        continue;
      }
      let local = decodeURIComponent(
        target.pathname.slice(siteConfig.base.length),
      );
      if (local.endsWith('/') || !path.extname(local)) local += 'index.html';
      const resolved = path.resolve('dist', local);
      try {
        await access(resolved);
        links++;
      } catch {
        errors.push(relative + ': broken ' + raw);
        continue;
      }
      if (target.hash && parsed.has(resolved)) {
        const dest = parsed.get(resolved);
        const id = decodeURIComponent(target.hash.slice(1));
        if (
          !dest('[id]')
            .toArray()
            .some((el) => dest(el).attr('id') === id)
        )
          errors.push(relative + ': missing anchor ' + raw);
      }
    }
  }
  const og = $('meta[property="og:image"]').attr('content');
  if (og) {
    try {
      await access(
        path.join('dist', new URL(og).pathname.slice(siteConfig.base.length)),
      );
    } catch {
      errors.push(relative + ': missing social image');
    }
  }
}
const feed = await readFile('dist/rss.xml', 'utf8');
assert(
  feed.includes(absoluteUrl('articles/')),
  'RSS must include article base path',
);
const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
assert(sitemap.includes(absoluteUrl()), 'Sitemap must include base path');
assert(!sitemap.includes('/search/'), 'Search should not be in sitemap');
await access('dist/pagefind/pagefind.js');
const contentFiles = await walk('src/content/articles');
for (const file of contentFiles) {
  const source = await readFile(file, 'utf8');
  const slug = source.match(/^slug: ['"]?([^'"\r\n]+)['"]?$/m)?.[1];
  if (/^status: ['"]?draft['"]?$/m.test(source) && slug) {
    assert(!feed.includes('/' + slug + '/'), 'Draft leaked into RSS');
    assert(!sitemap.includes('/' + slug + '/'), 'Draft leaked into sitemap');
    try {
      await access(path.join('dist', 'articles', slug, 'index.html'));
      errors.push('Draft route emitted: ' + slug);
    } catch {
      /* Draft routes must not exist. */
    }
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    'Verified ' +
      pages.length +
      ' HTML pages, ' +
      links +
      ' local links/assets, metadata, brand spelling, feeds, search index, and draft exclusion.',
  );

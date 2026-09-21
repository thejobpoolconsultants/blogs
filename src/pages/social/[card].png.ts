import sharp from 'sharp';
import { resolve } from 'node:path';
import satori from 'satori';
import { readFile } from 'node:fs/promises';
import { publishedArticles } from '../../utils/content';
import { topicById } from '../../data/topics';
import { brand } from '../../data/brand-assets';
import { siteConfig } from '../../utils/urls';
const font = await readFile(
  new URL(
    import.meta.resolve('@fontsource/inter/files/inter-latin-600-normal.woff'),
  ),
);
export async function getStaticPaths() {
  return [
    {
      params: { card: 'default' },
      props: {
        fallback: true,
        title: siteConfig.description.split(' A publication')[0],
        topic: 'AI / Engineering / Research',
      },
    },
    ...(await publishedArticles()).map((a) => ({
      params: { card: a.data.slug },
      props: { title: a.data.title, topic: topicById(a.data.topic).title },
    })),
  ];
}
export async function GET({
  props,
}: {
  props: { title: string; topic: string; fallback?: boolean };
}) {
  if (props.fallback) {
    const image = await readFile(resolve('public', brand.assets.social.src));
    return new Response(new Uint8Array(image), {
      headers: { 'Content-Type': 'image/png' },
    });
  }
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          background: '#0b1020',
          color: '#f3f0e8',
          padding: '55px 65px',
          fontFamily: 'Inter',
          display: 'flex',
          flexDirection: 'column',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: 29,
                borderLeft: '8px solid #d0b171',
                paddingLeft: 20,
              },
              children: siteConfig.name,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 20,
                color: '#d0b171',
                marginTop: 55,
                textTransform: 'uppercase',
                letterSpacing: 2,
              },
              children: props.topic,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 62,
                lineHeight: 1.12,
                letterSpacing: -2,
                marginTop: 25,
                flexGrow: 1,
              },
              children: props.title,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                borderTop: '1px solid #465674',
                paddingTop: 22,
                fontSize: 21,
                color: '#c3cad7',
              },
              children: "Understand intelligence. Build what's next.",
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Inter', data: font, weight: 600, style: 'normal' }],
    },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  });
}

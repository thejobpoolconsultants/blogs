import rss from '@astrojs/rss';
import { publishedArticles } from '../utils/content';
import { absoluteUrl, siteConfig } from '../utils/urls';
export async function GET() {
  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: absoluteUrl(),
    items: (await publishedArticles()).map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.publishedAt,
      link: absoluteUrl('articles/' + a.data.slug + '/'),
    })),
  });
}

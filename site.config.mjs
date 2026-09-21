export const siteConfig = {
  name: 'TheJobPoolConsultants',
  description:
    'Understand intelligence. Build what’s next. A publication about the ideas, systems, and engineering shaping artificial intelligence.',
  origin: 'https://thejobpoolconsultants.github.io',
  base: '/blogs/',
  mainSite: 'https://the-job-pool-consultants-website.vercel.app',
};
export function url(path = '') {
  return `${siteConfig.base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
export function absoluteUrl(path = '') {
  return new URL(url(path), siteConfig.origin).href;
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../config';

export async function GET(context: any) {
  const blogs = await getCollection('blogs');
  const tutorials = await getCollection('tutorials');
  const prompts = await getCollection('prompts');
  const architecture = await getCollection('architecture');
  const releases = await getCollection('releases');
  const interview = await getCollection('interview');

  const getSlug = (id: string) => id.replace(/\.[^/.]+$/, "");

  const allItems = [
    ...blogs.map(b => ({ ...b, categoryName: 'blogs' })),
    ...tutorials.map(t => ({ ...t, categoryName: 'tutorials' })),
    ...prompts.map(p => ({ ...p, categoryName: 'prompts' })),
    ...architecture.map(arc => ({ ...arc, categoryName: 'architecture' })),
    ...releases.map(r => ({ ...r, categoryName: 'releases' })),
    ...interview.map(i => ({ ...i, categoryName: 'interview' })),
  ].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site || SITE_URL,
    items: allItems.map((item) => ({
      title: item.data.title,
      pubDate: item.data.pubDate,
      description: item.data.description,
      link: `/${item.categoryName}/${getSlug(item.id)}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}

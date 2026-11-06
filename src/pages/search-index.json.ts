import { getCollection } from 'astro:content';

export async function GET() {
  const blogs = await getCollection('blogs');
  const tutorials = await getCollection('tutorials');
  const prompts = await getCollection('prompts');
  const architecture = await getCollection('architecture');
  const releases = await getCollection('releases');
  const interview = await getCollection('interview');

  // Strip Markdown characters from search body to reduce index size
  const cleanBody = (body: string) => {
    return body
      .replace(/[#*`_\[\]()\-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const getSlug = (id: string) => id.replace(/\.[^/.]+$/, "");

  const items = [
    ...blogs.map(b => ({
      title: b.data.title,
      description: b.data.description,
      category: 'Blogs',
      url: `/blogs/${getSlug(b.id)}`,
      tags: b.data.tags || [],
      content: cleanBody(b.body || ''),
    })),
    ...tutorials.map(t => ({
      title: t.data.title,
      description: t.data.description,
      category: 'Tutorials',
      url: `/tutorials/${getSlug(t.id)}`,
      tags: t.data.tags || [],
      content: cleanBody(t.body || ''),
    })),
    ...prompts.map(p => ({
      title: p.data.title,
      description: p.data.description,
      category: 'Prompts',
      url: `/prompts/${getSlug(p.id)}`,
      tags: p.data.tags || [],
      content: cleanBody(p.body || ''),
    })),
    ...architecture.map(arc => ({
      title: arc.data.title,
      description: arc.data.description,
      category: 'Architecture',
      url: `/architecture/${getSlug(arc.id)}`,
      tags: arc.data.tags || [],
      content: cleanBody(arc.body || ''),
    })),
    ...releases.map(r => ({
      title: r.data.title,
      description: r.data.description,
      category: 'Releases',
      url: `/releases/${getSlug(r.id)}`,
      tags: r.data.tags || [],
      content: cleanBody(r.body || ''),
    })),
    ...interview.map(i => ({
      title: i.data.title,
      description: i.data.description,
      category: 'Interview',
      url: `/interview/${getSlug(i.id)}`,
      tags: i.data.tags || [],
      content: cleanBody(i.body || ''),
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    },
  });
}

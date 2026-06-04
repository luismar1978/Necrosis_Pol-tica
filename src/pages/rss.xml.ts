import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'Necrosis Política',
    description: 'Análisis político desde la psicología, la neurociencia y los datos',
    site: 'https://necrosis-politica.pages.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt || post.data.subtitle || '',
      link: `/posts/${post.slug}`,
      pubDate: post.data.date,
    })),
  });
}

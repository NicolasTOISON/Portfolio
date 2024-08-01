import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const blog = await getCollection('blog')
  return rss({
    title: 'Blog de Nicolas TOISON',
    description: `Le blog d'un développeur front`,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>fr-FR</language>`,
  })
}

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://nicolastoison.com/',
  integrations: [mdx(), sitemap(), robotsTxt()],
  compressHTML: true,
})

// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  site: 'https://0x5p.dev',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [mdx(), sitemap()],
});
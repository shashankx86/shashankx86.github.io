// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';
import codeTheme from './shiki-github-dark.json';

export default defineConfig({
  site: 'https://0x5p.dev',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
    shikiConfig: {
      theme: codeTheme,
    },
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [mdx(), sitemap()],
});
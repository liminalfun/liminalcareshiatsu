// Config reference
// https://astro.build/config

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


import mdx from '@astrojs/mdx';



import favicons from 'astro-favicons';



export default defineConfig({
  site: 'https://liminalcare.ca',

  redirects: {
      // '/blog/[...slug]': '/writing/[...slug]'
    },

  integrations: [mdx(), sitemap(), favicons()]
});
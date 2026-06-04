import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://necrosis-politica.pages.dev',

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  output: "hybrid",
  adapter: cloudflare()
});
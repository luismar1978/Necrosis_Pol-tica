import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://necrosis-politica.pages.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});

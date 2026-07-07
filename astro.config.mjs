// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Produktions-URL der Kita. Vor dem Deploy ggf. anpassen.
export default defineConfig({
  site: 'https://www.marienkaefer-hamburg.de',
  integrations: [sitemap()],
  build: {
    // Saubere URLs ohne .html (z. B. /konzept statt /konzept.html)
    format: 'directory',
  },
});

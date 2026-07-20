// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Site-wide nav/footer changed on this date, so every page was genuinely
// modified in this deploy. Update when shipping content changes.
const LAST_DEPLOY_DATE = new Date('2026-07-20T00:00:00Z');

// https://astro.build/config
export default defineConfig({
  site: 'https://attirel.com',
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        item.lastmod = LAST_DEPLOY_DATE.toISOString();
        return item;
      },
    }),
  ],
  redirects: {
    '/size-guides/uniqlo/': '/size-guides/uniqlo-size-chart-fit-guide/',
    '/size-guides/levis/': '/size-guides/levis-size-chart-fit-guide/',
    '/size-guides/adidas/': '/size-guides/adidas-size-chart-fit-guide/',
    '/size-guides/asos/': '/size-guides/asos-size-chart-fit-guide/',
  },
});

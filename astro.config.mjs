// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://attirel.com',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/size-guides/uniqlo/': '/size-guides/uniqlo-size-chart-fit-guide/',
    '/size-guides/levis/': '/size-guides/levis-size-chart-fit-guide/',
    '/size-guides/adidas/': '/size-guides/adidas-size-chart-fit-guide/',
    '/size-guides/asos/': '/size-guides/asos-size-chart-fit-guide/',
  },
});

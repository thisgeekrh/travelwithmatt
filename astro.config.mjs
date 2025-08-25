// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://travelwithmatt.com',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],
  output: 'static',
});

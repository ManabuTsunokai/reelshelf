import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const noindexPaths = new Set([
  '/terms/',
  '/privacy/',
  '/commercial-disclosure/',
  '/en/terms/',
  '/en/privacy/',
  '/en/commercial-disclosure/',
]);

export default defineConfig({
  site: 'https://tamareel.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !noindexPaths.has(new URL(page).pathname),
    }),
  ],
});

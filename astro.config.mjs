import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
  integrations: [sitemap()],
});

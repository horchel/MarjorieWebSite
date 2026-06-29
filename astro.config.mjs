// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: vor dem Go-Live auf die echte Domain setzen, z. B. 'https://marjorie.de'
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      // Standardsprache (DE) ohne Präfix unter "/", Englisch unter "/en/"
      prefixDefaultLocale: false,
    },
  },
});

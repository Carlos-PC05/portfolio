import { defineConfig } from 'astro/config';

export default defineConfig({
  // Canonical/og/hreflang URLs are built from this. Defaults to the existing
  // Netlify site because this replaces it in place; set SITE_URL at build time
  // if it ships to a different domain.
  site: process.env.SITE_URL ?? 'https://carlospc13.netlify.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});

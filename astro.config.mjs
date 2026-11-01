// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // 若之後改用自訂網域，記得把這裡換成新網址
  site: 'https://bwinken.github.io',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-Hant-TW', en: 'en' },
      },
    }),
  ],
});

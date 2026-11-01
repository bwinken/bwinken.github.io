import type { Locale, LocaleContent } from './types';
import { zh } from './zh';
import { en } from './en';

export const content: Record<Locale, LocaleContent> = { zh, en };

export const locales: Record<Locale, { htmlLang: string; ogLocale: string; path: string }> = {
  zh: { htmlLang: 'zh-Hant-TW', ogLocale: 'zh_TW', path: '/' },
  en: { htmlLang: 'en', ogLocale: 'en_US', path: '/en/' },
};

export { shared } from './shared';
export type { Locale, LocaleContent } from './types';

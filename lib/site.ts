import { languages } from './languages';

export const origin = 'https://is-my-coffee-cold.vercel.app';
export const localeUrls = Object.fromEntries(Object.keys(languages).map(locale => [
  locale, locale === 'en' ? `${origin}/` : `${origin}/${locale}/`,
]));

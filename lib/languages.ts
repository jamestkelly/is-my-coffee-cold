import en from '../messages/en.json' with { type: 'json' };
import fr from '../messages/fr.json' with { type: 'json' };
import es from '../messages/es.json' with { type: 'json' };
import zhHans from '../messages/zh-Hans.json' with { type: 'json' };
import ja from '../messages/ja.json' with { type: 'json' };
import ko from '../messages/ko.json' with { type: 'json' };
import vi from '../messages/vi.json' with { type: 'json' };

export const languages = {
  en: 'English', fr: 'Français', es: 'Español', 'zh-Hans': '简体中文',
  ja: '日本語', ko: '한국어', vi: 'Tiếng Việt',
};
export type Locale = keyof typeof languages;
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && Object.hasOwn(languages, value);
}

export const copy = { en, fr, es, 'zh-Hans': zhHans, ja, ko, vi } satisfies Record<Locale, typeof en>;

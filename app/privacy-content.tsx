import { copy, type Locale } from '../lib/languages';
import { LanguagePicker } from './language-picker';

export default function Privacy({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main className="max-w-[68ch] space-y-4 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold">
    <a href={locale === 'en' ? '/' : `/${locale}/`}>← {t.back}</a>
    <header className="flex flex-wrap items-center justify-between gap-4">
      <h1>{t.privacy}</h1><LanguagePicker locale={locale} />
    </header>
    <h2>{t.readingsHeading}</h2><p>{t.readingsPrivacy}</p>
    <h2>{t.weatherHeading}</h2><p>{t.weatherPrivacy}</p>
    <p>{t.permissionPrivacy} <a href="https://open-meteo.com/en/terms">{t.providerPolicy}</a>.</p>
    <h2>{t.hostHeading}</h2><p>{t.hostPrivacy} <a href="https://vercel.com/legal/privacy-policy">{t.hostPolicy}</a>.</p>
    <p>{t.questionsPrivacy} <a href="https://github.com/jamestkelly/is-my-coffee-cold/issues">GitHub Issues</a>.</p>
  </main>;
}

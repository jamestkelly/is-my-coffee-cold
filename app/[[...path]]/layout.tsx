import type { ReactNode } from 'react';
import { translator, languages } from '../../lib/languages';
import { origin, localeUrls, privacyUrls } from '../../lib/site';
import { getLocale, type Params } from '../route-locale';
import '../style.css';

export function generateStaticParams() {
  return [[], ...Object.keys(languages).map(lang => [lang])]
    .flatMap(path => [{ path }, { path: [...path, 'privacy'] }]);
}
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Params }) {
  const locale = await getLocale(params);
  const privacy = (await params).path?.at(-1) === 'privacy';
  const t = translator(locale);
  const title = privacy ? `${t('privacy')} | ${t('title')}` : t('searchTitle');
  const description = privacy ? t('privacyDescription') : t('searchDescription');
  const urls = privacy ? privacyUrls : localeUrls;
  const canonical = urls[locale];
  return {
    metadataBase: new URL(origin),
    title, description,
    alternates: { canonical, languages: { ...urls, 'x-default': urls.en } },
    openGraph: { type: 'website', title, description, url: canonical, images: ['/coffee-cup.png'] },
    twitter: { card: 'summary' as const, title, description, images: ['/coffee-cup.png'] },
  };
}
export default async function Layout({ children, params }: { children: ReactNode; params: Params }) {
  return <html lang={await getLocale(params)}><body>{children}</body></html>;
}

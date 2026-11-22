import type { ReactNode } from 'react';
import { copy, languages } from '../../lib/languages';
import { origin, localeUrls } from '../../lib/site';
import { getLocale, type Params } from '../route-locale';
import '../style.css';

export function generateStaticParams() {
  return [[], ...Object.keys(languages).map(lang => [lang])].map(path => ({ path }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Params }) {
  const locale = await getLocale(params);
  const { title, estimate: description } = copy[locale];
  const canonical = localeUrls[locale];
  return {
    metadataBase: new URL(origin),
    title, description,
    alternates: { canonical, languages: { ...localeUrls, 'x-default': localeUrls.en } },
    openGraph: { type: 'website', title, description, url: canonical, images: ['/coffee-cup.png'] },
    twitter: { card: 'summary' as const, title, description, images: ['/coffee-cup.png'] },
  };
}
export default async function Layout({ children, params }: { children: ReactNode; params: Params }) {
  return <html lang={await getLocale(params)}><body>{children}</body></html>;
}

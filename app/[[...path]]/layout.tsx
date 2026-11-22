import type { ReactNode } from 'react';
import { copy, languages } from '../../lib/languages';
import { getLocale, type Params } from '../route-locale';
import '../style.css';

export function generateStaticParams() {
  return [[], ...Object.keys(languages).map(lang => [lang])].map(path => ({ path }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Params }) {
  const messages = copy[await getLocale(params)];
  return { title: messages.title, description: messages.estimate };
}
export default async function Layout({ children, params }: { children: ReactNode; params: Params }) {
  return <html lang={await getLocale(params)}><body>{children}</body></html>;
}

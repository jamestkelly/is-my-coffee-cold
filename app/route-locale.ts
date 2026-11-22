import { notFound } from 'next/navigation';
import { isLocale } from '../lib/languages';

export type Params = Promise<{ path?: string[] }>;
export async function getLocale(params: Params) {
  const { path = [] } = await params;
  const locale = path[0] ?? 'en';
  if (path.length > 1 || !isLocale(locale)) notFound();
  return locale;
}

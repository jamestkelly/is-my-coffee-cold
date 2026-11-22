import { notFound } from 'next/navigation';
import { isLocale } from '../lib/languages';

export type Params = Promise<{ path?: string[] }>;
export async function getLocale(params: Params) {
  const { path = [] } = await params;
  const segments = path.at(-1) === 'privacy' ? path.slice(0, -1) : path;
  const locale = segments[0] ?? 'en';
  if (segments.length > 1 || !isLocale(locale)) notFound();
  return locale;
}

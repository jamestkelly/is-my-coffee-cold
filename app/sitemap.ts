import type { MetadataRoute } from 'next';
import { localeUrls } from '../lib/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(localeUrls).map(url => ({ url }));
}

import type { MetadataRoute } from 'next';
import { localeUrls, privacyUrls } from '../lib/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [...Object.values(localeUrls), ...Object.values(privacyUrls)].map(url => ({ url }));
}

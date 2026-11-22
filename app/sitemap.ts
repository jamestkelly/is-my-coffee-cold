import type { MetadataRoute } from 'next';
import { localeUrls, origin } from '../lib/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [...Object.values(localeUrls), `${origin}/privacy/`].map(url => ({ url }));
}

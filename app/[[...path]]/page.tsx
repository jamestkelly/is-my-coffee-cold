import Calculator from '../calculator';
import { getLocale } from '../route-locale';
import { copy } from '../../lib/languages';
import { localeUrls } from '../../lib/site';

export default async function Home({ params }: { params: Promise<{ path?: string[] }> }) {
  const locale = await getLocale(params);
  const schema = {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: copy[locale].title, description: copy[locale].model, url: localeUrls[locale], inLanguage: locale,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web browser',
    isAccessibleForFree: true, sameAs: 'https://github.com/jamestkelly/is-my-coffee-cold',
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><Calculator locale={locale} /></>;
}

import Calculator from '../calculator';
import { getLocale } from '../route-locale';

export default async function Home({ params }: { params: Promise<{ path?: string[] }> }) {
  return <Calculator locale={await getLocale(params)} />;
}

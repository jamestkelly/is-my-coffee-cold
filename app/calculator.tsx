'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Select, SelectContent, SelectItem, SelectItemIndicator, SelectLabel, SelectTrigger, SelectValue } from '@ui-sdk/react/select';
import { NumberInput, NumberInputControl, NumberInputDecrement, NumberInputGroup, NumberInputIncrement } from '@ui-sdk/react/number-input';
import { coolingMinutes } from '../lib/cooling';
import { copy, languages, isLocale, type Locale } from '../lib/languages';
const options = Object.entries(languages).map(([value, label]) => ({ value, label }));

function Temperature({ id, label, value, change, children, locale }: {
  locale: Locale;
  id: string; label: string; value: number | null; change: (n: number | null) => void; children?: ReactNode;
}) {
  return <div className="field">
    <div className="label-row"><label htmlFor={id}>{label}<span className="sr"> (°C)</span></label>{children}</div>
    <NumberInput value={value} onValueChange={change} locale={locale} step={0.1} largeStep={1}>
      <NumberInputGroup className="control">
        <div className="reading"><NumberInputControl id={id} /><span aria-hidden="true">°C</span></div>
        <NumberInputDecrement aria-label={copy[locale].decrease.replace('{field}', label)}>−</NumberInputDecrement>
        <NumberInputIncrement aria-label={copy[locale].increase.replace('{field}', label)}>+</NumberInputIncrement>
      </NumberInputGroup>
    </NumberInput>
  </div>;
}

export default function Calculator({ locale: initialLocale }: { locale: Locale }) {
  const [locale, setLocale] = useState(initialLocale);
  const t = copy[locale];
  const [cutoff, setCutoff] = useState<number | null>(24);
  const [coffee, setCoffee] = useState<number | null>(80);
  const [air, setAir] = useState<number | null>(21);
  const [weather, setWeather] = useState<'idle' | 'loading' | 'success' | 'failed'>('idle');
  const [explain, setExplain] = useState(false);
  const request = useRef(0);
  const minutes = coolingMinutes(coffee, air, cutoff);
  const rounded = typeof minutes === 'number' ? Math.round(minutes) : 0;
  const format = new Intl.NumberFormat(locale);
  const duration = !rounded && 'underMinute' in t ? t.underMinute : new Intl.PluralRules(locale).select(rounded || 1) === 'one' ? t.one : t.other;
  const [before, after] = duration.split('{n}');
  const [sourceBefore, sourceAfter] = t.source.split('{source}');

  useEffect(() => {
    const onBack = () => {
      const lang = location.pathname.split('/')[1];
      setLocale(isLocale(lang) ? lang : 'en');
    };
    window.addEventListener('popstate', onBack);
    const values = new URLSearchParams(location.hash.slice(1));
    for (const [key, set] of [['coffee', setCoffee], ['air', setAir], ['cutoff', setCutoff]] as const) {
      const text = values.get(key);
      if (text !== null) set(text.trim() && Number.isFinite(Number(text)) ? Number(text) : null);
    }
    return () => window.removeEventListener('popstate', onBack);
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.estimate);
  }, [locale, t]);
  function switchLanguage(next: unknown) {
    if (!isLocale(next) || next === locale) return;
    const values = new URLSearchParams();
    for (const [key, value, initial] of [['coffee', coffee, 80], ['air', air, 21], ['cutoff', cutoff, 24]] as const) {
      if (value !== initial) values.set(key, value === null ? '' : String(value));
    }
    history.pushState(null, '', `/${next}/${values.size ? `#${values}` : ''}`);
    setLocale(next);
  }

  async function useWeather() {
    const current = ++request.current;
    setWeather('loading');
    setExplain(false);
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000, maximumAge: 300000 }));
      if (request.current !== current) return;
      const { latitude, longitude } = position.coords;
      const query = new URLSearchParams({ latitude: latitude.toFixed(1), longitude: longitude.toFixed(1), current: 'temperature_2m', temperature_unit: 'celsius' });
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${query}`, { signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw Error();
      const temp = (await response.json()).current?.temperature_2m;
      if (!Number.isFinite(temp)) throw Error();
      if (request.current === current) {
        setAir(Math.round(temp));
        setWeather('success');
      }
    } catch {
      if (request.current === current) setWeather('failed');
    }
  }

  return <main><header><h1>{t.title}</h1>
    <Select value={locale} items={options} onValueChange={switchLanguage}>
      <SelectLabel className="sr">{t.language}</SelectLabel>
      <SelectTrigger className="language"><SelectValue /><span aria-hidden="true">▾</span></SelectTrigger>
      <SelectContent className="languages" align="end" sideOffset={8} collisionPadding={12} alignItemWithTrigger={false}>{options.map(({ value, label }) =>
        <SelectItem key={value} value={value} lang={value}>{label}<SelectItemIndicator aria-hidden="true">✓</SelectItemIndicator></SelectItem>)}</SelectContent>
    </Select>
  </header><div className="calculator">
    <section className="estimate" aria-label={t.estimate} aria-live="polite" aria-atomic="true">
      {typeof minutes === 'number' ? <>
        <p>{rounded ? t.about : t.less}</p>
        <h2>{before}<strong>{format.format(rounded || 1)}</strong>{after}</h2>
        <p>{t.until.replace('{t}', format.format(cutoff!))}</p>
      </> : <h2 className="message">{t[minutes]}</h2>}
    </section>
    <section className="fields" aria-label={t.fields}>
      <Temperature locale={locale} id="cutoff" label={t.cutoff} value={cutoff} change={setCutoff} />
      <Temperature locale={locale} id="coffee" label={t.coffee} value={coffee} change={setCoffee} />
      <Temperature locale={locale} id="ambient" label={t.air} value={air} change={n => { request.current++; setAir(n); setWeather('idle'); }}>
        <button className="link" disabled={weather === 'loading'} aria-expanded={explain} onClick={() => setExplain(!explain)}>
          {weather === 'loading' ? t.loading : t.weather}
        </button>
      </Temperature>
      {explain && <p className="notice">{t.consent} <button className="link" onClick={useWeather}>{t.allow}</button></p>}
      <div role="status">{weather === 'failed' ? t.failed : weather === 'success' ? <>{sourceBefore}<a href="https://open-meteo.com/">Open-Meteo</a>{sourceAfter}</> : null}</div>
      <p className="note">{t.note}</p>
      <details className="note"><summary>{t.how}</summary><p>{t.model}</p>
        <a href="https://github.com/jamestkelly/is-my-coffee-cold">GitHub</a>
      </details>
    </section>
  </div></main>;
}

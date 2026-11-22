'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Select, SelectContent, SelectItem, SelectItemIndicator, SelectLabel, SelectTrigger, SelectValue } from '@ui-sdk/react/select';
import { NumberInput, NumberInputControl, NumberInputDecrement, NumberInputGroup, NumberInputIncrement } from '@ui-sdk/react/number-input';
import { coolingMinutes } from '../lib/cooling';
import { cupHash, defaultCup, displayReading, readCup, toCelsius, type Cup, type Unit } from '../lib/cup';
import { copy, languages, isLocale, type Locale } from '../lib/languages';
const options = Object.entries(languages).map(([value, label]) => ({ value, label }));

function Temperature({ id, label, value, change, children, locale, unit }: {
  unit: Unit;
  locale: Locale;
  id: string; label: string; value: number | null; change: (n: number | null) => void; children?: ReactNode;
}) {
  return <div className="field">
    <div className="label-row"><label htmlFor={id}>{label}<span className="sr"> (°{unit})</span></label>{children}</div>
    <NumberInput value={displayReading(value, unit)} onValueChange={n => change(toCelsius(n, unit))} locale={locale} step={0.1} largeStep={1}>
      <NumberInputGroup className="control">
        <div className="reading"><NumberInputControl id={id} /><span aria-hidden="true">°{unit}</span></div>
        <NumberInputDecrement aria-label={copy[locale].decrease.replace('{field}', label)}>−</NumberInputDecrement>
        <NumberInputIncrement aria-label={copy[locale].increase.replace('{field}', label)}>+</NumberInputIncrement>
      </NumberInputGroup>
    </NumberInput>
  </div>;
}

export default function Calculator({ locale: initialLocale }: { locale: Locale }) {
  const [locale, setLocale] = useState(initialLocale);
  const t = copy[locale];
  const [cup, setCup] = useState(defaultCup);
  const { cutoff, coffee, air, unit } = cup;
  const currentCup = useRef(cup);
  function editCup(patch: Partial<Cup>) {
    const next = { ...currentCup.current, ...patch };
    currentCup.current = next;
    setCup(next);
    const hash = cupHash(next);
    if (location.hash !== hash) history.replaceState(history.state, '', location.pathname + location.search + hash);
  }
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
    const restore = () => {
      const lang = location.pathname.split('/')[1];
      setLocale(isLocale(lang) ? lang : 'en');
      currentCup.current = readCup(location.hash);
      setCup(currentCup.current);
      request.current++;
      setWeather('idle');
      setExplain(false);
    };
    restore();
    window.addEventListener('popstate', restore);
    return () => window.removeEventListener('popstate', restore);
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.estimate);
  }, [locale, t]);
  function switchLanguage(next: unknown) {
    if (!isLocale(next) || next === locale) return;
    history.pushState(null, '', `/${next}/${cupHash(currentCup.current)}`);
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
        editCup({ air: Math.round(temp) });
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
        <p>{t.until.replace('{start}', `${format.format(displayReading(coffee, unit)!)} °${unit}`).replace('{cutoff}', `${format.format(displayReading(cutoff, unit)!)} °${unit}`)}</p>
      </> : <h2 className="message">{t[minutes]}</h2>}
    </section>
    <section className="fields" aria-label={t.fields}>
      <fieldset className="units"><legend className="sr">{t.unit}</legend>
        {(['C', 'F'] as const).map(u => <label key={u}><input type="radio" name="unit" checked={unit === u} onChange={() => editCup({ unit: u })} /> °{u}</label>)}
      </fieldset>
      <Temperature locale={locale} unit={unit} id="cutoff" label={t.cutoff} value={cutoff} change={cutoff => editCup({ cutoff })} />
      <Temperature locale={locale} unit={unit} id="coffee" label={t.coffee} value={coffee} change={coffee => editCup({ coffee })} />
      <Temperature locale={locale} unit={unit} id="ambient" label={t.air} value={air} change={air => { request.current++; editCup({ air }); setWeather('idle'); }}>
        <button className="link" disabled={weather === 'loading'} aria-expanded={explain} onClick={() => setExplain(!explain)}>
          {weather === 'loading' ? t.loading : t.weather}
        </button>
      </Temperature>
      {explain && <p className="notice">{t.consent} <button className="link" onClick={useWeather}>{t.allow}</button></p>}
      <div role="status">{weather === 'failed' ? t.failed : weather === 'success' ? <>{sourceBefore}<a href="https://open-meteo.com/">Open-Meteo</a>{sourceAfter}</> : null}</div>
      <p className="note">{t.note}</p>
      <details className="note"><summary>{t.how}</summary><p>{t.model}</p></details>
    </section>
  </div>
    <footer className="site-links">
      <a href="/privacy/" hrefLang="en">{t.privacy}</a>
      <a href="https://github.com/jamestkelly/is-my-coffee-cold">GitHub</a>
    </footer>
  </main>;
}

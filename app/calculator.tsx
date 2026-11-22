'use client';

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { LanguagePicker } from './language-picker';
import { privacyPath } from '../lib/site';
import { NumberInput, NumberInputControl, NumberInputDecrement, NumberInputGroup, NumberInputIncrement } from '@ui-sdk/react/number-input';
import { coolingMinutes } from '../lib/cooling';
import { cupHash, defaultCup, displayReading, readCup, toCelsius, type Cup, type Unit } from '../lib/cup';
import { translator, isLocale, type Locale } from '../lib/languages';


function Temperature({ id, label, value, change, children, locale, unit }: {
  unit: Unit;
  locale: Locale;
  id: string; label: string; value: number | null; change: (n: number | null) => void; children?: ReactNode;
}) {
  const t = translator(locale);
  return <div className="mb-6">
    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-2.5"><label className="font-semibold" htmlFor={id}>{label}<span className="sr-only"> (°{unit})</span></label>{children}</div>
    <NumberInput value={displayReading(value, unit)} onValueChange={n => change(toCelsius(n, unit))} locale={locale} step={0.1} largeStep={1}>
      <NumberInputGroup className="flex rounded-md border border-slate-400 bg-white focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-accent [&_button]:w-[16%] [&_button]:min-w-11 [&_button]:border-l [&_button]:border-slate-300 [&_button]:text-[1.6rem]">
        <div className="flex min-w-0 flex-1 items-center gap-1.5 px-3 py-1.5"><NumberInputControl className="w-[3ch] min-w-[1ch] max-w-3/4 text-[1.7rem] outline-none supports-[field-sizing:content]:w-auto supports-[field-sizing:content]:field-sizing-content" id={id} /><span aria-hidden="true">°{unit}</span></div>
        <NumberInputDecrement aria-label={t('decrease', { field: label })}>−</NumberInputDecrement>
        <NumberInputIncrement aria-label={t('increase', { field: label })}>+</NumberInputIncrement>
      </NumberInputGroup>
    </NumberInput>
  </div>;
}

export default function Calculator({ locale: initialLocale }: { locale: Locale }) {
  const [locale, setLocale] = useState(initialLocale);
  const t = useMemo(() => translator(locale), [locale]);
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
    document.title = t('title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('estimate'));
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

  return <main><header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-b border-slate-400 pb-3"><h1>{t('title')}</h1>
    <LanguagePicker locale={locale} onChange={switchLanguage} />
  </header><div className="grid gap-[clamp(2.3rem,6vw,5rem)] pt-[clamp(2.6rem,7vw,6rem)] wide:grid-cols-2">
    <section className="min-h-38 text-[clamp(1.15rem,2.4vw,1.6rem)] tracking-[-.03em]" aria-label={t('estimate')} aria-live="polite" aria-atomic="true">
      {typeof minutes === 'number' ? <>
        <p>{rounded ? t('about') : t('less')}</p>
        <h2 className="my-[.2em] text-[clamp(2rem,6vw,4rem)] leading-[1.1] font-bold tracking-[-.06em] wrap-anywhere">{t.rich(rounded ? 'duration' : 'shortDuration', { n: rounded || 1, value: chunks => <strong className="text-[1.4em] text-accent tabular-nums">{chunks}</strong> })}</h2>
        <p>{t('until', { start: displayReading(coffee, unit)!, cutoff: displayReading(cutoff, unit)!, unit })}</p>
      </> : <h2 className="max-w-[18ch] text-[clamp(1.7rem,4vw,3rem)] leading-tight font-bold tracking-tight">{t(minutes)}</h2>}
    </section>
    <section className="min-w-0" aria-label={t('fields')}>
      <fieldset className="mb-3 flex gap-4"><legend className="sr-only">{t('unit')}</legend>
        {(['C', 'F'] as const).map(u => <label key={u} className="inline-flex min-h-11 cursor-pointer items-center gap-1 font-semibold"><input className="accent-accent" type="radio" name="unit" checked={unit === u} onChange={() => editCup({ unit: u })} /> °{u}</label>)}
      </fieldset>
      <Temperature locale={locale} unit={unit} id="cutoff" label={t('cutoff')} value={cutoff} change={cutoff => editCup({ cutoff })} />
      <Temperature locale={locale} unit={unit} id="coffee" label={t('coffee')} value={coffee} change={coffee => editCup({ coffee })} />
      <Temperature locale={locale} unit={unit} id="ambient" label={t('air')} value={air} change={air => { request.current++; editCup({ air }); setWeather('idle'); }}>
        <button className="py-1 text-sm text-accent hover:underline focus-visible:underline" disabled={weather === 'loading'} aria-expanded={explain} onClick={() => setExplain(!explain)}>
          {weather === 'loading' ? t('loading') : t('weather')}
        </button>
      </Temperature>
      {explain && <p className="mt-5">{t('consent')} <button className="py-1 text-accent hover:underline focus-visible:underline" onClick={useWeather}>{t('allow')}</button></p>}
      <div role="status" className="not-empty:mt-5">{weather === 'failed' ? t('failed') : weather === 'success' ? t.rich('source', { provider: chunks => <a href="https://open-meteo.com/">{chunks}</a> }) : null}</div>
      <p className="mt-5">{t('note')}</p>
      <details className="mt-5"><summary>{t('how')}</summary><p>{t('model')}</p></details>
    </section>
  </div>
    <footer className="mt-[clamp(2rem,5vw,4rem)] flex flex-wrap gap-x-5 border-t border-slate-300 text-sm [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:text-slate-600 [&_a]:underline-offset-4 [&_a:hover]:text-accent [&_a:focus-visible]:text-accent">
      <a href={privacyPath(locale)} hrefLang={locale}>{t('privacy')}</a>
      <a href="https://github.com/jamestkelly/is-my-coffee-cold">GitHub</a>
    </footer>
  </main>;
}

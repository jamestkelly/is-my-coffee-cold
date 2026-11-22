'use client';

import { useRef, useState, type ReactNode } from 'react';
import { NumberInput, NumberInputControl, NumberInputDecrement, NumberInputGroup, NumberInputIncrement } from '@ui-sdk/react/number-input';
import { coolingMinutes } from '../lib/cooling';

function Temperature({ id, label, value, change, children }: {
  id: string; label: string; value: number | null; change: (n: number | null) => void; children?: ReactNode;
}) {
  return <div className="field">
    <div className="label-row"><label htmlFor={id}>{label}<span className="sr"> in degrees Celsius</span></label>{children}</div>
    <NumberInput value={value} onValueChange={change} locale="en">
      <NumberInputGroup className="control">
        <div className="reading"><NumberInputControl id={id} /><span aria-hidden="true">°C</span></div>
        <NumberInputDecrement aria-label={`Decrease ${label}`}>−</NumberInputDecrement>
        <NumberInputIncrement aria-label={`Increase ${label}`}>+</NumberInputIncrement>
      </NumberInputGroup>
    </NumberInput>
  </div>;
}

export default function Calculator() {
  const [cutoff, setCutoff] = useState<number | null>(24);
  const [coffee, setCoffee] = useState<number | null>(80);
  const [air, setAir] = useState<number | null>(21);
  const [weather, setWeather] = useState<'idle' | 'loading' | 'success' | 'failed'>('idle');
  const [explain, setExplain] = useState(false);
  const request = useRef(0);
  const minutes = coolingMinutes(coffee, air, cutoff);
  const rounded = typeof minutes === 'number' ? Math.round(minutes) : 0;

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

  return <div className="calculator">
    <section className="estimate" aria-label="Cooling estimate" aria-live="polite" aria-atomic="true">
      {typeof minutes === 'number' ? <>
        <p>{rounded ? 'About' : 'Less than'}</p>
        <h2><strong>{rounded || 1}</strong> {rounded <= 1 ? 'minute' : 'minutes'}</h2>
        <p>Until your coffee reaches {cutoff} °C.</p>
      </> : <h2 className="message">{minutes === 'cold' ? 'Already too cold.' : minutes === 'unreachable' ? 'Won’t reach that temperature here.' : 'Enter all three temperatures.'}</h2>}
    </section>
    <section className="fields" aria-label="Temperatures">
      <Temperature id="cutoff" label="Too cold for me at" value={cutoff} change={setCutoff} />
      <Temperature id="coffee" label="Coffee temperature" value={coffee} change={setCoffee} />
      <Temperature id="ambient" label="Room / outdoors" value={air} change={n => { request.current++; setAir(n); setWeather('idle'); }}>
        <button className="link" disabled={weather === 'loading'} aria-expanded={explain} onClick={() => setExplain(!explain)}>
          {weather === 'loading' ? 'Getting weather…' : 'Use outdoor temperature'}
        </button>
      </Temperature>
      {explain && <p className="notice">Use your approximate location to get the outdoor temperature from Open-Meteo? <button className="link" onClick={useWeather}>Use my location</button></p>}
      <div role="status">{weather === 'failed' ? 'Outdoor temperature unavailable. You can enter it above.' : weather === 'success' ? <>Outdoor reading from <a href="https://open-meteo.com/">Open-Meteo</a>.</> : null}</div>
      <p className="note">An estimate, not a timer. A lid or insulated mug can change the cooling time.</p>
    </section>
  </div>;
}

export type Unit = 'C' | 'F';
export type Cup = { coffee: number | null; air: number | null; cutoff: number | null; unit: Unit };
export const defaultCup: Cup = { coffee: 80, air: 21, cutoff: 24, unit: 'C' };
const readings = ['coffee', 'air', 'cutoff'] as const;

export function readCup(hash: string): Cup {
  const values = new URLSearchParams(hash.replace(/^#/, ''));
  const cup = { ...defaultCup };
  if (values.get('unit') === 'F') cup.unit = 'F';
  for (const key of readings) {
    const raw = values.get(key);
    if (raw !== null) cup[key] = raw.trim() && Number.isFinite(Number(raw)) ? Number(raw) : null;
  }
  return cup;
}

export function cupHash(cup: Cup) {
  const values = new URLSearchParams();
  for (const key of readings) {
    if (cup[key] !== defaultCup[key]) values.set(key, cup[key] === null ? '' : String(cup[key]));
  }
  if (cup.unit === 'F') values.set('unit', 'F');
  return values.size ? `#${values}` : '';
}

// Readings in shared links and in the cooling model are always Celsius.
export function displayReading(c: number | null, unit: Unit) {
  if (c === null) return null;
  return Number((unit === 'F' ? c * 1.8 + 32 : c).toFixed(1));
}

export function toCelsius(value: number | null, unit: Unit) {
  return value !== null && unit === 'F' ? Number(((value - 32) / 1.8).toFixed(12)) : value;
}

export function coolingMinutes(start: number | null, air: number | null, cutoff: number | null) {
  if (start === null || air === null || cutoff === null || ![start, air, cutoff].every(Number.isFinite)) return 'incomplete';
  if (start <= cutoff) return 'cold';
  if (air >= cutoff) return 'unreachable';
  return Math.log((start - air) / (cutoff - air)) / 0.1;
}

import assert from 'node:assert/strict';
import test from 'node:test';
import { cupHash, defaultCup, displayReading, readCup, toCelsius } from '../lib/cup.ts';
import { coolingMinutes } from '../lib/cooling.ts';

test('shared cups restore defaults, legacy readings, and explicit empty fields', () => {
  assert.equal(cupHash(defaultCup), '');
  assert.deepEqual(readCup('#cutoff=40'), { ...defaultCup, cutoff: 40 });
  const cup = { ...defaultCup, air: 0, coffee: null, unit: 'F' as const };
  assert.deepEqual(readCup(cupHash(cup)), cup);
  assert.equal(readCup('#coffee=Infinity').coffee, null);
});

test('Fahrenheit edits convert to Celsius while sharing retains the physical reading', () => {
  assert.equal(displayReading(80, 'F'), 176);
  assert.equal(toCelsius(32, 'F'), 0);
  assert.equal(displayReading(null, 'F'), null);
  const cutoff = toCelsius(104.1, 'F');
  const cup = { ...defaultCup, cutoff, unit: 'F' as const };
  const restored = readCup(cupHash(cup));
  assert.equal(displayReading(restored.cutoff, 'F'), 104.1);
  assert.equal(coolingMinutes(80, 21, cutoff), coolingMinutes(80, 21, restored.cutoff));
});

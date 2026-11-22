import assert from 'node:assert/strict';
import test from 'node:test';
import { coolingMinutes } from '../lib/cooling.ts';

test('reference cup and editable cutoff', () => {
  assert.equal(Math.round(Number(coolingMinutes(80, 21, 24)) * 60), 1787);
  assert.equal(Math.round(Number(coolingMinutes(80, 21, 40))), 11);
  assert.equal(Math.round(Number(coolingMinutes(80, 0, 40))), 7);
});

test('missing, already cold and unreachable are distinct', () => {
  assert.equal(coolingMinutes(null, 21, 24), 'incomplete');
  assert.equal(coolingMinutes(80, NaN, 24), 'incomplete');
  assert.equal(coolingMinutes(24, 30, 24), 'cold');
  assert.equal(coolingMinutes(80, 24, 24), 'unreachable');
});

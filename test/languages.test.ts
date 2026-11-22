import assert from 'node:assert/strict';
import test from 'node:test';
import { copy, languages, translator } from '../lib/languages.ts';

test('every language supplies all messages with the same interpolation slots', () => {
  for (const locale of Object.keys(languages) as (keyof typeof languages)[]) {
    for (const key of Object.keys(copy.en) as (keyof typeof copy.en)[]) {
      const message = copy[locale][key];
      assert.ok(message.trim(), `${locale}.${key}`);
      assert.deepEqual(message.match(/\{\w+\}/g), copy.en[key].match(/\{\w+\}/g), `${locale}.${key}`);
    }
  }
});

test('ICU formats localized numbers, rich plurals and the under-a-minute case', () => {
  const value = (text: string) => `<strong>${text}</strong>`;
  const en = translator('en');
  assert.equal(en.markup('duration', { n: 1, value }), '<strong>1</strong> minute');
  assert.equal(en.markup('duration', { n: 30, value }), '<strong>30</strong> minutes');
  assert.equal(translator('ja').markup('shortDuration', { n: 1, value }), '<strong>1</strong>分未満');
  assert.match(translator('fr')('until', { start: 80, cutoff: 24.5, unit: 'C' }), /24,5\u00a0°C/);
  for (const locale of Object.keys(languages) as (keyof typeof languages)[]) {
    assert.match(translator(locale).markup('source', { provider: text => `<a>${text}</a>` }), /<a>Open-Meteo<\/a>/);
  }
});

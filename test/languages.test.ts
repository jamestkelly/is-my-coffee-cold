import assert from 'node:assert/strict';
import test from 'node:test';
import { copy, languages } from '../lib/languages.ts';

test('every language supplies all messages with the same interpolation slots', () => {
  for (const locale of Object.keys(languages) as (keyof typeof languages)[]) {
    for (const key of Object.keys(copy.en) as (keyof typeof copy.en)[]) {
      const message = copy[locale][key];
      assert.ok(message.trim(), `${locale}.${key}`);
      assert.deepEqual(message.match(/\{\w+\}/g), copy.en[key].match(/\{\w+\}/g), `${locale}.${key}`);
    }
  }
});

/**
 * Determines if the given value is `null` or `undefined`.
 * @param {any} value The input value to verify.
 * @returns {boolean} A `boolean` corresponding to whether the given value is `null` or `undefined`.
 */
export function isNullOrUndefined(value: any): value is null | undefined {
  return value === null || value === undefined;
}

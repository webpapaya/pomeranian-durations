/**
 * Generic helpers to do math operations on durations.
 * @name default
 */

import { toFragments, toIso } from './transformations';
import { mapValues, negate, pipe } from './_utils';

/**
 * Converts all negative values from a duration and converts them to be positive.
 * @param isoString {string} - isoString
 * @returns isoString
 * @example
 * absolute('PT-1S') // => 'PT1S'
 * @example
 * absolute('PT1S') // => 'PT1S'
 */
export const absolute = (isoString) => pipe(
  isoString,
  toFragments,
  mapValues(Math.abs),
  toIso,
);

/**
 * Inverts all units of an iso duration.
 * @param isoString {string} - isoString
 * @returns isoString
 * @example
 * invert('PT-1M') // => 'PT1M'
 * @example
 * invert('P-1DT1S') // => 'P1DT-1S'
 */
export const invert = (isoString) => pipe(
  isoString,
  toFragments,
  mapValues(negate),
  toIso,
);

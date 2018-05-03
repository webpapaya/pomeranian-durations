/**
 * Generic helpers to do math operations on durations.
 * @name default
 */

import { toFragments, toIso } from "./transformations";
import { mapValues, pipe } from "./_utils";

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

/**
 * Helpers to subtract from a duration.
 * @name default
 */

import { curry } from './_utils';
import {
  add,
  addDays,
  addHours,
  addMicroseconds,
  addMilliseconds,
  addMinutes,
  addMonths,
  addSeconds,
  addWeeks,
  addYears,
  addToDate,
} from './add';
import { invert } from './math';

import { toFragments, toIso } from './transformations';
import { isInvalid } from './validate';
import { INVALID_DURATION } from './constants';

/**
 * Subtracts the given iso duration from the given duration.
 * @param firstDuration {string} - a duration to be subtracted
 * @param secondDuration {string} - a duration to be subtracted
 * @example
 * subtract('PT2M', 'PT1M') // => 'PT1M'
 */
export const subtract = curry((firstDuration, secondDurations) => {
  const secondFragments = toFragments(secondDurations);
  const negativeFragments = Object.keys(secondFragments).reduce((acc, unit) => {
    acc[unit] = secondFragments[unit] * -1; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
  return add(firstDuration, toIso(negativeFragments));
});

/**
 * Subtracts the given amount of milliseconds from the given duration.
 * @param amount {number} - number of milliseconds to be subtracted
 * @param isoString {string} - a duration to be subtracted
 * @example
 * subtractMilliseconds(1, 'PT2M') // => 'PT2M-0.001S'
 */
export const subtractMilliseconds = curry((amount, isoString) => addMilliseconds(amount * -1, isoString));

/**
 * Subtracts the given amount of microseconds to microseconds from the duration.
 * @param amount {number} - number of microseconds to be subtracted
 * @param isoString {string} - a duration to be subtracted
 * @example
 * subtractMicroseconds(1, 'PT2M') // => 'PT2M-0.000001S'
 */
export const subtractMicroseconds = curry((amount, isoString) => addMicroseconds(amount * -1, isoString));

/**
 * Subtracts the given amount of microseconds seconds from the given duration.
 * @param amount {number} - number of microseconds toseconds subtract
 * @param isoString {string} - a duration to be subtracted
 * @example
 * subtractSeconds(1, 'PT2S') // => 'PT1S'
 */
export const subtractSeconds = curry((amount, isoString) => addSeconds(amount * -1, isoString));

/**
 * Subtracts the given amount of microseconds minutes frome given duration.
 * @param amount {number} - number of microseconds tominutes subtract
 * @param isoString {string} - a duration to be subtracted
 * @example
 * subtractMinutes(1, 'PT2M') // => 'PT1M'
 */
export const subtractMinutes = curry((amount, isoString) => addMinutes(amount * -1, isoString));

/**
 * Subtracts the given amount of hours from the given duration.
 * @param amount {number} - number of hours to subtract
 * @param isoString {string} - a duration to be subtracted
 * @example
 * subtractHours(1, 'PT2H') // => 'PT1H'
 */
export const subtractHours = curry((amount, isoString) => addHours(amount * -1, isoString));

/**
 * Subtracts the given amount of days from the given duration.
 * @param amount {number} - number ofdays microseconds to subtract
 * @param isoString {string} - a duration to be subtracted
 * @example
 * subtractDays(1, 'P2D') // => 'P1D'
 */
export const subtractDays = curry((amount, isoString) => addDays(amount * -1, isoString));

/**
 * Subtracts the given amount of weeks from the given duration.
 * @param amount {number} - number of weeks to subtract
 * @param isoString {string} - a string to be added
 * @example
 * subtractWeeks(1, 'P2W') // => 'P1W'
 */
export const subtractWeeks = curry((amount, isoString) => addWeeks(amount * -1, isoString));

/**
 * Subtracts the given amount of microseconds months frome given duration.
 * @param amount {number} - number of microseconds tmonths subtract
 * @param isoString {string} - a string to be added
 * @example
 * subtractMonths(1, 'P2M') // => 'P1M'
 */
export const subtractMonths = curry((amount, isoString) => addMonths(amount * -1, isoString));

/**
 * Adds the given amount of microseconds to the given duration.
 * @param amount {number} - number of microseconds to add
 * @param isoString {string} - a string to be added
 * @example
 * subtractYears(1, 'P2Y') // => 'P1Y'
 */
export const subtractYears = curry((amount, isoString) => addYears(amount * -1, isoString));

/**
 * Subtracts an iso duration from a js date.
 * @param amount {string} - iso duration to be subtracted
 * @param date {Date} - a date to be subtracted from
 * @example
 * subtractFromDate('PT1S', new Date('2000-01-01T00:00:00Z')) // => new Date('1999-12-31T23:59:59Z')
 */
export const subtractFromDate = curry((amount, date) => {
  if (isInvalid(amount)) { return INVALID_DURATION; }
  return addToDate(invert(amount), date);
});


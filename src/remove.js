/**
 * Helpers to remove certain units from an ISO8601 string.
 * @name default
 */

import { curry, except, pipe } from './_utils';
import { toFragments, toIso } from './transformations';
import { INVALID_DURATION, UNIT_NAMES } from './constants';
import { isInvalid } from './validate';

const removeUnits = curry((units, isoDuration) => {
  if (isInvalid(isoDuration)) { return INVALID_DURATION; }
  return pipe(isoDuration, toFragments, except(units), toIso);
});

/**
 * Removes seconds part from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeSeconds('PT1S') // => 'P'
 */
export const removeSeconds = removeUnits([UNIT_NAMES.seconds]);

/**
 * Removes minutes part from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeMinutes('PT1M') // => 'P'
 */
export const removeMinutes = removeUnits([UNIT_NAMES.minutes]);

/**
 * Removes hours part from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeHours('PT1H') // => 'P'
 */
export const removeHours = removeUnits([UNIT_NAMES.hours]);

/**
 * Removes days part from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeDays('P1D') // => 'P'
 */
export const removeDays = removeUnits([UNIT_NAMES.days]);

/**
 * Removes weeks part from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeWeeks('P1W') // => 'P'
 */
export const removeWeeks = removeUnits([UNIT_NAMES.weeks]);

/**
 * Removes months part from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeMonths('P1M') // => 'P'
 */
export const removeMonths = removeUnits([UNIT_NAMES.months]);

/**
 * Removes years part from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeYears('P1Y') // => 'P'
 */
export const removeYears = removeUnits([UNIT_NAMES.years]);

/**
 * Removes all time components (seconds, minutes, hours) from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeTimeUnits('P1DT1M') // => 'P1D'
 */
export const removeTimeUnits = removeUnits([
  UNIT_NAMES.seconds,
  UNIT_NAMES.minutes,
  UNIT_NAMES.hours,
]);

/**
 * Removes all date components (days, weeks, months, years) from given ISO8601 duration
 * @param isoDuration {string} - ISO8601 duration
 * @returns isoDuration {string}
 * @example
 * removeDateUnits('P1DT1M') // => 'PT1M'
 */
export const removeDateUnits = removeUnits([
  UNIT_NAMES.days,
  UNIT_NAMES.weeks,
  UNIT_NAMES.months,
  UNIT_NAMES.years,
]);

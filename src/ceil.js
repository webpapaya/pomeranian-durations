import { curry } from './_utils';
import * as _add from './add';
import * as _floor from './floor';

import { isInvalid } from './validate';
import { INVALID_DURATION } from './constants';

const buildCeilFn = (unit) => (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  const floorFn = _floor[`floor${unit}`];
  const addFn = _add[`add${unit}`];

  return floorFn(addFn(1, isoString));
};

/**
 * Ceils a duration to a given granularity.
 * @param granularity {string} - ISO8601 duration
 * @param isoString {string} - ISO8601 duration
 * @example
 * ceil('PT2s', 'PT5S') // => PT6S
 * ceil('PT3s', 'PT5S') // => PT6S
 * ceil('PT4s', 'PT5S') // => PT8S
 */
export const ceil = curry((granularity, isoString) =>
  _floor.floor(granularity, _add.add(granularity, isoString)));

/**
 * Ceil a given ISO duration to the next second.
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * ceilSeconds('PT1.1S') // => PT2S
 */
export const ceilSeconds = buildCeilFn('Seconds');

/**
 * Ceil a given ISO duration to the next minute.
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * ceilMinutes('PT1.1M') // => PT2M
 */
export const ceilMinutes = buildCeilFn('Minutes');

/**
 * Ceil a given ISO duration to the next hour.
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * ceilHours('PT1.1H') // => PT2H
 */
export const ceilHours = buildCeilFn('Hours');

/**
 * Ceil a given ISO duration to the next day.
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * ceilDays('P1.1D') // => P2D
 */
export const ceilDays = buildCeilFn('Days');

/**
 * Ceil a given ISO duration to the next week.
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * ceilWeeks('P1.1W') // => P2W
 */
export const ceilWeeks = buildCeilFn('Weeks');

/**
 * Ceil a given ISO duration to the next month.
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * ceilMonths('P1.1M') // => P2M
 */
export const ceilMonths = buildCeilFn('Months');

/**
 * Ceil a given ISO duration to the next year.
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * ceilYears('P1.1Y') // => P2Y
 */
export const ceilYears = buildCeilFn('Years');

/**
 * Helpers for finding particular units in a given ISO8601 duration
 * @name default
 */
import {
  TIME_DESIGNATOR,
  DURATION_DESIGNATOR,
  UNITS,
} from './constants';
import { curry } from './_utils';

const charsBetween = (string, start, end) =>
  string.substring(string.lastIndexOf(start) + 1, string.lastIndexOf(end));

const containsTimeDesignator = (string) =>
  string.lastIndexOf(TIME_DESIGNATOR) === -1;

const extractTimeComponents = (isoString) =>
  isoString.split(TIME_DESIGNATOR)[1] || '';

const extractDateComponents = (isoString) => {
  if (containsTimeDesignator(isoString)) { return isoString.replace(DURATION_DESIGNATOR, ''); }
  return charsBetween(isoString, DURATION_DESIGNATOR, TIME_DESIGNATOR);
};

const findUnit = (stringComponent, unit) => {
  const matchedUnit = stringComponent
    .toUpperCase()
    .match(new RegExp(`[+,-]?[0-9]+(\\.[0-9]+)?${unit}`));

  if (!matchedUnit) { return void 0; }
  return parseFloat(matchedUnit[0].slice(0, -1));
};

const buildTimeFinder = curry((unit, isoString) => {
  const timeComponent = extractTimeComponents(isoString || '');
  return findUnit(timeComponent, unit);
});

const buildDateFinder = curry((unit, isoString) => {
  const dateComponent = extractDateComponents(isoString || '');
  return findUnit(dateComponent, unit);
});

/**
 * Finds the seconds in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findSeconds('PT1S') // => 1
 * @example
 * findSeconds('PT1M') // => undefined
 */
export const findSeconds = buildTimeFinder(UNITS.seconds);

/**
 * Finds the minutes in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findMinutes('PT1M') // => 1
 * @example
 * findMinutes('P1Y') // => undefined
 */
export const findMinutes = buildTimeFinder(UNITS.minutes);

/**
 * Finds the hours in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findHours('PT1H') // => 1
 * @example
 * findHours('PT1M') // => undefined
 */
export const findHours = buildTimeFinder(UNITS.hours);

/**
 * Finds the days in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findDays('P1D') // => 1
 * @example
 * findDays('PT1M') // => undefined
 */
export const findDays = buildDateFinder(UNITS.days);

/**
 * Finds the weeks in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findWeeks('P1W') // => 1
 * @example
 * findWeeks('PT1M') // => undefined
 */
export const findWeeks = buildDateFinder(UNITS.weeks);

/**
 * Finds the months in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findMonths('P1M') // => 1
 * @example
 * findMonths('PT1s') // => undefined
 */
export const findMonths = buildDateFinder(UNITS.months);

/**
 * Finds the years in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findYears('P1Y') // => 1
 * @example
 * findYears('PT1M') // => undefined
 */
export const findYears = buildDateFinder(UNITS.years);

import {
  TIME_DESIGNATOR,
  DURATION_DESIGNATOR,
  UNITS,
} from './constants';

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

const findTimeUnit = (unit, isoString) => {
  const timeComponent = extractTimeComponents(isoString || '');
  return findUnit(timeComponent, unit);
};

const findDateUnit = (unit, isoString) => {
  const dateComponent = extractDateComponents(isoString || '');
  return findUnit(dateComponent, unit);
};

/**
 * Finds the seconds in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findSeconds('PT1S') // => 1S
 * findSeconds('PT1M') // => undefined
 */
export const findSeconds = (isoString) => findTimeUnit(UNITS.seconds, isoString);

/**
 * Finds the minutes in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findMinutes('PT1S') // => 1S
 * findMinutes(P1Y') // => undefined
 */
export const findMinutes = (isoString) => findTimeUnit(UNITS.minutes, isoString);

/**
 * Finds the hours in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findHours('PT1H') // => 1
 * findHours('PT1M') // => undefined
 */
export const findHours = (isoString) => findTimeUnit(UNITS.hours, isoString);

/**
 * Finds the days in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findDays('P1D') // => 1
 * findDays('PT1M') // => undefined
 */
export const findDays = (isoString) => findDateUnit(UNITS.days, isoString);

/**
 * Finds the weeks in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findWeeks('P1W') // => 1
 * findWeeks('PT1M') // => undefined
 */
export const findWeeks = (isoString) => findDateUnit(UNITS.weeks, isoString);

/**
 * Finds the months in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findMonths('P1M') // => 1
 * findMonths('PT1s') // => undefined
 */
export const findMonths = (isoString) => findDateUnit(UNITS.months, isoString);

/**
 * Finds the years in a given ISO8601 duration string.
 * @param isoString {string} an ISO8601 duration
 * @returns {(number|undefined)} number of seconds
 * @example
 * findYears('P1Y') // => 1
 * findYears('PT1M') // => undefined
 */
export const findYears = (isoString) => findDateUnit(UNITS.years, isoString);

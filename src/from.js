/**
 * Helpers to convert an integer to an ISO8601 duration.
 * @name default
 */

import { toIso } from './transformations';
import { ONE_MILLISECOND, ONE_SECOND } from './constants';
import { curry } from './_utils';

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromMicroseconds(1) // => 'PT0.000001S'
 */
export const fromMicroseconds = (amount) => fromSeconds(amount / ONE_SECOND);

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromMilliseconds(1) // => 'PT0.001S'
 */
export const fromMilliseconds = (amount) => fromSeconds(amount / ONE_MILLISECOND);

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromSeconds(1) // => 'PT1S'
 */
export const fromSeconds = (amount) => toIso({ seconds: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromMinutes(1) // => 'PT1M'
 */
export const fromMinutes = (amount) => toIso({ minutes: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromHours(1) // => 'PT1H'
 */
export const fromHours = (amount) => toIso({ hours: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromDays(1) // => 'P1D'
 */
export const fromDays = (amount) => toIso({ days: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromWeeks(1) // => 'P1W'
 */
export const fromWeeks = (amount) => toIso({ weeks: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromMonths(1) // => 'P1M'
 */
export const fromMonths = (amount) => toIso({ months: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromYears(1) // => 'P1Y'
 */
export const fromYears = (amount) => toIso({ years: amount });


const findExtendedUnit = (stringComponent, units) => {
  const findUnitWithValue = new RegExp(units.map((unit) => `[+,-]?[0-9] ?${unit} `).join('|'));
  const findUnits = new RegExp(units.join('|').toLowerCase());
  const matchedUnit = `${stringComponent} `.toLowerCase().match(findUnitWithValue);

  if (!matchedUnit) { return 0; }
  return parseFloat(matchedUnit[0].replace(findUnits, ''));
};

const buildFloatParser = curry((sign, value) =>
  parseFloat(`${sign}${value.replace(sign, '')}`));

const parsePositive = buildFloatParser('+');
const parseNegative = buildFloatParser('-');

const findTimeUnits = (stringComponent) => {
  const matchTimeUnits = new RegExp('[+-]?[0-9]+:[0-9]+:[0-9]+');

  const matchedUnit = stringComponent.toLowerCase().match(matchTimeUnits);
  if (!matchedUnit) { return 0; }

  const parse = matchedUnit[0][0] === '-' ? parseNegative : parsePositive;
  const [hours, minutes, seconds] = matchedUnit[0].split(':').map(parse);
  return { hours, minutes, seconds };
};

/**
 * Converts a postgres duration to an ISO8601 duration
 * @param postgresString {string} - a postgres interval string
 * @returns {string} - an ISO8601 duration string
 * @example
 * fromPostgres('1 mons 01:02:03') // => 'P1MT1H2M3S'
 */
export const fromPostgres = (postgresString) => toIso({
  years: findExtendedUnit(postgresString, 'years year y'.split(' ')),
  months: findExtendedUnit(postgresString, 'months month mons mon'.split(' ')),
  days: findExtendedUnit(postgresString, 'days day d'.split(' ')),
  ...findTimeUnits(postgresString),
});

export const fromPostgresVerbose = (postgresString) => toIso({
  years: findExtendedUnit(postgresString, 'years year y'.split(' ')),
  months: findExtendedUnit(postgresString, 'months month mons mon'.split(' ')),
  days: findExtendedUnit(postgresString, 'days day d'.split(' ')),
  hours: findExtendedUnit(postgresString, 'hours hour h'.split(' ')),
  minutes: findExtendedUnit(postgresString, 'minutes minute mins min m'.split(' ')),
  seconds: findExtendedUnit(postgresString, 'seconds second secs sec s'.split(' ')),
});

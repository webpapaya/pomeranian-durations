/**
 * Helpers to convert from an SQL Time interval to an ISO8601 duration. More information
 * can be found here http://www.postgresqltutorial.com/postgresql-interval/
 * @name default
 */

import { curry } from './_utils';
import { toIso } from './transformations';

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

/**
 * Converts a postgres verbose duration to an interval string
 * @param postgresString {string} - a postgres interval verbose string
 * @returns {string} - an ISO8601 duration string
 * @example
 * fromPostgresVerbose('1 mons 3 secs 1 day') // => 'P1M1DT3S'
 */
export const fromPostgresVerbose = (postgresString) => toIso({
  years: findExtendedUnit(postgresString, 'years year y'.split(' ')),
  months: findExtendedUnit(postgresString, 'months month mons mon'.split(' ')),
  days: findExtendedUnit(postgresString, 'days day d'.split(' ')),
  hours: findExtendedUnit(postgresString, 'hours hour h'.split(' ')),
  minutes: findExtendedUnit(postgresString, 'minutes minute mins min m'.split(' ')),
  seconds: findExtendedUnit(postgresString, 'seconds second secs sec s'.split(' ')),
});

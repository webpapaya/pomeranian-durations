import {
  DURATION_DESIGNATOR,
  TIME_DESIGNATOR,
  UNITS,
  DATE_UNITS,
  TIME_UNITS,
} from './constants';

import {
  findSeconds,
  findMinutes,
  findHours,
  findDays,
  findMonths,
  findWeeks,
  findYears,
} from './index';

const inArray = (array, element) => array.indexOf(element) !== -1;
const hasKey = (object, keyName) => inArray(Object.keys(object), keyName);

const buildIsoComponent = (fragments, units, includeZeroValues) => {
  return Object.keys(fragments)
    .filter((unitName) => hasKey(units, unitName))
    .sort((a, b) => {
      const sortedUnitNames = Object.keys(UNITS);
      return sortedUnitNames.indexOf(b) - sortedUnitNames.indexOf(a);
    })
    .reduce((prev, name) => {
      if (!includeZeroValues && fragments[name] === 0) { return prev; }
      const unit = units[name];
      const value = parseFloat(fragments[name]);
      return `${prev}${value}${unit}`;
    }, '');
};

const buildDateComponent = (fragments, includeZeroValues) => {
  const dateComponent = buildIsoComponent(fragments, DATE_UNITS, includeZeroValues);
  return `${DURATION_DESIGNATOR}${dateComponent}`;
};

const buildTimeComponent = (fragments, includeZeroValues) => {
  const timeComponent = buildIsoComponent(fragments, TIME_UNITS, includeZeroValues);
  return timeComponent ? `${TIME_DESIGNATOR}${timeComponent}` : '';
};

/**
 * Converts an object to an ISO duration.
 * @param fragments {object} - object containing the unit as key.
 *    (available keys: seconds, minutes, hours, days, weeks, months, years)
 * @returns {string}
 * @example
 * toIso({ seconds: 1, hours: 2 }) // => 'PT2H1S'
 */
export const toIso = (fragments, { includeZeroValues = false } = {}) => {
  const dateComponent = buildDateComponent(fragments, includeZeroValues);
  const timeComponent = buildTimeComponent(fragments, includeZeroValues);
  return `${dateComponent}${timeComponent}`;
};

/**
 * Splits all components of an ISO8601 duration into its units.
 * @param isoString {string}
 * @returns {object}
 * @example
 * toFragments('PT1H1S') // => ({ seconds: 1, minutes: 0, hours: 1, days: 0, weeks: 0, months: 0, years: 0 })
 */
export const toFragments = (isoString, { defaultValue = 0 } = {}) => {
  return {
    seconds: findSeconds(isoString) || defaultValue,
    minutes: findMinutes(isoString) || defaultValue,
    hours: findHours(isoString) || defaultValue,
    days: findDays(isoString) || defaultValue,
    weeks: findWeeks(isoString) || defaultValue,
    months: findMonths(isoString) || defaultValue,
    years: findYears(isoString) || defaultValue,
  };
};

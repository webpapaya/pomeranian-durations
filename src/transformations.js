import {
  DURATION_DESIGNATOR,
  TIME_DESIGNATOR,
  UNITS,
  DATE_UNITS,
  TIME_UNITS,
  UNIT_NAMES_LIST,
} from './constants';

import {
  findSeconds,
  findMinutes,
  findHours,
  findDays,
  findMonths,
  findWeeks,
  findYears,
} from './find';

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
 * @param isoString {string|undefined|null}
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


/**
 * Returns all non 0 unit names from a given ISO8601 duration ordered from lowest to highest
 * @param isoString {string|undefined|null}
 * @returns {String[]}
 * @example
 * unitNamesAsc('PT1H1S') // => ['seconds', 'hours']
 */
export const unitNamesAsc = (isoString) => {
  return Object.entries(toFragments(isoString))
    .filter((entry) => entry[1] !== 0)
    .map(([unitName]) => unitName)
    .sort((unitName) => UNIT_NAMES_LIST.indexOf(unitName));
};

/**
 * Returns all non 0 unit names from a given ISO8601 duration ordered from highest to lowest
 * @param isoString {string|undefined|null}
 * @returns {String[]}
 * @example
 * unitNamesDesc('PT1H1S') // => ['hours', 'seconds']
 */
export const unitNamesDesc = (isoString) => {
  return unitNamesAsc(isoString).reverse();
};

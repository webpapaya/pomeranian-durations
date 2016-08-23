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

const buildIsoComponent = (fragments, units) => {
  return Object.keys(fragments)
    .filter((unitName) => hasKey(units, unitName))
    .sort((a, b) => {
      const sortedUnitNames = Object.keys(UNITS);
      return sortedUnitNames.indexOf(b) - sortedUnitNames.indexOf(a);
    })
    .reduce((prev, name) => {
      if (fragments[name] === 0) { return prev; }
      const unit = units[name];
      const value = parseFloat(fragments[name]);
      return `${prev}${value}${unit}`;
    }, '');
};

const buildDateComponent = (fragments) => {
  const dateComponent = buildIsoComponent(fragments, DATE_UNITS);
  return `${DURATION_DESIGNATOR}${dateComponent}`;
};

const buildTimeComponent = (fragments) => {
  const timeComponent = buildIsoComponent(fragments, TIME_UNITS);
  return timeComponent ? `${TIME_DESIGNATOR}${timeComponent}` : '';
};

export const toIso = (fragments) => {
  const dateComponent = buildDateComponent(fragments);
  const timeComponent = buildTimeComponent(fragments);
  return `${dateComponent}${timeComponent}`;
};

export const toFragments = (isoString) => {
  return {
    seconds: findSeconds(isoString),
    minutes: findMinutes(isoString),
    hours: findHours(isoString),
    days: findDays(isoString),
    weeks: findWeeks(isoString),
    months: findMonths(isoString),
    years: findYears(isoString),
  };
};

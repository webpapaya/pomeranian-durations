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
import { fromIso } from "./wrapper";

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

export const toIso = (fragments, { includeZeroValues = false } = {}) => {
  const dateComponent = buildDateComponent(fragments, includeZeroValues);
  const timeComponent = buildTimeComponent(fragments, includeZeroValues);
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

export const fromFragments = (fragments) => {
  const isoString = toIso(fragments);
  return fromIso(isoString);
};

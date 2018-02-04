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

  if (!matchedUnit) { return 0; }
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

export const findSeconds = (isoString) => findTimeUnit(UNITS.seconds, isoString);
export const findMinutes = (isoString) => findTimeUnit(UNITS.minutes, isoString);
export const findHours = (isoString) => findTimeUnit(UNITS.hours, isoString);

export const findDays = (isoString) => findDateUnit(UNITS.days, isoString);
export const findWeeks = (isoString) => findDateUnit(UNITS.weeks, isoString);
export const findMonths = (isoString) => findDateUnit(UNITS.months, isoString);
export const findYears = (isoString) => findDateUnit(UNITS.years, isoString);

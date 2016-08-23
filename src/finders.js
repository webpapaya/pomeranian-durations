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

const findTimeUnit = (isoString, unit) => {
  const timeComponent = extractTimeComponents(isoString || '');
  return findUnit(timeComponent, unit);
};

const findDateUnit = (isoString, unit) => {
  const dateComponent = extractDateComponents(isoString || '');
  return findUnit(dateComponent, unit);
};

export const findSeconds = (isoString) => findTimeUnit(isoString, UNITS.seconds);
export const findMinutes = (isoString) => findTimeUnit(isoString, UNITS.minutes);
export const findHours = (isoString) => findTimeUnit(isoString, UNITS.hours);

export const findDays = (isoString) => findDateUnit(isoString, UNITS.days);
export const findWeeks = (isoString) => findDateUnit(isoString, UNITS.weeks);
export const findMonths = (isoString) => findDateUnit(isoString, UNITS.months);
export const findYears = (isoString) => findDateUnit(isoString, UNITS.years);

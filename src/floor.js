import { toFragments, toIso } from './transformations';
import { INVALID_DURATION, UNIT_NAMES } from './constants';
import { isInvalid } from './validate';

const ALL_UNITS = [
  UNIT_NAMES.seconds,
  UNIT_NAMES.minutes,
  UNIT_NAMES.hours,
  UNIT_NAMES.days,
  UNIT_NAMES.weeks,
  UNIT_NAMES.months,
  UNIT_NAMES.years,
];

const createFloorFnFor = (unit) => (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }

  const fragments = toFragments(isoString);
  const unitsToBeNullified = ALL_UNITS.slice(0, ALL_UNITS.indexOf(unit));
  const flooredFragments = unitsToBeNullified.reduce((acc, currentUnit) => {
    acc[currentUnit] = 0; // eslint-disable-line no-param-reassign
    return acc;
  }, fragments);

  flooredFragments[unit] = Math.floor(fragments[unit]);
  return toIso(flooredFragments);
};

/**
 * Floor a duration by a given granularity.
 * @category floor
 * @param granularity {string} - ISO8601 duration
 * @param isoString {string} - ISO8601 duration
 * @example
 * floor('PT2s', 'PT5S') // => PT4S
 * floor('PT3s', 'PT5S') // => PT3S
 * floor('PT4s', 'PT5S') // => PT4S
 */
export const floor = (granularity, isoString) => {
  const durationAsFragments = toFragments(isoString, { defaultValue: null });
  const granularityAsFragments = toFragments(granularity, { defaultValue: null });

  const flooredFragments = ALL_UNITS.reduce((acc, currentUnit) => {
    if (!durationAsFragments[currentUnit] || !granularityAsFragments[currentUnit]) { return acc; }
    acc[currentUnit] = durationAsFragments[currentUnit] - // eslint-disable-line no-param-reassign
      durationAsFragments[currentUnit] % granularityAsFragments[currentUnit];

    return acc;
  }, {});

  return toIso(flooredFragments);
};

/**
 * Floor a given ISO duration to the current second.
 * @category floor
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * floorSeconds('P1.1Y') // => P1S
 */
export const floorSeconds = createFloorFnFor(UNIT_NAMES.seconds);

/**
 * Floor a given ISO duration to the current minute.
 * @category floor
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * floorMinutes('P1.1Y') // => P1M
 */
export const floorMinutes = createFloorFnFor(UNIT_NAMES.minutes);

/**
 * Floor a given ISO duration to the current hour.
 * @category floor
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * floorHours('P1.1Y') // => P1H
 */
export const floorHours = createFloorFnFor(UNIT_NAMES.hours);

/**
 * Floor a given ISO duration to the current day.
 * @category floor
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * floorDays('P1.1Y') // => P1D
 */
export const floorDays = createFloorFnFor(UNIT_NAMES.days);

/**
 * Floor a given ISO duration to the current week.
 * @category floor
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * floorWeeks('P1.1Y') // => P1W
 */
export const floorWeeks = createFloorFnFor(UNIT_NAMES.weeks);

/**
 * Floor a given ISO duration to the current month.
 * @category floor
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * floorMonths('P1.1Y') // => P1M
 */
export const floorMonths = createFloorFnFor(UNIT_NAMES.months);

/**
 * Floor a given ISO duration to the current year.
 * @category floor
 * @param isoDuration {string} - ISO8601 duration
 * @example
 * floorYears('P1.1Y') // => P1Y
 */
export const floorYears = createFloorFnFor(UNIT_NAMES.years);

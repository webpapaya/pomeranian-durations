import { toFragments, toIso } from './transformations';
import { UNIT_NAMES } from './constants';

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
  const fragments = toFragments(isoString);
  const unitsToBeNullified = ALL_UNITS.slice(0, ALL_UNITS.indexOf(unit));
  const flooredFragments = unitsToBeNullified.reduce((acc, currentUnit) => {
    acc[currentUnit] = 0; // eslint-disable-line no-param-reassign
    return acc;
  }, fragments);

  flooredFragments[unit] = Math.floor(fragments[unit]);
  return toIso(flooredFragments);
};

export const floorSeconds = createFloorFnFor(UNIT_NAMES.seconds);
export const floorMinutes = createFloorFnFor(UNIT_NAMES.minutes);
export const floorHours = createFloorFnFor(UNIT_NAMES.hours);
export const floorDays = createFloorFnFor(UNIT_NAMES.days);
export const floorWeeks = createFloorFnFor(UNIT_NAMES.weeks);
export const floorMonths = createFloorFnFor(UNIT_NAMES.months);
export const floorYears = createFloorFnFor(UNIT_NAMES.years);

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

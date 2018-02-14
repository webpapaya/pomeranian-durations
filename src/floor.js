import { toFragments, toIso } from "./transformations";
import { UNIT_NAMES } from "./constants";

const ALL_UNITS = [
  UNIT_NAMES.seconds,
  UNIT_NAMES.minutes,
  UNIT_NAMES.hours,
  UNIT_NAMES.days,
  UNIT_NAMES.weeks,
  UNIT_NAMES.months,
  UNIT_NAMES.years,
];

const floorUnits = (unit) => (isoString) => {
  const fragments = toFragments(isoString);
  const unitsToBeNullified = ALL_UNITS.slice(0, ALL_UNITS.indexOf(unit));
  const flooredFragments = unitsToBeNullified.reduce((acc, currentUnit) => {
    acc[currentUnit] = 0;
    return acc;
  }, fragments);

  flooredFragments[unit] = Math.floor(fragments[unit]);
  return toIso(flooredFragments);
};

export const floorSeconds = floorUnits(UNIT_NAMES.seconds);
export const floorMinutes = floorUnits(UNIT_NAMES.minutes);
export const floorHours = floorUnits(UNIT_NAMES.hours);
export const floorDays = floorUnits(UNIT_NAMES.days);
export const floorWeeks = floorUnits(UNIT_NAMES.weeks);
export const floorMonths = floorUnits(UNIT_NAMES.months);
export const floorYears = floorUnits(UNIT_NAMES.years);

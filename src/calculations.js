import { toIso, toFragments } from './transformations';

import { UNIT_NAMES } from './constants';

const addUnit = (isoString, amount, unit) => {
  const fragments = toFragments(isoString);
  fragments[unit] += amount;
  return toIso(fragments);
};

export const addMillisecond = (isoString, amount) =>
  addUnit(isoString, amount / (10 ** 3), UNIT_NAMES.seconds);

export const addMicrosecond = (isoString, amount) =>
  addUnit(isoString, amount / (10 ** 6), UNIT_NAMES.seconds);

export const addSeconds = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.seconds);
export const addMinutes = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.minutes);
export const addHours = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.hours);

export const addDays = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.days);
export const addWeeks = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.weeks);
export const addMonths = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.months);
export const addYears = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.years);

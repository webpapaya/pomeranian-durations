import { UNIT_NAMES } from './constants';
import { toIso, toFragments } from './index';

const addUnit = (isoString, amount, unit) => {
  const fragments = toFragments(isoString);
  fragments[unit] += amount;
  return toIso(fragments);
};

export const addMilliseconds = (isoString, amount) =>
  addUnit(isoString, amount / (10 ** 3), UNIT_NAMES.seconds);

export const addMicroseconds = (isoString, amount) =>
  addUnit(isoString, amount / (10 ** 6), UNIT_NAMES.seconds);

export const addSeconds = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.seconds);
export const addMinutes = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.minutes);
export const addHours = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.hours);
export const addDays = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.days);
export const addWeeks = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.weeks);
export const addMonths = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.months);
export const addYears = (isoString, amount) => addUnit(isoString, amount, UNIT_NAMES.years);

export const subtractMilliseconds = (isoString, amount) => addMilliseconds(isoString, amount * -1);
export const subtractMicroseconds = (isoString, amount) => addMicroseconds(isoString, amount * -1);
export const subtractSeconds = (isoString, amount) => addSeconds(isoString, amount * -1);
export const subtractMinutes = (isoString, amount) => addMinutes(isoString, amount * -1);
export const subtractHours = (isoString, amount) => addHours(isoString, amount * -1);
export const subtractDays = (isoString, amount) => addDays(isoString, amount * -1);
export const subtractWeeks = (isoString, amount) => addWeeks(isoString, amount * -1);
export const subtractMonths = (isoString, amount) => addMonths(isoString, amount * -1);
export const subtractYears = (isoString, amount) => addYears(isoString, amount * -1);

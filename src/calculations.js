import { UNIT_NAMES } from './constants';
import { toIso, toFragments } from './index';

const addUnit = (isoString, amount, unit) => {
  const fragments = toFragments(isoString);
  fragments[unit] += amount;
  return toIso(fragments);
};

export const addMilliseconds = (amount, isoString) =>
  addUnit(isoString, amount / (10 ** 3), UNIT_NAMES.seconds);

export const addMicroseconds = (amount, isoString) =>
  addUnit(isoString, amount / (10 ** 6), UNIT_NAMES.seconds);

export const addSeconds = (amount, isoString) =>
  addUnit(isoString, amount, UNIT_NAMES.seconds);

export const addMinutes = (amount, isoString) =>
  addUnit(isoString, amount, UNIT_NAMES.minutes);

export const addHours = (amount, isoString) =>
  addUnit(isoString, amount, UNIT_NAMES.hours);

export const addDays = (amount, isoString) =>
  addUnit(isoString, amount, UNIT_NAMES.days);

export const addWeeks = (amount, isoString) =>
  addUnit(isoString, amount, UNIT_NAMES.weeks);

export const addMonths = (amount, isoString) =>
  addUnit(isoString, amount, UNIT_NAMES.months);

export const addYears = (amount, isoString) =>
  addUnit(isoString, amount, UNIT_NAMES.years);


export const subtractMilliseconds = (amount, isoString) =>
  addMilliseconds(amount * -1, isoString);

export const subtractMicroseconds = (amount, isoString) =>
  addMicroseconds(amount * -1, isoString);

export const subtractSeconds = (amount, isoString) =>
  addSeconds(amount * -1, isoString);

export const subtractMinutes = (amount, isoString) =>
  addMinutes(amount * -1, isoString);

export const subtractHours = (amount, isoString) =>
  addHours(amount * -1, isoString);

export const subtractDays = (amount, isoString) =>
  addDays(amount * -1, isoString);

export const subtractWeeks = (amount, isoString) =>
  addWeeks(amount * -1, isoString);

export const subtractMonths = (amount, isoString) =>
  addMonths(amount * -1, isoString);

export const subtractYears = (amount, isoString) =>
  addYears(amount * -1, isoString);


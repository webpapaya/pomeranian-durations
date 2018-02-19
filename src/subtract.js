import curry from 'lodash.curry';
import {
  addDays,
  addHours,
  addMicroseconds,
  addMilliseconds,
  addMinutes,
  addMonths,
  addSeconds,
  addWeeks,
  addYears,
} from './add';

export const subtractMilliseconds = curry((amount, isoString) =>
  addMilliseconds(amount * -1, isoString));

export const subtractMicroseconds = curry((amount, isoString) =>
  addMicroseconds(amount * -1, isoString));

export const subtractSeconds = curry((amount, isoString) =>
  addSeconds(amount * -1, isoString));

export const subtractMinutes = curry((amount, isoString) =>
  addMinutes(amount * -1, isoString));

export const subtractHours = curry((amount, isoString) =>
  addHours(amount * -1, isoString));

export const subtractDays = curry((amount, isoString) =>
  addDays(amount * -1, isoString));

export const subtractWeeks = curry((amount, isoString) =>
  addWeeks(amount * -1, isoString));

export const subtractMonths = curry((amount, isoString) =>
  addMonths(amount * -1, isoString));

export const subtractYears = curry((amount, isoString) =>
  addYears(amount * -1, isoString));

import { curry } from './curry';
import {
  add,
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

import { toFragments, toIso } from './transformations';

export const subtract = curry((firstDuration, secondDurations) => {
  const secondFragments = toFragments(secondDurations);
  const negativeFragments = Object.keys(secondFragments).reduce((acc, unit) => {
    acc[unit] = secondFragments[unit] * -1; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
  return add(firstDuration, toIso(negativeFragments));
});

export const subtractMilliseconds = curry((amount, isoString) => addMilliseconds(amount * -1, isoString));
export const subtractMicroseconds = curry((amount, isoString) => addMicroseconds(amount * -1, isoString));
export const subtractSeconds = curry((amount, isoString) => addSeconds(amount * -1, isoString));
export const subtractMinutes = curry((amount, isoString) => addMinutes(amount * -1, isoString));
export const subtractHours = curry((amount, isoString) => addHours(amount * -1, isoString));

export const subtractDays = curry((amount, isoString) => addDays(amount * -1, isoString));
export const subtractWeeks = curry((amount, isoString) => addWeeks(amount * -1, isoString));
export const subtractMonths = curry((amount, isoString) => addMonths(amount * -1, isoString));
export const subtractYears = curry((amount, isoString) => addYears(amount * -1, isoString));

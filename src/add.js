import { curry } from './curry';
import { toIso, toFragments } from './index';

export const add = curry((firstIsoString, secondIsoString) => {
  const firstFragments = toFragments(firstIsoString);
  const secondFragments = toFragments(secondIsoString);
  const updatedFragments = Object.keys(firstFragments).reduce((acc, unit) => {
    acc[unit] = firstFragments[unit] + secondFragments[unit]; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
  return toIso(updatedFragments);
});

export const addMilliseconds = curry((amount, isoString) => add(isoString, `PT${amount / (10 ** 3)}S`));
export const addMicroseconds = curry((amount, isoString) => add(isoString, `PT${amount / (10 ** 6)}S`));
export const addSeconds = curry((amount, isoString) => add(isoString, `PT${amount}S`));
export const addMinutes = curry((amount, isoString) => add(isoString, `PT${amount}M`));
export const addHours = curry((amount, isoString) => add(isoString, `PT${amount}H`));

export const addDays = curry((amount, isoString) => add(isoString, `P${amount}D`));
export const addWeeks = curry((amount, isoString) => add(isoString, `P${amount}W`));
export const addMonths = curry((amount, isoString) => add(isoString, `P${amount}M`));
export const addYears = curry((amount, isoString) => add(isoString, `P${amount}Y`));

import { addSeconds } from './calculations';
import { toIso } from './transformations';

import {
  asMicroseconds,
  asMilliseconds,
  asSeconds,
  asMinutes,
  asHours,
} from './conversions';

export const fromFragments = (fragments) => {
  const isoString = toIso(fragments);
  return fromIso(isoString);
};

export const fromIso = (isoString) => {
  return {
    asMicroseconds: () => asMicroseconds(isoString),
    asMilliseconds: () => asMilliseconds(isoString),
    asSeconds: () => asSeconds(isoString),
    asMinutes: () => asMinutes(isoString),
    asHours: () => asHours(isoString),

    findSeconds: () => findSeconds(isoString),
    findMinutes: () => findMinutes(isoString),
    findHours: () => findHours(isoString),
    findDays: () => findDays(isoString),
    findYears: () => findYears(isoString),
    findMonths: () => findMonths(isoString),

    addSeconds: (amount) => addSeconds(isoString, amount),

    toIso: () => isoString,
  };
};

export {
  addMicrosecond,
  addMillisecond,
  addSeconds,
  addMinutes,
  addHours,
  addWeeks,
  addMonths,
  addYears,
} from './calculations';

export {
  containsDateUnits,

  findSeconds,
  findMinutes,
  findHours,
  findDays,
  findWeeks,
  findMonths,
  findYears,
} from './finders';

export {
  asMicroseconds,
  asMilliseconds,
  asSeconds,
  asMinutes,
  asHours,
} from './conversions';

export {
  toFragments,
  toIso,
} from './transformations';

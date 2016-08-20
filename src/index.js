import { addSeconds } from './calculations';
import { toIso } from './transformations';

import {
  asMicroseconds,
  asMilliseconds,
  asSeconds,
  asMinutes,
  asHours,
} from './conversions';

const toInt = (number) => parseInt(number, 10);

const normalize = (isoString) => {
  const microseconds = asMicroseconds(isoString);
  const milliseconds = toInt(microseconds / 1000);
  const seconds = toInt(milliseconds / 1000);
  const minutes = toInt(seconds / 60);
  const hours = toInt(minutes / 60);

  return {
    microseconds: microseconds - (milliseconds * 1000),
    milliseconds: milliseconds - (seconds * 1000),
    seconds: seconds - (minutes * 60),
    minutes: minutes - (hours * 60),
    hours: hours,
  };
};



const toNormalizedIso = (isoString) => {
  const durations = normalize(isoString);
  return toIso(durations);
};

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
    toNormalizedIso: () => toNormalizedIso(isoString),
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

import {
  findSeconds,
  findMinutes,
  findHours,
  findDays,
  findWeeks,
  findMonths,
  findYears,

  asMicroseconds,
  asMilliseconds,
  asSeconds,
  asMinutes,
  asHours,

  addMicroseconds,
  addMilliseconds,
  addSeconds,
  addMinutes,
  addDays,
  addHours,
  addWeeks,
  addMonths,
  addYears,

  subtractMilliseconds,
  subtractMicroseconds,
  subtractSeconds,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractWeeks,
  subtractMonths,
  subtractYears,

  toIso,
  toFragments,
} from './index';

export const fromFragments = (fragments) => {
  const isoString = toIso(fragments);
  return fromIso(isoString);
};

export const fromIso = (isoString) => {
  return {
    toIso: () => isoString,
    toFragments: () => toFragments(isoString),

    findSeconds: () => findSeconds(isoString),
    findMinutes: () => findMinutes(isoString),
    findHours: () => findHours(isoString),
    findDays: () => findDays(isoString),
    findWeeks: () => findWeeks(isoString),
    findMonths: () => findMonths(isoString),
    findYears: () => findYears(isoString),

    asMicroseconds: () => asMicroseconds(isoString),
    asMilliseconds: () => asMilliseconds(isoString),
    asSeconds: () => asSeconds(isoString),
    asMinutes: () => asMinutes(isoString),
    asHours: () => asHours(isoString),

    addMicroseconds: (amount) => fromIso(addMicroseconds(isoString, amount)),
    addMilliseconds: (amount) => fromIso(addMilliseconds(isoString, amount)),
    addSeconds: (amount) => fromIso(addSeconds(isoString, amount)),
    addMinutes: (amount) => fromIso(addMinutes(isoString, amount)),
    addHours: (amount) => fromIso(addHours(isoString, amount)),
    addDays: (amount) => fromIso(addDays(isoString, amount)),
    addWeeks: (amount) => fromIso(addWeeks(isoString, amount)),
    addMonths: (amount) => fromIso(addMonths(isoString, amount)),
    addYears: (amount) => fromIso(addYears(isoString, amount)),

    subtractMilliseconds: (amount) => fromIso(subtractMilliseconds(isoString, amount)),
    subtractMicroseconds: (amount) => fromIso(subtractMicroseconds(isoString, amount)),
    subtractSeconds: (amount) => fromIso(subtractSeconds(isoString, amount)),
    subtractMinutes: (amount) => fromIso(subtractMinutes(isoString, amount)),
    subtractHours: (amount) => fromIso(subtractHours(isoString, amount)),
    subtractDays: (amount) => fromIso(subtractDays(isoString, amount)),
    subtractWeeks: (amount) => fromIso(subtractWeeks(isoString, amount)),
    subtractMonths: (amount) => fromIso(subtractMonths(isoString, amount)),
    subtractYears: (amount) => fromIso(subtractYears(isoString, amount)),
  };
};

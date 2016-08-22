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
} from './index';

export const fromIso = (isoString) => {
  return {
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

    addMicroseconds: () => fromIso(addMicroseconds(isoString)),
    addMilliseconds: () => fromIso(addMilliseconds(isoString)),
    addSeconds: () => fromIso(addSeconds(isoString)),
    addMinutes: () => fromIso(addMinutes(isoString)),
    addHours: () => fromIso(addHours(isoString)),
    addDays: () => fromIso(addDays(isoString)),
    addWeeks: () => fromIso(addWeeks(isoString)),
    addMonths: () => fromIso(addMonths(isoString)),
    addYears: () => fromIso(addYears(isoString)),

    subtractMilliseconds: () => fromIso(subtractMilliseconds(isoString)),
    subtractMicroseconds: () => fromIso(subtractMicroseconds(isoString)),
    subtractSeconds: () => fromIso(subtractSeconds(isoString)),
    subtractMinutes: () => fromIso(subtractMinutes(isoString)),
    subtractHours: () => fromIso(subtractHours(isoString)),
    subtractDays: () => fromIso(subtractDays(isoString)),
    subtractWeeks: () => fromIso(subtractWeeks(isoString)),
    subtractMonths: () => fromIso(subtractMonths(isoString)),
    subtractYears: () => fromIso(subtractYears(isoString)),
  };
};

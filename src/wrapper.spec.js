import { assertThat, equalTo, not, throws } from 'hamjest';
import * as finders from './finders';
import * as conversions from './conversions';
import * as calculations from './calculations';

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

    addMicroseconds: () => addMicroseconds(isoString),
    addMilliseconds: () => addMilliseconds(isoString),
    addSeconds: () => addSeconds(isoString),
    addMinutes: () => addMinutes(isoString),
    addHours: () => addHours(isoString),
    addDays: () => addHours(isoString),
    addWeeks: () => addWeeks(isoString),
    addMonths: () => addMonths(isoString),
    addYears: () => addYears(isoString),
  };
};

describe('fromIso wrapper', () => {
  describe('conversions', () => {
    Object.keys(conversions)
      .filter((method) => method.startsWith('as'))
      .forEach((method) => {
        it(`${method} works`, () => assertThat(
          () => fromIso('PT1S')[method](), not(throws())));
      });
  });

  describe('calculations', () => {
    Object.keys(calculations)
      .filter((method) => method.startsWith('add'))
      .forEach((method) => {
        it(`${method} works`, () => assertThat(
          () => fromIso('PT1S')[method](), not(throws())));
      });
  });

  describe('finders', () => {
    Object.keys(finders)
      .filter((method) => method.startsWith('find'))
      .forEach((method) => {
        it(`${method} works`, () => assertThat(
          () => fromIso('PT1S')[method](), not(throws())));
    });
  });
});

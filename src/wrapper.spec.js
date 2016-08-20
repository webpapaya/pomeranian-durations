import { assertThat, equalTo, not, throws } from 'hamjest';
import * as finders from './finders';


import {
  findSeconds,
  findMinutes,
  findHours,
  findDays,
  findWeeks,
  findMonths,
  findYears,
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
  };
};

describe('fromIso wrapper', () => {
  describe('finders', () => {
    Object.keys(finders)
      .filter((method) => method.startsWith('find'))
      .forEach((method) => {
        it(`${method} works`, () => assertThat(
          () => fromIso('PT1S')[method](), not(throws())));
    });
  });
});

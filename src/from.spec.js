import { assertThat, equalTo } from 'hamjest';
import {
  fromSeconds,
  fromMinutes,
  fromHours,
  fromDays,
  fromWeeks,
  fromMonths,
  fromYears,
} from './from';

describe('from<unit>', () => {
  [
    { fn: fromSeconds, unit: 'seconds', input: 1, result: 'PT1S' },
    { fn: fromMinutes, unit: 'minutes', input: 1, result: 'PT1M' },
    { fn: fromHours, unit: 'hours', input: 1, result: 'PT1H' },
    { fn: fromDays, unit: 'days', input: 1, result: 'P1D' },
    { fn: fromWeeks, unit: 'weeks', input: 1, result: 'P1W' },
    { fn: fromMonths, unit: 'weeks', input: 1, result: 'P1M' },
    { fn: fromYears, unit: 'weeks', input: 1, result: 'P1Y' },
  ].forEach(({ fn, unit, input, result }) => {
    it(`from ${unit} converts ${input} to ${result}`, () => {
      assertThat(fn(input), equalTo(result));
    });
  });
});

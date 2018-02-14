import { assertThat, equalTo } from 'hamjest';
import {
  floorSeconds,
  floorMinutes,
  floorHours,
  floorDays,
  floorWeeks,
  floorMonths,
  floorYears,
} from './floor';

describe('floor', () => {
  [
    { name: 'floorSeconds', fn: floorSeconds, input: 'PT0.1S', output: 'P' },
    { name: 'floorSeconds', fn: floorSeconds, input: 'PT1.1S', output: 'PT1S' },
    { name: 'floorMinutes', fn: floorMinutes, input: 'PT1M1.123S', output: 'PT1M' },
    { name: 'floorHours', fn: floorHours, input: 'PT1H1M1.123S', output: 'PT1H' },
    { name: 'floorDays', fn: floorDays, input: 'P1DT1H1M1.123S', output: 'P1D' },
    { name: 'floorWeeks', fn: floorWeeks, input: 'P1W1DT1H1M1.123S', output: 'P1W' },
    { name: 'floorMonths', fn: floorMonths, input: 'P1M1W1DT1H1M1.123S', output: 'P1M' },
    { name: 'floorYears', fn: floorYears, input: 'P1Y1M1W1DT1H1M1.123S', output: 'P1Y' },
  ].forEach(({ name, fn, input, output }) => {
    it(`${name} converts ${input} to ${output}`, () => {
      assertThat(fn(input), equalTo(output));
    });
  });
});




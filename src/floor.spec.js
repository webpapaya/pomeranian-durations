import { assertThat, equalTo } from 'hamjest';
import {
  floorSeconds,
  floorMinutes,
  floorHours,
  floorDays,
  floorWeeks,
  floorMonths,
  floorYears,
  floor,
} from './floor';

describe('floor<Unit>', () => {
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

describe('floor<Granularity, Unit>', () => {
  [
    { input: 'PT3S', granularity: 'PT2S', output: 'PT2S' },
    { input: 'PT0S', granularity: 'PT2S', output: 'P' },
    { input: 'PT3M1S', granularity: 'PT2M', output: 'PT2M' },
    { input: 'PT3M1S', granularity: 'PT3M', output: 'PT3M' },
    { input: 'PT0M', granularity: 'PT3M', output: 'P' },
    { input: 'PT1H1M', granularity: 'PT1H', output: 'PT1H' },
  ].forEach(({ input, granularity, output }) => {
    it(`floor converts ${input} to ${output}`, () => {
      assertThat(floor(granularity, input), equalTo(output));
    });
  });
});

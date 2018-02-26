import { assertThat, equalTo } from 'hamjest';
import {
  ceil,
  ceilSeconds,
  ceilMinutes,
  ceilHours,
  ceilDays,
  ceilWeeks,
  ceilMonths,
  ceilYears,
} from './ceil';
import { INVALID_DURATION } from "./constants";

describe('ceil<Unit>', () => {
  [
    { name: 'ceilSeconds', fn: ceilSeconds, input: 'PT1.123S', output: 'PT2S' },
    { name: 'ceilSeconds', fn: ceilSeconds, input: 'I\'m invalid', output: INVALID_DURATION },
    { name: 'ceilMinutes', fn: ceilMinutes, input: 'PT1M1.123S', output: 'PT2M' },
    { name: 'ceilMinutes', fn: ceilMinutes, input: 'I\'m invalid', output: INVALID_DURATION },
    { name: 'ceilHours', fn: ceilHours, input: 'PT1H1M1.123S', output: 'PT2H' },
    { name: 'ceilHours', fn: ceilHours, input: 'I\'m invalid', output: INVALID_DURATION },
    { name: 'ceilDays', fn: ceilDays, input: 'P1DT1H1M1.123S', output: 'P2D' },
    { name: 'ceilDays', fn: ceilDays, input: 'I\'m invalid', output: INVALID_DURATION },
    { name: 'ceilWeeks', fn: ceilWeeks, input: 'P1W1DT1H1M1.123S', output: 'P2W' },
    { name: 'ceilWeeks', fn: ceilWeeks, input: 'I\'m invalid', output: INVALID_DURATION },
    { name: 'ceilMonths', fn: ceilMonths, input: 'P1M1W1DT1H1M1.123S', output: 'P2M' },
    { name: 'ceilMonths', fn: ceilMonths, input: 'I\'m invalid', output: INVALID_DURATION },
    { name: 'ceilYears', fn: ceilYears, input: 'P1Y1M1W1DT1H1M1.123S', output: 'P2Y' },
    { name: 'ceilYears', fn: ceilYears, input: 'I\'m invalid', output: INVALID_DURATION },
  ].forEach(({ name, fn, input, output }) => {
    it(`${name} converts ${input} to ${output}`, () => {
      assertThat(fn(input), equalTo(output));
    });
  });
});

describe('ceil<Granularity, Unit>', () => {
  [
    { granularity: 'PT2S', input: 'PT3S', output: 'PT4S' },
  ].forEach(({ granularity, input, output }) => {
    it(`ceil with granularity ${granularity} converts ${input} to ${output}`, () => {
      assertThat(ceil(granularity, input), equalTo(output));
    });
  });
});


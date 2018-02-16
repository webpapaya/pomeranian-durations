import { assertThat, equalTo } from 'hamjest';
import {
  ceilSeconds,
  ceilMinutes,
  ceilHours,
  ceilDays,
  ceilWeeks,
  ceilMonths,
  ceilYears,
} from './ceil';

[
  { name: 'ceilSeconds', fn: ceilSeconds, input: 'PT1.123S', output: 'PT2S' },
  { name: 'ceilMinutes', fn: ceilMinutes, input: 'PT1M1.123S', output: 'PT2M' },
  { name: 'ceilHours', fn: ceilHours, input: 'PT1H1M1.123S', output: 'PT2H' },
  { name: 'ceilDays', fn: ceilDays, input: 'P1DT1H1M1.123S', output: 'P2D' },
  { name: 'ceilWeeks', fn: ceilWeeks, input: 'P1W1DT1H1M1.123S', output: 'P2W' },
  { name: 'ceilMonths', fn: ceilMonths, input: 'P1M1W1DT1H1M1.123S', output: 'P2M' },
  { name: 'ceilYears', fn: ceilYears, input: 'P1Y1M1W1DT1H1M1.123S', output: 'P2Y' },
].forEach(({ name, fn, input, output }) => {
  it(`${name} converts ${input} to ${output}`, () => {
    assertThat(fn(input), equalTo(output));
  });
});

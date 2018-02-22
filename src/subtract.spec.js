import { assertThat, equalTo } from 'hamjest';
import {
  subtractMilliseconds,
  subtractMicroseconds,
  subtractSeconds,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractWeeks,
  subtractMonths,
  subtractYears,
} from './subtract';

[
  { name: 'subtractMicroseconds', fn: subtractMicroseconds, amount: 1, duration: 'PT0S', result: 'PT-0.000001S' },
  { name: 'subtractMilliseconds', fn: subtractMilliseconds, amount: 1, duration: 'PT0S', result: 'PT-0.001S' },
  { name: 'subtractSeconds', fn: subtractSeconds, amount: 1, duration: 'PT0S', result: 'PT-1S' },
  { name: 'subtractSeconds', fn: subtractSeconds, amount: 61, duration: 'PT0S', result: 'PT-61S' },
  { name: 'subtractMinutes', fn: subtractMinutes, amount: 1, duration: 'PT0M', result: 'PT-1M' },
  { name: 'subtractHours', fn: subtractHours, amount: 1, duration: 'PT0H', result: 'PT-1H' },
  { name: 'subtractDays', fn: subtractDays, amount: 1, duration: 'P0D', result: 'P-1D' },
  { name: 'subtractWeeks', fn: subtractWeeks, amount: 1, duration: 'P0W', result: 'P-1W' },
  { name: 'subtractMonths', fn: subtractMonths, amount: 1, duration: 'P0M', result: 'P-1M' },
  { name: 'subtractYears', fn: subtractYears, amount: 1, duration: 'P0Y', result: 'P-1Y' },
].forEach(({ name, fn, amount, duration, result }) => {
  it(`${name} ${amount} to ${duration} results in ${result}`, () => {
    assertThat(fn(amount, duration), equalTo(result));
  });
});



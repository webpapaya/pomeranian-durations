import { assertThat, equalTo } from 'hamjest';
import {
  add,
  addMicroseconds,
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addWeeks,
  addMonths,
  addYears,
} from './add';

[
  { name: 'addMicroseconds', fn: addMicroseconds, isoString: 'PT0S', amount: 1, result: 'PT0.000001S' },
  { name: 'addMilliseconds', fn: addMilliseconds, isoString: 'PT0S', amount: 1, result: 'PT0.001S' },
  { name: 'addSeconds', fn: addSeconds, isoString: 'PT0S', amount: 1, result: 'PT1S' },
  { name: 'addSeconds', fn: addSeconds, isoString: 'PT0S', amount: 61, result: 'PT61S' },
  { name: 'addMinutes', fn: addMinutes, isoString: 'PT0M', amount: 1, result: 'PT1M' },
  { name: 'addHours', fn: addHours, isoString: 'PT0H', amount: 1, result: 'PT1H' },
  { name: 'addDays', fn: addDays, isoString: 'P0D', amount: 1, result: 'P1D' },
  { name: 'addWeeks', fn: addWeeks, isoString: 'P0W', amount: 1, result: 'P1W' },
  { name: 'addMonths', fn: addMonths, isoString: 'P0M', amount: 1, result: 'P1M' },
  { name: 'addYears', fn: addYears, isoString: 'P0Y', amount: 1, result: 'P1Y' },
  { name: 'add', fn: add, isoString: 'PT1S', amount: 'PT1S', result: 'PT2S'  }
].forEach(({ name, fn, isoString, amount, result }) => {
  it(`${name} ${amount} to ${isoString} results in ${result}`, () => {
    assertThat(fn(amount, isoString), equalTo(result));
  });
});

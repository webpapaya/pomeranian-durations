// @ts-ignore
import { assertThat, equalTo } from 'hamjest';
import {
  add,
  sum,
  addMicroseconds,
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  addToDate,
  INVALID_DURATION
} from 'pomeranian-durations';

[
  { name: 'addMicroseconds', fn: addMicroseconds, isoString: 'PT0S', amount: 1, result: 'PT0.000001S' },
  { name: 'addMicroseconds', fn: addMicroseconds, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },

  { name: 'addMilliseconds', fn: addMilliseconds, isoString: 'PT0S', amount: 1, result: 'PT0.001S' },
  { name: 'addMilliseconds', fn: addMilliseconds, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },

  { name: 'addSeconds', fn: addSeconds, isoString: 'PT0S', amount: 1, result: 'PT1S' },
  { name: 'addSeconds', fn: addSeconds, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },

  { name: 'addSeconds', fn: addSeconds, isoString: 'PT0S', amount: 61, result: 'PT61S' },
  { name: 'addSeconds', fn: addSeconds, isoString: 'I\'m invalid', amount: 61, result: INVALID_DURATION },

  { name: 'addMinutes', fn: addMinutes, isoString: 'PT0M', amount: 1, result: 'PT1M' },
  { name: 'addMinutes', fn: addMinutes, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },

  { name: 'addHours', fn: addHours, isoString: 'PT0H', amount: 1, result: 'PT1H' },
  { name: 'addHours', fn: addHours, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },

  { name: 'addDays', fn: addDays, isoString: 'P0D', amount: 1, result: 'P1D' },
  { name: 'addDays', fn: addDays, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },

  { name: 'addWeeks', fn: addWeeks, isoString: 'P0W', amount: 1, result: 'P1W' },
  { name: 'addWeeks', fn: addWeeks, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },

  { name: 'addMonths', fn: addMonths, isoString: 'P0M', amount: 1, result: 'P1M' },
  { name: 'addMonths', fn: addMonths, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },

  { name: 'addYears', fn: addYears, isoString: 'P0Y', amount: 1, result: 'P1Y' },
  { name: 'addYears', fn: addYears, isoString: 'I\'m invalid', amount: 1, result: INVALID_DURATION },
].forEach(({ name, fn, isoString, amount, result }) => {
  it(`${name} ${amount} to ${isoString} results in ${result}`, () => {
    assertThat(fn(amount, isoString), equalTo(result));
  });
});

[
  { name: 'add', fn: add, isoString: 'PT1S', amount: 'PT1S', result: 'PT2S' },
  { name: 'add', fn: add, isoString: 'I\'m invalid', amount: 'I\'m invalid', result: INVALID_DURATION },
].forEach(({ name, fn, isoString, amount, result }) => {
  it(`${name} ${amount} to ${isoString} results in ${result}`, () => {
    assertThat(fn(amount, isoString), equalTo(result));
  });
});

describe('sum', () => {
  it('accepts sums durations correctly', () => {
    assertThat(sum(['PT1S', 'PT2S', 'PT3S']), equalTo('PT6S'));
  });

  it('returns invalid duration when one element is invalid', () => {
    assertThat(sum(['PT1S', INVALID_DURATION, 'PT3S']), equalTo(INVALID_DURATION));
  });
});


describe('addToDate', () => {
  [
    {
      amount: 'PT1S',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('2000-01-01T00:00:01Z'),
    }, {
      amount: 'PT1M',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('2000-01-01T00:01:00Z'),
    }, {
      amount: 'PT1H',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('2000-01-01T01:00:00Z'),
    }, {
      amount: 'P1W',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('2000-01-08T00:00:00Z'),
    }, {
      amount: 'P1M',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('2000-02-01T00:00:00Z'),
    }, {
      amount: 'P1Y',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('2001-01-01T00:00:00Z'),
    }, {
      amount: INVALID_DURATION,
      date: new Date('2000-01-01T00:00:00Z'),
      result: INVALID_DURATION,
    },
  ].forEach(({ amount, result, date }) => {
    it(`${amount} to ${date} results in ${result}`, () => {
      assertThat(addToDate(amount, date), equalTo(result));
    });
  });
});


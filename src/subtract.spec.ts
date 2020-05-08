import { assertThat, equalTo } from 'hamjest';
import {
  subtract,
  subtractMilliseconds,
  subtractMicroseconds,
  subtractSeconds,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractWeeks,
  subtractMonths,
  subtractYears,
  subtractFromDate,
} from 'pomeranian-durations';
import { INVALID_DURATION } from './constants';

describe('subtractMicroseconds', () => {
  [
    { amount: 1, duration: 'PT0S', result: 'PT-0.000001S' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractMicroseconds(amount, duration), equalTo(result));
    });
  });
})

describe('subtractMilliseconds', () => {
  [
    { amount: 1, duration: 'PT0S', result: 'PT-0.001S' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractMilliseconds(amount, duration), equalTo(result));
    });
  });

})

describe('subtractSeconds', () => {
  [
    { amount: 1, duration: 'PT0S', result: 'PT-1S' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },

    { amount: 61, duration: 'PT0S', result: 'PT-61S' },
    { amount: 61, duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractSeconds(amount, duration), equalTo(result));
    });
  });

})


describe('subtractMinutes', () => {
  [
    { amount: 1, duration: 'PT0M', result: 'PT-1M' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },

  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractMinutes(amount, duration), equalTo(result));
    });
  });


})


describe('subtractHours', () => {
  [
    { amount: 1, duration: 'PT0H', result: 'PT-1H' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractHours(amount, duration), equalTo(result));
    });
  });

})

describe('subtractDays', () => {
  [
    { amount: 1, duration: 'P0D', result: 'P-1D' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractDays(amount, duration), equalTo(result));
    });
  });
})

describe('subtractWeeks', () => {
  [
    { amount: 1, duration: 'P0W', result: 'P-1W' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractWeeks(amount, duration), equalTo(result));
    });
  });
})

describe('subtractMonths', () => {
  [
    { amount: 1, duration: 'P0M', result: 'P-1M' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractMonths(amount, duration), equalTo(result));
    });
  });

})

describe('subtractYears', () => {
  [
    { amount: 1, duration: 'P0Y', result: 'P-1Y' },
    { amount: 1, duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtractYears(amount, duration), equalTo(result));
    });
  });
});

describe('subtract', () => {
  [
    { amount: 'PT1S', duration: 'PT2S', result: 'PT-1S' },
    { amount: 'invalid', duration: 'invalid', result: INVALID_DURATION },
  ].forEach(({ amount, duration, result }) => {
    it(`${amount} to ${duration} results in ${result}`, () => {
      assertThat(subtract(amount, duration), equalTo(result));
    });
  });
})

describe('subtractFromDate', () => {
  [
    {
      amount: 'PT1S',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('1999-12-31T23:59:59Z')
    }, {
      amount: 'PT1M',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('1999-12-31T23:59:00Z'),
    }, {
      amount: 'PT1H',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('1999-12-31T23:00:00Z'),
    }, {
      amount: 'P1D',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('1999-12-31T00:00:00Z'),
    },  {
      amount: 'P1W',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('1999-12-25T00:00:00Z'),
    },
    {
      amount: 'P1M',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('1999-12-01T00:00:00Z'),
    },
    {
      amount: 'P1Y',
      date: new Date('2000-01-01T00:00:00Z'),
      result: new Date('1999-01-01T00:00:00Z'),
    }, {
      amount: INVALID_DURATION,
      date: new Date('2000-01-01T00:00:00Z'),
      result: INVALID_DURATION,
    },
  ].forEach(({ amount, result, date }) => {
    it(`${amount} to ${date} results in ${result}`, () => {
      assertThat(subtractFromDate(amount, date), equalTo(result));
    });
  });
});


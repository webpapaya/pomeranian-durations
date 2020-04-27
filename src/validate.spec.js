// @ts-check
// @ts-ignore
import { assertThat, equalTo } from 'hamjest';
import { isValid, whenInvalid, whenInvalidDuration } from 'pomeranian-durations';
import { INVALID_DURATION } from './constants';

describe('isValid iso8601 duration', () => {
  [
    { isoDuration: 'P', valid: true },
    { isoDuration: 'p', valid: true },
    { isoDuration: 'P1y', valid: true },
    { isoDuration: 'P1Y', valid: true },
    { isoDuration: 'P1.5Y', valid: true },
    { isoDuration: 'P11Y', valid: true },
    { isoDuration: 'P11Y1W', valid: true },
    { isoDuration: 'P1M', valid: true },
    { isoDuration: 'P1.5M', valid: true },
    { isoDuration: 'P11M', valid: true },
    { isoDuration: 'P1W', valid: true },
    { isoDuration: 'P1.5W', valid: true },
    { isoDuration: 'P1D', valid: true },
    { isoDuration: 'P1.5D', valid: true },
    { isoDuration: 'P11D', valid: true },
    { isoDuration: 'P1Y11D', valid: true },
    { isoDuration: 'PT1H', valid: true },
    { isoDuration: 'PT1M', valid: true },
    { isoDuration: 'P3Y6M1W4DT12H30M17.5S', valid: true },

    { isoDuration: 'PT-1S', valid: true },
    { isoDuration: 'PT+1S', valid: true },

    { isoDuration: -0, valid: false },
    { isoDuration: 0, valid: false },
    { isoDuration: 1, valid: false },
    { isoDuration: () => {}, valid: false },
    { isoDuration: null, valid: false },
    { isoDuration: void 0, valid: false },
    { isoDuration: new Error(), valid: false },
    { isoDuration: 'P1H', valid: false },
    { isoDuration: 'P1S', valid: false },
    { isoDuration: 'P1Y11D1M', valid: false },
    { isoDuration: 'P11D1Y', valid: false },
    { isoDuration: '', valid: false },
    { isoDuration: 'Invalid Data', valid: false },
    { isoDuration: '2xxx', valid: false },
    { isoDuration: '2000-123', valid: false },
    { isoDuration: '2000-12-124', valid: false },
  ].forEach(({ isoDuration, valid }) => {
    it(`"${isoDuration}" is ${valid ? 'valid' : 'invalid'}`, () => assertThat(
      isValid(isoDuration), equalTo(valid)));
  });
});

describe('whenInvalid', () => {
  it('returns value', () => {
    assertThat(whenInvalid(0, 'PT2S'), equalTo('PT2S'));
  });

  it('returns value', () => {
    assertThat(whenInvalid(0, 'invalid'), equalTo(0));
  });

  it('returns executes function', () => {
    assertThat(whenInvalid(() => 0, 'invalid'), equalTo(0));
  });
});


describe('whenInvalidDuration', () => {
  it('returns value', () => {
    assertThat(whenInvalidDuration(0, 'PT2S'), equalTo('PT2S'));
  });

  it('returns value when invalid but not an invalid duration', () => {
    assertThat(whenInvalidDuration(0, 'a random value'), equalTo('a random value'));
  });

  it('returns value', () => {
    assertThat(whenInvalidDuration(0, INVALID_DURATION), equalTo(0));
  });

  it('returns executes function', () => {
    assertThat(whenInvalidDuration(() => 0, INVALID_DURATION), equalTo(0));
  });
});

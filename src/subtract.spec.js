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

describe('subtractMicrosecond', () => {
  it('subtracting 1 microsecond from PT0S results in PT-0.000001S', () => {
    assertThat(subtractMicroseconds(1, 'PT0S'), equalTo('PT-0.000001S'));
  });
});

describe('subtractMilliseconds', () => {
  it('subtracting 1 millisecond from PT0S results in PT-0.001S', () => {
    assertThat(subtractMilliseconds(1, 'PT0S'), equalTo('PT-0.001S'));
  });
});

describe('subtractSeconds', () => {
  it('subtracting 1 second from PT0S results in PT-1S', () => {
    assertThat(subtractSeconds(1, 'PT0S'), equalTo('PT-1S'));
  });

  it('subtracting 61 second from PT0S results in PT-61S', () => {
    assertThat(subtractSeconds(61, 'PT0S'), equalTo('PT-61S'));
  });
});

describe('subtractMinutes', () => {
  it('subtracting 1 minute from PT0M results in PT-1M', () => {
    assertThat(subtractMinutes(1, 'PT0M'), equalTo('PT-1M'));
  });
});

describe('subtractHours', () => {
  it('subtracting 1 minute from PT0H results in PT-1H', () => {
    assertThat(subtractHours(1, 'PT0H'), equalTo('PT-1H'));
  });
});

describe('subtractDays', () => {
  it('subtracting 1 day from P0D results in P-1D', () => {
    assertThat(subtractDays(1, 'P0D'), equalTo('P-1D'));
  });
});

describe('subtractWeeks', () => {
  it('subtracting 1 week from P0W results in P-1W', () => {
    assertThat(subtractWeeks(1, 'P0W'), equalTo('P-1W'));
  });
});

describe('subtractMonths', () => {
  it('subtracting 1 month from P0M results in P-1M', () => {
    assertThat(subtractMonths(1, 'P0M'), equalTo('P-1M'));
  });
});

describe('subtractYears', () => {
  it('subtracting 1 year from P0Y results in P-1Y', () => {
    assertThat(subtractYears(1, 'P0Y'), equalTo('P-1Y'));
  });
});

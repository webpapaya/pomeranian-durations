import { assertThat, equalTo } from 'hamjest';
import {
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

describe('addMicrosecond', () => {
  it('adding 1 microsecond to PT0S results in PT0.000001S', () => {
    assertThat(addMicroseconds(1, 'PT0S'), equalTo('PT0.000001S'));
  });
});

describe('addMilliseconds', () => {
  it('adding 1 millisecond to PT0S results in PT0.001S', () => {
    assertThat(addMilliseconds(1, 'PT0S'), equalTo('PT0.001S'));
  });
});

describe('addSeconds', () => {
  it('adding 1 second to PT0S results in PT1S', () => {
    assertThat(addSeconds(1, 'PT0S'), equalTo('PT1S'));
  });

  it('adding 61 second to PT0S results in PT61S', () => {
    assertThat(addSeconds(61, 'PT0S'), equalTo('PT61S'));
  });
});

describe('addMinutes', () => {
  it('adding 1 minute to PT0M results in PT1M', () => {
    assertThat(addMinutes(1, 'PT0M'), equalTo('PT1M'));
  });
});

describe('addHours', () => {
  it('adding 1 minute to PT0H results in PT1H', () => {
    assertThat(addHours(1, 'PT0H'), equalTo('PT1H'));
  });
});

describe('addDays', () => {
  it('adding 1 day to P0D results in P1D', () => {
    assertThat(addDays(1, 'P0D'), equalTo('P1D'));
  });
});

describe('addWeeks', () => {
  it('adding 1 week to P0W results in P1W', () => {
    assertThat(addWeeks(1, 'P0W'), equalTo('P1W'));
  });
});

describe('addMonths', () => {
  it('adding 1 week to P0M results in P0M', () => {
    assertThat(addMonths(1, 'P0M'), equalTo('P1M'));
  });
});

describe('addYears', () => {
  it('adding 1 year to P0Y results in P1Y', () => {
    assertThat(addYears(1, 'P0Y'), equalTo('P1Y'));
  });
});

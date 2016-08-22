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

  subtractMilliseconds,
  subtractMicroseconds,
  subtractSeconds,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractWeeks,
  subtractMonths,
  subtractYears,
} from './calculations';

describe('calculations', () => {
  describe('add', () => {
    describe('milliseconds', () => {
      it('adding 1 millisecond to PT0S results in PT0.001S', () => assertThat(
        addMilliseconds('PT0S', 1), equalTo('PT0.001S')));
    });

    describe('microsecond', () => {
      it('adding 1 microsecond to PT0S results in PT0.000001S', () => assertThat(
        addMicroseconds('PT0S', 1), equalTo('PT0.000001S')));
    });

    describe('seconds', () => {
      it('adding 1 second to PT0S results in PT1S', () => assertThat(
        addSeconds('PT0S', 1), equalTo('PT1S')));

      it('adding 61 second to PT0S results in PT61S', () => assertThat(
        addSeconds('PT0S', 61), equalTo('PT61S')));
    });

    describe('minutes', () => {
      it('adding 1 minute to PT0M results in PT1M', () => assertThat(
        addMinutes('PT0M', 1), equalTo('PT1M')));
    });

    describe('hours', () => {
      it('adding 1 minute to PT0H results in PT1H', () => assertThat(
        addHours('PT0H', 1), equalTo('PT1H')));
    });

    describe('days', () => {
      it('adding 1 day to P0D results in P1D', () => assertThat(
        addDays('P0D', 1), equalTo('P1D')));
    });

    describe('weeks', () => {
      it('adding 1 week to P0W results in P1W', () => assertThat(
        addWeeks('P0W', 1), equalTo('P1W')));
    });

    describe('months', () => {
      it('adding 1 week to P0M results in P0M', () => assertThat(
        addMonths('P0M', 1), equalTo('P1M')));
    });

    describe('years', () => {
      it('adding 1 year to P0Y results in P1Y', () => assertThat(
        addYears('P0Y', 1), equalTo('P1Y')));
    });
  });

  describe('subtract', () => {
    describe('microsecond', () => {
      it('adding 1 microsecond from PT0S results in PT-0.000001S', () => assertThat(
        subtractMicroseconds('PT0S', 1), equalTo('PT-0.000001S')));
    });

    describe('milliseconds', () => {
      it('subtracting 1 millisecond from PT0S results in PT-0.001S', () => assertThat(
        subtractMilliseconds('PT0S', 1), equalTo('PT-0.001S')));
    });

    describe('seconds', () => {
      it('subtracting 1 second from PT0S results in PT-1S', () => assertThat(
        subtractSeconds('PT0S', 1), equalTo('PT-1S')));

      it('subtracting 61 second from PT0S results in PT-61S', () => assertThat(
        subtractSeconds('PT0S', 61), equalTo('PT-61S')));
    });

    describe('minutes', () => {
      it('subtracting 1 minute from PT0M results in PT-1M', () => assertThat(
        subtractMinutes('PT0M', 1), equalTo('PT-1M')));
    });

    describe('hours', () => {
      it('subtracting 1 minute from PT0H results in PT-1H', () => assertThat(
        subtractHours('PT0H', 1), equalTo('PT-1H')));
    });

    describe('days', () => {
      it('subtracting 1 day from P0D results in P-1D', () => assertThat(
        subtractDays('P0D', 1), equalTo('P-1D')));
    });

    describe('weeks', () => {
      it('subtracting 1 week from P0W results in P-1W', () => assertThat(
        subtractWeeks('P0W', 1), equalTo('P-1W')));
    });

    describe('months', () => {
      it('subtracting 1 month from P0M results in P-1M', () => assertThat(
        subtractMonths('P0M', 1), equalTo('P-1M')));
    });

    describe('years', () => {
      it('subtracting 1 year from P0Y results in P-1Y', () => assertThat(
        subtractYears('P0Y', 1), equalTo('P-1Y')));
    });
  });
});

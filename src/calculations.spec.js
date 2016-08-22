import { assertThat, equalTo } from 'hamjest';
import {
  addMicrosecond,
  addMillisecond,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addWeeks,
  addMonths,
  addYears,
} from './calculations';

describe('calculations', () => {
  describe('add', () => {
    describe('milliseconds', () => {
      it('adding 1 millisecond to PT0S results in PT0.001S', () => assertThat(
        addMillisecond('PT0S', 1), equalTo('PT0.001S')));
    });

    describe('microsecond', () => {
      it('adding 1 microsecond to PT0S results in PT0.000001S', () => assertThat(
        addMicrosecond('PT0S', 1), equalTo('PT0.000001S')));
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
});

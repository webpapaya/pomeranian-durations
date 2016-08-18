import { assertThat, equalTo } from 'hamjest';
import {
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addWeeks,
  addMonths,
  addYears,
} from './calculations';

describe('calculations', () => {
  describe('add seconds', () => {
    it('adding 1 second to PT0S results in PT1S', () => assertThat(
      addSeconds('PT0S', 1).toIso(), equalTo('PT1S')));

    it('adding 61 second to PT0S results in PT61S', () => assertThat(
      addSeconds('PT0S', 61).toIso(), equalTo('PT61S')));
  });

  describe('add minutes', () => {
    it('adding 1 minute to PT0M results in PT1M', () => assertThat(
      addMinutes('PT0M', 1).toIso(), equalTo('PT1M')));
  });

  describe('add hours', () => {
    it('adding 1 minute to PT0H results in PT1H', () => assertThat(
      addHours('PT0H', 1).toIso(), equalTo('PT1H')));
  });

  describe('add days', () => {
    it('adding 1 day to P0D results in P1D', () => assertThat(
      addDays('P0D', 1).toIso(), equalTo('P1D')));
  });

  describe('add weeks', () => {
    it('adding 1 week to P0W results in P1W', () => assertThat(
      addWeeks('P0W', 1).toIso(), equalTo('P1W')));
  });

  describe('add months', () => {
    it('adding 1 week to P0M results in P0M', () => assertThat(
      addMonths('P0M', 1).toIso(), equalTo('P1M')));
  });

  describe('add years', () => {
    it('adding 1 year to P0Y results in P1Y', () => assertThat(
      addYears('P0Y', 1).toIso(), equalTo('P1Y')));
  });
});

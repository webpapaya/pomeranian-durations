import { assertThat, equalTo } from 'hamjest';
import { toIso, toFragments } from './transformations';

describe('toIso', () => {
  it('responds correct format', () => assertThat(
    toIso({ years: 1, days: 2, hours: 1, minutes: 66 }), equalTo('P1Y2DT1H66M')));

  it('works with decimals as string', () => assertThat(
    toIso({ minutes: '1.1' }), equalTo('PT1.1M')));

  it('works with numbers as string', () => assertThat(
    toIso({ minutes: '1' }), equalTo('PT1M')));

  it('works with leading and trailing whitespace', () => assertThat(
    toIso({ minutes: ' 1 ' }), equalTo('PT1M')));
});

describe('toFragments', () => {
  it('transforms iso string to fragments', () => assertThat(
    toFragments('P1Y2DT1H66M'), equalTo({
      years: 1,
      months: 0,
      weeks: 0,
      days: 2,
      hours: 1,
      minutes: 66,
      seconds: 0,
    })));

  it('works with leading whitespace', () => assertThat(
    toFragments(' P1Y2DT1H66M'), equalTo({
      years: 1,
      months: 0,
      weeks: 0,
      days: 2,
      hours: 1,
      minutes: 66,
      seconds: 0,
    })));

  it('works with trailing whitespace', () => assertThat(
    toFragments('P1Y2DT1H66M '), equalTo({
      years: 1,
      months: 0,
      weeks: 0,
      days: 2,
      hours: 1,
      minutes: 66,
      seconds: 0,
    })));

  it('units are case insensitive', () => assertThat(
    toFragments(' P1Y2dT1h66M'), equalTo({
      years: 1,
      months: 0,
      weeks: 0,
      days: 2,
      hours: 1,
      minutes: 66,
      seconds: 0,
    })));

  it('of an empty string responds 0 for all units', () => assertThat(
    toFragments(''), equalTo({
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })));


  it('of undefined responds 0 for all units', () => assertThat(
    toFragments(undefined), equalTo({
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })));

  it('of null responds 0 for all units', () => assertThat(
    toFragments(null), equalTo({
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })));
});

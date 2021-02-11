import { assertThat, equalTo } from 'hamjest';
import { toIso, toFragments, unitNamesAsc, unitNamesDesc } from 'pomeranian-durations';

describe('toIso', () => {
  it('responds correct format', () => assertThat(
    toIso({ years: 1, days: 2, hours: 1, minutes: 66 }), equalTo('P1Y2DT1H66M')));

  it('works with decimals as string', () => assertThat(
    toIso({ minutes: '1.1' }), equalTo('PT1.1M')));

  it('works with numbers as string', () => assertThat(
    toIso({ minutes: '1' }), equalTo('PT1M')));

  it('works with leading and trailing whitespace', () => assertThat(
    toIso({ minutes: ' 1 ' }), equalTo('PT1M')));

  it('converts 0 seconds to PT0S', () => assertThat(
    toIso({ seconds: 0 }, { includeZeroValues: true }), equalTo('PT0S')));
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

describe('unitNamesAsc', () => {
  [
    { isoString: 'PT1S', result: ['seconds'] },
    { isoString: 'PT1H', result: ['hours'] },
    { isoString: 'PT1H1M', result: ['minutes', 'hours'] },
    { isoString: 'P1MT1H1M', result: ['minutes', 'hours', 'months'] },
  ].forEach(({ isoString, result }) => {
    it(`returns ${result.join(', ')} for ${isoString}`, () => {
      assertThat(unitNamesAsc(isoString), equalTo(result));
    })
  })
})

describe('unitNamesDesc', () => {
  [
    { isoString: 'PT1S', result: ['seconds'] },
    { isoString: 'PT1H1M', result: ['hours', 'minutes'] },
  ].forEach(({ isoString, result }) => {
    it(`returns ${result.join(', ')} for ${isoString}`, () => {
      assertThat(unitNamesDesc(isoString), equalTo(result));
    })
  })
})

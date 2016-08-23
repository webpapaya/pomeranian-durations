import { assertThat, equalTo } from 'hamjest';
import { toIso, toFragments } from './transformations';

describe('toIso', () => {
  it('responds correct format', () => assertThat(
    toIso({ years: 1, days: 2, hours: 1, minutes: 66 }), equalTo('P1Y2DT1H66M')));
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
});

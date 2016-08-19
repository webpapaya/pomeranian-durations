import { assertThat, equalTo } from 'hamjest';
import { fromIso, fromFragments } from './index';

describe('fromFragments', () => {
  it('toIso responds correct format', () => assertThat(
    fromFragments({ years: 1, days: 2, hours: 1, minutes: 66 }).toIso(), equalTo('P1Y2DT1H66M')));
});

describe('fromIso', () => {
  describe('to normalized iso', () => {
    it('PT61S results in PT1M1S', () => assertThat(
      fromIso('PT61S').toNormalizedIso(), equalTo('PT1M1S')));

    it('PT25H results in P1DT1H', () => assertThat(
      fromIso('PT25H').toNormalizedIso(), equalTo('PT25H')));
  });
});

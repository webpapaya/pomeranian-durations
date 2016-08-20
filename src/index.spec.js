import { assertThat, equalTo } from 'hamjest';
import { fromIso } from './index';

describe('fromIso', () => {
  describe('to normalized iso', () => {
    it('PT61S results in PT1M1S', () => assertThat(
      fromIso('PT61S').toNormalizedIso(), equalTo('PT1M1S')));

    it('PT25H results in P1DT1H', () => assertThat(
      fromIso('PT25H').toNormalizedIso(), equalTo('PT25H')));
  });
});

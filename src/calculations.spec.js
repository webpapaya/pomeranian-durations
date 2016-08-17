import { assertThat, equalTo } from 'hamjest';
import { addSeconds } from './calculations';

describe('calculations', () => {
  describe('add seconds', () => {
    it('adding 1 second to PT0S results in PT1S', () => assertThat(
      addSeconds('PT0S', 1).toIso(), equalTo('PT1S')));

    it('adding 61 second to PT0S results in PT61S', () => assertThat(
      addSeconds('PT0S', 61).toIso(), equalTo('PT61S')));
  });
});

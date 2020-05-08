import { assertThat, equalTo } from 'hamjest';
import { normalizeTime } from 'pomeranian-durations';
import { INVALID_DURATION } from './constants';

describe('normalizeTime converts', () => {
  [
    { input: 'INVALID', result: INVALID_DURATION },
    { input: 'PT1111S', result: 'PT18M31S' },
    { input: 'PT120M', result: 'PT2H' },
  ].forEach(({ input, result }) => {
    it(`${input} to ${result}`, () => {
      assertThat(normalizeTime(input), equalTo(result));
    });
  });
});

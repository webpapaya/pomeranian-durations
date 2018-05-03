import { assertThat, equalTo } from 'hamjest';
import { toPostgresVerbose } from './to-sql';
import { INVALID_DURATION } from "./constants";

describe('toPostgresVerbose converts', () => {
  [
    { input: 'Invalid', result: INVALID_DURATION },
    { input: 'P', result: '' },
    { input: 'P2Y', result: '2 years' },
    { input: 'P-2Y', result: '-2 years' },

    { input: 'P2M', result: '2 mons' },
    { input: 'P-2M', result: '-2 mons' },

    { input: 'P2D', result: '2 days' },
    { input: 'P-2D', result: '-2 days' },
  ].forEach(({ input, result }) => {
    it(`${input} to ${result}`, () => {
      assertThat(toPostgresVerbose(input), equalTo(result));
    });
  });
});

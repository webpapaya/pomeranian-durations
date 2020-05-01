// @ts-ignore
import { assertThat, equalTo } from 'hamjest';
import { absolute } from 'pomeranian-durations';

describe('absolute converts', () => {
  [
    { input: 'PT1S', result: 'PT1S' },
    { input: 'PT-1S', result: 'PT1S' },
  ].forEach(({ input, result }) => {
    it(`${input} to ${result}`, () => {
      assertThat(absolute(input), equalTo(result));
    });
  });
});


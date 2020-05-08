import { assertThat, equalTo } from 'hamjest';
import { absolute, invert } from 'pomeranian-durations';

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

describe('invert converts', () => {
  [
    { input: 'PT1S', result: 'PT-1S' },
    { input: 'PT-1S', result: 'PT1S' },
  ].forEach(({ input, result }) => {
    it(`${input} to ${result}`, () => {
      assertThat(invert(input), equalTo(result));
    });
  });
});

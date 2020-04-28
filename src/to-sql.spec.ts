// @ts-ignore
import { assertThat, equalTo } from 'hamjest';
import { toPostgresVerbose, toPostgres, toSql } from 'pomeranian-durations';
import { INVALID_DURATION } from './constants';

describe('toPostgresVerbose converts', () => {
  [
    { input: 'Invalid', result: INVALID_DURATION },
    { input: 'P', result: '@' },
    { input: 'P2Y', result: '@ 2 years' },
    { input: 'P-2Y', result: '@ -2 years' },
    { input: 'P2DT3M', result: '@ 2 days 3 mins' },

    { input: 'P2M', result: '@ 2 mons' },
    { input: 'P-2M', result: '@ -2 mons' },

    { input: 'P2D', result: '@ 2 days' },
    { input: 'P-2D', result: '@ -2 days' },
  ].forEach(({ input, result }) => {
    it(`${input} to ${result}`, () => {
      assertThat(toPostgresVerbose(input), equalTo(result));
    });
  });
});

describe('toPostgres converts', () => {
  [
    { input: 'Invalid', result: INVALID_DURATION },
    { input: 'P2YT1S', result: '2 years 00:00:01' },
    { input: 'PT1S', result: '00:00:01' },
    { input: 'PT1111S', result: '00:18:31' },
    { input: 'PT999H', result: '999:00:00' },
    { input: 'PT1.1S', result: '00:00:01.1' },
    { input: 'PT-1.1S', result: '-00:00:01.1' },
  ].forEach(({ input, result }) => {
    it(`${input} to ${result}`, () => {
      assertThat(toPostgres(input), equalTo(result));
    });
  });
});

describe('toSql', () => {
  [
    { input: 'Invalid', result: INVALID_DURATION },
    { input: 'P2Y', result: '2-0 0' },
    { input: 'P2YT1S', result: '2-0 0 0:00:01' },
    { input: 'PT1S', result: '0:00:01' },
    { input: 'PT1111S', result: '0:18:31' },
    { input: 'PT999H', result: '999:00:00' },
    { input: 'PT1.1S', result: '0:00:01.1' },
    { input: 'PT-1.1S', result: '-0:00:01.1' },
  ].forEach(({ input, result }) => {
    it(`${input} to ${result}`, () => {
      assertThat(toSql(input), equalTo(result));
    });
  });
});

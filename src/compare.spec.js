import { assertThat, equalTo } from 'hamjest';
import { gt, gte, lt, lte, eq } from './compare';

describe('gt', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: false },
    { first: 'PT1S', second: 'PT0S', result: true },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`gt for ${first} and ${second} returns ${result}`, () => {
      assertThat(gt(first, second), equalTo(result));
    });
  });
});

describe('gte', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: true },
    { first: 'PT1S', second: 'PT0S', result: true },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`gt for ${first} and ${second} returns ${result}`, () => {
      assertThat(gte(first, second), equalTo(result));
    });
  });
});


describe('lt', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: false },
    { first: 'PT1S', second: 'PT0S', result: false },
    { first: 'PT0S', second: 'PT1S', result: true },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`lt for ${first} and ${second} returns ${result}`, () => {
      assertThat(lt(first, second), equalTo(result));
    });
  });
});


describe('lt', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: true },
    { first: 'PT1S', second: 'PT0S', result: false },
    { first: 'PT0S', second: 'PT1S', result: true },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`lt for ${first} and ${second} returns ${result}`, () => {
      assertThat(lte(first, second), equalTo(result));
    });
  });
});


describe('eg', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: true },
    { first: 'PT1S', second: 'PT0S', result: false },
    { first: 'PT0S', second: 'PT1S', result: false },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
    { first: 'LALA', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`eq for ${first} and ${second} returns ${result}`, () => {
      assertThat(eq(first, second), equalTo(result));
    });
  });
});

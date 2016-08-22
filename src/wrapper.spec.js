import { assertThat, equalTo, not, throws } from 'hamjest';
import * as finders from './finders';
import * as conversions from './conversions';
import * as calculations from './calculations';
import { fromIso } from './wrapper';

describe('fromIso wrapper', () => {
  describe('conversions', () => {
    Object.keys(conversions)
      .filter((method) => method.startsWith('as'))
      .forEach((method) => {
        it(`${method} works`, () => assertThat(
          () => fromIso('PT1S')[method](), not(throws())));
      });
  });

  describe('calculations', () => {
    Object.keys(calculations)
      .filter((method) => method.startsWith('add'))
      .forEach((method) => {
        it(`${method} works`, () => assertThat(
          () => fromIso('PT1S')[method](), not(throws())));

        it(`${method} can be called again`, () => {
          assertThat(() => { fromIso('PT1S')[method]()[method]() }, not(throws()));
        });
      });

    Object.keys(calculations)
      .filter((method) => method.startsWith('subtract'))
      .forEach((method) => {
        it(`${method} works`, () => assertThat(
          () => fromIso('PT1S')[method](), not(throws())));

        it(`${method} can be called again`, () => {
          assertThat(() => { fromIso('PT1S')[method]()[method]() }, not(throws()));
        });
      });
  });

  describe('finders', () => {
    Object.keys(finders)
      .filter((method) => method.startsWith('find'))
      .forEach((method) => {
        it(`${method} works`, () => assertThat(
          () => fromIso('PT1S')[method](), not(throws())));
    });
  });
});

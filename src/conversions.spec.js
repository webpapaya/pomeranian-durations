import { assertThat, equalTo, throws } from 'hamjest';
import {
  asMicroseconds,
  asMilliseconds,
  asSeconds,
  asMinutes,
  asHours,
} from './conversions';

describe('as "unit" methods', () => {
  it('PT2s asMicroseconds is 2000000μs', () => assertThat(
    asMicroseconds('PT2s'), equalTo(2000000)));

  it('PT1.1s asMilliseconds is 1100ms', () => assertThat(
    asMilliseconds('PT1.1s'), equalTo(1100)));

  it('PT1m1s asSeconds is 61s', () => assertThat(
    asSeconds('PT1m1s'), equalTo(61)));

  it('PT1h1m asMinutes is 61m', () => assertThat(
    asMinutes('PT1h1m'), equalTo(61)));

  it('PT1h asHours is 1h', () => assertThat(
    asHours('PT1h'), equalTo(1)));

  it('P1D throws', () => assertThat(
    () => asHours('P1D'), throws()));

  it('P1M throws', () => assertThat(
    () => asHours('P1M'), throws()));

  it('P1W throws', () => assertThat(
    () => asHours('P1W'), throws()));
});

import { assertThat, equalTo } from 'hamjest';
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

  it('P1DT1h asHours is 25h', () => assertThat(
    asHours('P1DT1h'), equalTo(25)));
});

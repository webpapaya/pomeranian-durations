import { assertThat, equalTo } from 'hamjest';
import { format } from './format';

const testFormat = (token, isoString, result) =>
  it(`${token}`, () => assertThat(format(token, isoString), equalTo(result)));

describe('format', () => {
  testFormat('%y', 'P', '0');
  testFormat('%y', 'P1Y', '1');
  testFormat('%yy', 'P', '00');
  testFormat('%yy', 'P1Y', '01');

  testFormat('%M', 'P', '0');
  testFormat('%M', 'P1M', '1');
  testFormat('%MM', 'P', '00');
  testFormat('%MM', 'P1M', '01');

  testFormat('%w', 'P', '0');
  testFormat('%w', 'P1W', '1');
  testFormat('%ww', 'P', '00');
  testFormat('%ww', 'P1W', '01');

  testFormat('%d', 'P', '0');
  testFormat('%d', 'P1D', '1');
  testFormat('%dd', 'P', '00');
  testFormat('%dd', 'P1D', '01');

  testFormat('%h', 'P', '0');
  testFormat('%h', 'PT1H', '1');
  testFormat('%hh', 'P', '00');
  testFormat('%hh', 'PT1H', '01');

  testFormat('%m', 'P', '0');
  testFormat('%m', 'PT1M', '1');
  testFormat('%mm', 'P', '00');
  testFormat('%mm', 'PT1M', '01');

  testFormat('%s', 'P', '0');
  testFormat('%s', 'PT1S', '1');
  testFormat('%ss', 'P', '00');
  testFormat('%ss', 'PT1S', '01');

  testFormat('%mm:%ss', 'PT1S', '00:01');
  testFormat('%ss %ss', 'PT1S', '01 01');
  testFormat('unknown token', 'PT1S', 'unknown token');
});


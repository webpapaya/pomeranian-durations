import { assertThat, equalTo } from 'hamjest';
import { toIso } from './transformations';

describe('fromFragments', () => {
  it('toIso responds correct format', () => assertThat(
    toIso({ years: 1, days: 2, hours: 1, minutes: 66 }), equalTo('P1Y2DT1H66M')));
});

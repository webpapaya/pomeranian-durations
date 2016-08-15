import { assertThat, equalTo } from 'hamjest';
import { fromIso } from './index';

describe('ISO duration to seconds', () => {
  it('`PT6S` responds 6 seconds', () => {
    const isoDurationString = 'PT6S';
    assertThat(fromIso(isoDurationString).seconds, equalTo(6));
  });

  it('`PT7S` responds 7 seconds', () => {
    const isoDurationString = 'PT7S';
    assertThat(fromIso(isoDurationString).seconds, equalTo(7));
  });
});



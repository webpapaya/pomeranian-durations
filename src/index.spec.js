import { assertThat, equalTo } from 'hamjest';
import { fromIso } from './index';

describe('ISO duration to seconds', () => {
  it('`PT6S` parses 6 seconds', () => {
    const isoDurationString = 'PT6S';
    assertThat(fromIso(isoDurationString).seconds, equalTo(6));
  });
});



import { assertThat, equalTo } from 'hamjest';
import { fromIso } from './index';

describe('ISO duration to seconds', () => {
  [
    { isoDurationString: 'PT0S', seconds: 0 },
    { isoDurationString: 'PT6S', seconds: 6 },
    { isoDurationString: 'PT7S', seconds: 7 },
    { isoDurationString: 'PT10S', seconds: 10 },
    { isoDurationString: 'PT59S', seconds: 59 },

  ].forEach(({ isoDurationString, seconds }) => {
    it(`${isoDurationString} responds ${seconds} seconds`, () => {
      assertThat(fromIso(isoDurationString).seconds, equalTo(seconds));
    });
  });
});



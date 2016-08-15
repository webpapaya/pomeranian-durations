import { assertThat, equalTo } from 'hamjest';
import { fromIso } from './index';

describe('fromIso', () => {
  [
    { isoDurationString: 'PT0S', seconds: 0 },
    { isoDurationString: 'PT6S', seconds: 6 },
    { isoDurationString: 'PT7S', seconds: 7 },
    { isoDurationString: 'PT10S', seconds: 10 },
    { isoDurationString: 'PT59S', seconds: 59 },
    { isoDurationString: 'PT60S', seconds: 0, minutes: 1 },
    { isoDurationString: 'PT61S', seconds: 1, minutes: 1 },
    { isoDurationString: 'PT3600S', seconds: 0, minutes: 0, hours: 1 },
  ].forEach(({ isoDurationString, seconds = 0, minutes = 0}) => {
    describe(`${isoDurationString} responds`, () => {
      it(`${seconds} seconds`, () => {
        assertThat(fromIso(isoDurationString).seconds, equalTo(seconds));
      });

      it(`${minutes} minutes`, () => {
        assertThat(fromIso(isoDurationString).minutes, equalTo(minutes));
      });
    });
  });
});



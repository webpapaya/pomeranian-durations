import { assertThat, equalTo } from 'hamjest';
import { fromIso } from './index';

const ONE_SECOND = 1;
const ONE_MINUTE_IN_SECONDS = ONE_SECOND * 60;
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60;
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
const ONE_COMMON_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;
const TWO_COMMON_YEAR_IN_SECONDS = ONE_COMMON_YEAR_IN_SECONDS * 2;

describe('fromIso', () => {
  [
    { isoDurationString: 'PT0S', seconds: 0 },
    { isoDurationString: 'PT6S', seconds: 6 },
    { isoDurationString: 'PT7S', seconds: 7 },
    { isoDurationString: 'PT10S', seconds: 10 },
    { isoDurationString: 'PT59S', seconds: 59 },
    { isoDurationString: `PT${ONE_MINUTE_IN_SECONDS}S`, seconds: 0, minutes: 1 },
    { isoDurationString: `PT${ONE_HOUR_IN_SECONDS}S`, seconds: 0, minutes: 0, hours: 1 },
    { isoDurationString: `PT${ONE_DAY_IN_SECONDS}S`, seconds: 0, minutes: 0, hours: 0, days: 1},
    { isoDurationString: `PT${ONE_COMMON_YEAR_IN_SECONDS}S`, seconds: 0, minutes: 0, hours: 0, days: 365 },
    { isoDurationString: `PT${TWO_COMMON_YEAR_IN_SECONDS}S`, seconds: 0, minutes: 0, hours: 0, days: 730 },
  ].forEach(({ isoDurationString, seconds = 0, minutes = 0, hours = 0, days = 0}) => {
    describe(`${isoDurationString} responds`, () => {
      it(`${seconds} seconds`, () => assertThat(
        fromIso(isoDurationString).seconds, equalTo(seconds)));

      it(`${minutes} minutes`, () => assertThat(
        fromIso(isoDurationString).minutes, equalTo(minutes)));

      it(`${hours} hours`, () => assertThat(
        fromIso(isoDurationString).hours, equalTo(hours)));

      it(`${days} days`, () => assertThat(
        fromIso(isoDurationString).days, equalTo(days)));
    });
  });
});



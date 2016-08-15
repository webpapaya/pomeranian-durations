import { assertThat, equalTo } from 'hamjest';
import { fromIso } from './index';

describe('fromIso', () => {
  describe('in seconds', () => {
    const ONE_SECOND = 1;
    const ONE_MINUTE_IN_SECONDS = ONE_SECOND * 60;
    const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60;
    const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
    const ONE_COMMON_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;
    const TWO_COMMON_YEAR_IN_SECONDS = ONE_COMMON_YEAR_IN_SECONDS * 2;

    [{
      isoDurationString: 'PT0S',
      seconds: 0,
    }, {
      isoDurationString: 'PT6S',
      seconds: 6,
    }, {
      isoDurationString: 'PT7S',
      seconds: 7,
    }, {
      isoDurationString: 'PT10S',
      seconds: 10,
    }, {
      isoDurationString: 'PT59S',
      seconds: 59,
    }, {
      isoDurationString: `PT${ONE_MINUTE_IN_SECONDS}S`,
      minutes: 1,
    }, {
      isoDurationString: `PT${ONE_HOUR_IN_SECONDS}S`,
      hours: 1,
    }, {
      isoDurationString: `PT${ONE_DAY_IN_SECONDS}S`,
      days: 1,
    }, {
      isoDurationString: `PT${ONE_COMMON_YEAR_IN_SECONDS}S`,
      days: 365,
    }, {
      isoDurationString: `PT${TWO_COMMON_YEAR_IN_SECONDS}S`,
      days: 730,
    }].forEach(({ isoDurationString, seconds = 0, minutes = 0, hours = 0, days = 0 }) => {
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

  describe('in minutes', () => {
    [
      {
        isoDurationString: 'PT0M',
        minutes: 0,
      }, {
        isoDurationString: 'PT1M',
        minutes: 1,
      }, {
        isoDurationString: 'PT60M',
        hours: 1,
      }, {
        isoDurationString: 'PT1440M',
        days: 1,
      }
    ].forEach(({ isoDurationString, seconds = 0, minutes = 0, hours = 0, days = 0 }) => {
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

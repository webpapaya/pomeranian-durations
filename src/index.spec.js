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
      isoDurationString: 'PT0s',
      seconds: 0,
    }, {
      isoDurationString: 'PT-0s',
      seconds: 0,
    }, {
      isoDurationString: 'PT6s',
      seconds: 6,
    }, {
      isoDurationString: 'PT-6s',
      seconds: -6,
    }, {
      isoDurationString: 'PT7s',
      seconds: 7,
    }, {
      isoDurationString: 'PT10s',
      seconds: 10,
    }, {
      isoDurationString: 'PT59s',
      seconds: 59,
    }, {
      isoDurationString: `PT${ONE_MINUTE_IN_SECONDS}s`,
      minutes: 1,
    }, {
      isoDurationString: `PT${ONE_HOUR_IN_SECONDS}s`,
      hours: 1,
    }, {
      isoDurationString: `PT${ONE_DAY_IN_SECONDS}s`,
      days: 1,
    }, {
      isoDurationString: `PT${ONE_COMMON_YEAR_IN_SECONDS}s`,
      days: 365,
    }, {
      isoDurationString: `PT${TWO_COMMON_YEAR_IN_SECONDS}s`,
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
        isoDurationString: 'PT0m',
        minutes: 0,
      }, {
        isoDurationString: 'PT1m',
        minutes: 1,
      }, {
        isoDurationString: 'PT60m',
        hours: 1,
      }, {
        isoDurationString: 'PT1440m',
        days: 1,
      }, {
        isoDurationString: 'PT525600m',
        days: 365,
      }
    ].forEach(({ isoDurationString, seconds = 0, minutes = 0, hours = 0, days = 0 }) => {
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

    describe('in hours', () => {
      [
        {
          isoDurationString: 'PT0h',
          hours: 0,
        }, {
          isoDurationString: 'PT1h',
          hours: 1,
        }, {
          isoDurationString: 'PT-1h',
          hours: -1,
        }, {
          isoDurationString: 'PT24h',
          days: 1,
        }
      ].forEach(({ isoDurationString, seconds = 0, minutes = 0, hours = 0, days = 0 }) => {
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

    describe('in days', () => {
      [
        {
          isoDurationString: 'PT0D',
          days: 0,
        }, {
          isoDurationString: 'PT1D',
          days: 1,
        }, {
          isoDurationString: 'PT-1D',
          days: -1,
        }, {
          isoDurationString: 'PT365D',
          days: 365,
        }
      ].forEach(({ isoDurationString, seconds = 0, minutes = 0, hours = 0, days = 0 }) => {
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
  });
});

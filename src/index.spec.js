import { assertThat, equalTo } from 'hamjest';
import { fromIso } from './index';

describe('fromIso', () => {
  describe('as "unit" methods', () => {
    it('PT2s asMicroseconds is 2000000μs', () => assertThat(
      fromIso('PT2s').asMicroseconds(), equalTo(2000000)));

    it('PT1.1s asMilliseconds is 1100ms', () => assertThat(
      fromIso('PT1.1s').asMilliseconds(), equalTo(1100)));

    it('PT1m1s asSeconds is 61s', () => assertThat(
      fromIso('PT1m1s').asSeconds(), equalTo(61)));

    it('PT1h1m asMinutes is 61m', () => assertThat(
      fromIso('PT1h1m').asMinutes(), equalTo(61)));

    it('P1DT1h asHours is 25h', () => assertThat(
      fromIso('P1DT1h').asHours(), equalTo(25)));
  });


  describe('unit finders for P3Y6M4DT12H30M17S', () => {
    it('finds 3 years', () => assertThat(
      fromIso('P3Y6M4DT12H30M17S').findYears(), equalTo(3)));

    it('finds 6 months', () => assertThat(
      fromIso('P3Y6M4DT12H30M17S').findMonths(), equalTo(6)));

    it('finds 4 days', () => assertThat(
      fromIso('P3Y6M4DT12H30M17S').findDays(), equalTo(4)));
  });




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
      isoDurationString: 'PT0.000001s',
      seconds: 0,
      microseconds: 1,
    }, {
      isoDurationString: 'PT0.1s',
      milliseconds: 100,
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
    }].forEach((args) => {
      const {
        isoDurationString,
        microseconds = 0,
        milliseconds = 0,
        seconds = 0,
        minutes = 0,
        hours = 0,
        days = 0,
      } = args;

      describe(`${isoDurationString} responds`, () => {
        it(`${microseconds} microseconds`, () => assertThat(
          fromIso(isoDurationString).microseconds, equalTo(microseconds)));

        it(`${milliseconds} milliseconds`, () => assertThat(
          fromIso(isoDurationString).milliseconds, equalTo(milliseconds)));

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
        isoDurationString: 'PT0.5m',
        seconds: 30,
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
          isoDurationString: 'PT0.5h',
          minutes: 30,
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
          isoDurationString: 'P0D',
          days: 0,
        }, {
          isoDurationString: 'P1D',
          days: 1,
        }, {
          isoDurationString: 'P-1D',
          days: -1,
        }, {
          isoDurationString: 'P365D',
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

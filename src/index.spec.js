import { assertThat, equalTo } from 'hamjest';
import { fromIso, fromFragments } from './index';

describe('fromFragments', () => {
  it('toIso responds correct format', () => assertThat(
    fromFragments({ years: 1, days: 2, hours: 1, minutes: 66 }).toIso(), equalTo('P1Y2DT1H66M')));
});

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

  describe('unit finders for P3Y6M4DT12H30M17.100200S', () => {
    it('finds 3 years', () => assertThat(
      fromIso('P3Y6M4DT12H30M17.5S').findYears(), equalTo(3)));

    it('finds 6 months', () => assertThat(
      fromIso('P3Y6M4DT12H30M17.5S').findMonths(), equalTo(6)));

    it('finds 4 days', () => assertThat(
      fromIso('P3Y6M4DT12H30M17.5S').findDays(), equalTo(4)));

    it('finds 12 hours', () => assertThat(
      fromIso('P3Y6M4DT12H30M17.5S').findHours(), equalTo(12)));

    it('finds 12 minutes', () => assertThat(
      fromIso('P3Y6M4DT12H30M17.5S').findMinutes(), equalTo(30)));

    it('finds 17.5 seconds', () => assertThat(
      fromIso('P3Y6M4DT12H30M17.5S').findSeconds(), equalTo(17.5)));
  });

  describe('to normalized iso', () => {
    it('PT61S results in PT1M1S', () => assertThat(
      fromIso('PT61S').toNormalizedIso(), equalTo('PT1M1S')));

    it('PT25H results in P1DT1H', () => assertThat(
      fromIso('PT25H').toNormalizedIso(), equalTo('PT25H')));

    it('P1DT results in P1DT1H', () => assertThat(
      fromIso('P1DT').toNormalizedIso(), equalTo('PT24H')));
  });

  describe('in seconds', () => {
    const ONE_SECOND = 1;
    const ONE_MINUTE_IN_SECONDS = ONE_SECOND * 60;
    const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60;
    const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;

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
      hours: 24,
    }].forEach((args) => {
      const {
        isoDurationString,
        microseconds = 0,
        milliseconds = 0,
        seconds = 0,
        minutes = 0,
        hours = 0,
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
        hours: 24,
      },
    ].forEach(({ isoDurationString, seconds = 0, minutes = 0, hours = 0, days = 0 }) => {
      describe(`${isoDurationString} responds`, () => {
        it(`${seconds} seconds`, () => assertThat(
          fromIso(isoDurationString).seconds, equalTo(seconds)));

        it(`${minutes} minutes`, () => assertThat(
          fromIso(isoDurationString).minutes, equalTo(minutes)));

        it(`${hours} hours`, () => assertThat(
          fromIso(isoDurationString).hours, equalTo(hours)));
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
          hours: 24,
        },
      ].forEach(({ isoDurationString, seconds = 0, minutes = 0, hours = 0}) => {
        describe(`${isoDurationString} responds`, () => {
          it(`${seconds} seconds`, () => assertThat(
            fromIso(isoDurationString).seconds, equalTo(seconds)));

          it(`${minutes} minutes`, () => assertThat(
            fromIso(isoDurationString).minutes, equalTo(minutes)));

          it(`${hours} hours`, () => assertThat(
            fromIso(isoDurationString).hours, equalTo(hours)));
        });
      });
    });
  });
});

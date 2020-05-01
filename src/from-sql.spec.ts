// @ts-ignore
import { assertThat, equalTo } from 'hamjest';
import { fromPostgres, fromPostgresVerbose } from 'pomeranian-durations';

describe('fromPostgres converts', () => {
  [
    { input: '', result: 'P' },
    { input: '6 years 5 months 4 days 03:02:01', result: 'P6Y5M4DT3H2M1S' },

    { input: '2 years', result: 'P2Y' },
    { input: '2 year', result: 'P2Y' },
    { input: '2 y', result: 'P2Y' },
    { input: '-2 years', result: 'P-2Y' },
    { input: '-2 year', result: 'P-2Y' },
    { input: '-2 y', result: 'P-2Y' },

    { input: '2 months', result: 'P2M' },
    { input: '2 month', result: 'P2M' },
    { input: '2 mon', result: 'P2M' },
    { input: '2 mons', result: 'P2M' },

    { input: '-2 months', result: 'P-2M' },
    { input: '-2 month', result: 'P-2M' },
    { input: '-2 mon', result: 'P-2M' },
    { input: '-2 mons', result: 'P-2M' },

    { input: '2 days', result: 'P2D' },
    { input: '2 day', result: 'P2D' },
    { input: '2 d', result: 'P2D' },

    { input: '-2 days', result: 'P-2D' },
    { input: '-2 day', result: 'P-2D' },
    { input: '-2 d', result: 'P-2D' },

    { input: '01:02:03', result: 'PT1H2M3S' },
    { input: '-01:02:03', result: 'PT-1H-2M-3S' },

    { input: '6 years', result: 'P6Y' },
    { input: '-6 years', result: 'P-6Y' },
  ].forEach(({ input, result }) => {
    it(`${input} to ${result}`, () => {
      assertThat(fromPostgres(input), equalTo(result));
    });
  });
});

describe('fromPostgresVerbose converts', () => {
  [
    { unitNames: 'years year y'.split(' '), result: 'P${result}Y' },
    { unitNames: 'months month mon'.split(' '), result: 'P${result}M' },
    { unitNames: 'days day d'.split(' '), result: 'P${result}D' },
    { unitNames: 'hours hour h'.split(' '), result: 'PT${result}H' },
    { unitNames: 'minutes minute mins min m'.split(' '), result: 'PT${result}M' },
    { unitNames: 'seconds second secs sec s'.split(' '), result: 'PT${result}S' },
  ].forEach(({ unitNames, result }) => {
    const positiveResult = result.replace('${result}', '2');
    const negativeResult = result.replace('${result}', '-2');

    unitNames.forEach((unitName) => {
      it(`'2 ${unitName}' => ${positiveResult}`, () => {
        assertThat(fromPostgresVerbose(`2 ${unitName}`), equalTo(positiveResult));
      });

      it(`'2${unitName}' => ${positiveResult}`, () => {
        assertThat(fromPostgresVerbose(`2${unitName}`), equalTo(positiveResult));
      });

      it(`'-2${unitName}' => ${negativeResult}`, () => {
        assertThat(fromPostgresVerbose(`-2${unitName}`), equalTo(negativeResult));
      });

      it(`'-2 ${unitName}' => ${negativeResult}`, () => {
        assertThat(fromPostgresVerbose(`-2 ${unitName}`), equalTo(negativeResult));
      });

      it(`'2 ${unitName.toUpperCase()}' => ${positiveResult}`, () => {
        assertThat(fromPostgresVerbose(`2 ${unitName.toUpperCase()}`), equalTo(positiveResult));
      });

      it(`'2${unitName.toUpperCase()}' => ${positiveResult}`, () => {
        assertThat(fromPostgresVerbose(`2${unitName.toUpperCase()}`), equalTo(positiveResult));
      });

      it(`'-2${unitName.toUpperCase()}' => ${negativeResult}`, () => {
        assertThat(fromPostgresVerbose(`-2${unitName.toUpperCase()}`), equalTo(negativeResult));
      });

      it(`'-2 ${unitName.toUpperCase()}' => ${negativeResult}`, () => {
        assertThat(fromPostgresVerbose(`-2 ${unitName.toUpperCase()}`), equalTo(negativeResult));
      });

      it(`'@ 2 ${unitName.toUpperCase()}' => ${negativeResult}`, () => {
        assertThat(fromPostgresVerbose(`@ 2 ${unitName.toUpperCase()}`), equalTo(positiveResult));
      });
    });
  });

  it('correctly parses multiple units', () => {
    assertThat(fromPostgresVerbose('6 years 5 months 4 days 3 hours 2 minutes 1 seconds'),
      equalTo('P6Y5M4DT3H2M1S'));
  });

  it('correctly parses empty string', () => {
    assertThat(fromPostgresVerbose(''), equalTo('P'));
  });
});

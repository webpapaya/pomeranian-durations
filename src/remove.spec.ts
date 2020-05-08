import { assertThat, equalTo } from 'hamjest';
import { INVALID_DURATION } from './constants';
import {
  removeSeconds,
  removeMinutes,
  removeHours,
  removeDays,
  removeWeeks,
  removeMonths,
  removeYears,
  removeTimeUnits,
  removeDateUnits,
} from 'pomeranian-durations';

describe('remove', () => {
  [
    { fn: removeSeconds, fnName: 'removeSeconds', input: 'PT1S', result: 'P' },
    { fn: removeSeconds, fnName: 'removeSeconds', input: 'P1YT1S', result: 'P1Y' },
    { fn: removeSeconds, fnName: 'removeSeconds', input: 'INVALID', result: INVALID_DURATION },

    { fn: removeMinutes, fnName: 'removeMinutes', input: 'PT1M', result: 'P' },
    { fn: removeMinutes, fnName: 'removeMinutes', input: 'P1YT1M', result: 'P1Y' },
    { fn: removeMinutes, fnName: 'removeMinutes', input: 'INVALID', result: INVALID_DURATION },

    { fn: removeHours, fnName: 'removeHours', input: 'PT1H', result: 'P' },
    { fn: removeHours, fnName: 'removeHours', input: 'P1YT1H', result: 'P1Y' },
    { fn: removeHours, fnName: 'removeHours', input: 'INVALID', result: INVALID_DURATION },

    { fn: removeDays, fnName: 'removeDays', input: 'P1D', result: 'P' },
    { fn: removeDays, fnName: 'removeDays', input: 'P1Y1D', result: 'P1Y' },
    { fn: removeDays, fnName: 'removeDays', input: 'INVALID', result: INVALID_DURATION },

    { fn: removeWeeks, fnName: 'removeWeeks', input: 'P1W', result: 'P' },
    { fn: removeWeeks, fnName: 'removeWeeks', input: 'P1Y1W', result: 'P1Y' },
    { fn: removeWeeks, fnName: 'removeWeeks', input: 'INVALID', result: INVALID_DURATION },

    { fn: removeMonths, fnName: 'removeMonths', input: 'P1M', result: 'P' },
    { fn: removeMonths, fnName: 'removeMonths', input: 'P1Y1M', result: 'P1Y' },
    { fn: removeMonths, fnName: 'removeMonths', input: 'INVALID', result: INVALID_DURATION },

    { fn: removeYears, fnName: 'removeYears', input: 'P1Y', result: 'P' },
    { fn: removeYears, fnName: 'removeYears', input: 'P1Y1M', result: 'P1M' },
    { fn: removeYears, fnName: 'removeYears', input: 'INVALID', result: INVALID_DURATION },

    { fn: removeTimeUnits, fnName: 'removeTimeUnits', input: 'PT1H1M1.2S', result: 'P' },
    { fn: removeDateUnits, fnName: 'removeDateUnits', input: 'P1Y1M1W1D', result: 'P' },
  ].forEach(({ fn, fnName, input, result }) => {
    it(`${fnName} converts ${input} to ${result}`, () => {
      assertThat(fn(input), equalTo(result));
    });
  });
});


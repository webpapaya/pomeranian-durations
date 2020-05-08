import { assertThat, equalTo } from 'hamjest';
import { INVALID_DURATION } from 'pomeranian-durations';
import { inSeconds, inMinutes, inHours } from './in';

describe('in<unit>', () => {
  [
    { fn: inSeconds, unit: 'seconds', input: 'PT1M', output: 'PT60S' },
    { fn: inMinutes, unit: 'minutes', input: 'PT1H', output: 'PT60M' },
    { fn: inHours, unit: 'hours', input: 'PT60M', output: 'PT1H' },

    { fn: inSeconds, unit: 'seconds', input: 'random stuff', output: INVALID_DURATION },
    { fn: inMinutes, unit: 'minutes', input: 'something random', output: INVALID_DURATION },
    { fn: inHours, unit: 'hours', input: 'something random', output: INVALID_DURATION },
  ].forEach(({ fn, unit, input, output }) => {
    it(`in ${unit} converts ${input} to ${output}`, () => {
      assertThat(fn(input), equalTo(output));
    });
  });
});

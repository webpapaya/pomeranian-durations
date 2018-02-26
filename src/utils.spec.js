import { assertThat, equalTo } from 'hamjest';
import { curry } from './utils';

describe('curry', () => {
  const arity2 = curry((a, b) => a + b);

  it('partially applies arity 2 fn', () => {
    assertThat(arity2(1)(2), equalTo(3));
  });

  it('partially doesn\'t need to be paritally applied', () => {
    assertThat(arity2(1, 2), equalTo(3));
  });
});


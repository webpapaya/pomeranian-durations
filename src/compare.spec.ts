import { assertThat, equalTo, throws } from 'hamjest';
import { gt, gte, lt, lte, eq } from 'pomeranian-durations';

const DATE_UNITS = [
  'P1Y',
  'P1M',
  'P1W',
  'P1D'
]

describe('gt', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: false },
    { first: 'PT1S', second: 'PT0S', result: true },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`gt for ${first} and ${second} returns ${result}`, () => {
      assertThat(gt(first, second), equalTo(result));
    });
  });

  it('can be curried', () => {
    // @ts-ignore
    assertThat(gt('PT1S')('PT2S'), equalTo(true));
  })

  describe('throws error for date units', () => {
    DATE_UNITS.forEach((unit) => {
      it(unit, () => {
        assertThat(() => gt(unit, unit), throws());
      })
    })
  })
});

describe('gte', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: true },
    { first: 'PT1S', second: 'PT0S', result: true },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`gt for ${first} and ${second} returns ${result}`, () => {
      assertThat(gte(first, second), equalTo(result));
    });
  });

  it('can be curried', () => {
    // @ts-ignore
    assertThat(gte('PT1S')('PT2S'), equalTo(true));
  })

  describe('throws error for date units', () => {
    DATE_UNITS.forEach((unit) => {
      it(unit, () => {
        assertThat(() => gte(unit, unit), throws());
      })
    })
  })
});


describe('lt', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: false },
    { first: 'PT1S', second: 'PT0S', result: false },
    { first: 'PT0S', second: 'PT1S', result: true },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`lt for ${first} and ${second} returns ${result}`, () => {
      assertThat(lt(first, second), equalTo(result));
    });
  });

  it('can be curried', () => {
    // @ts-ignore
    assertThat(lte('PT1S')('PT2S'), equalTo(false));
  })

  describe('throws error for date units', () => {
    DATE_UNITS.forEach((unit) => {
      it(unit, () => {
        assertThat(() => lt(unit, unit), throws());
      })
    })
  })
});


describe('lt', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: true },
    { first: 'PT1S', second: 'PT0S', result: false },
    { first: 'PT0S', second: 'PT1S', result: true },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`lt for ${first} and ${second} returns ${result}`, () => {
      assertThat(lte(first, second), equalTo(result));
    });
  });

  it('can be curried', () => {
    // @ts-ignore
    assertThat(lte('PT1S')('PT2S'), equalTo(false));
  })

  describe('throws error for date units', () => {
    DATE_UNITS.forEach((unit) => {
      it(unit, () => {
        assertThat(() => lte(unit, unit), throws());
      })
    })
  })
});


describe('eg', () => {
  [
    { first: 'PT0S', second: 'PT0S', result: true },
    { first: 'PT1S', second: 'PT0S', result: false },
    { first: 'PT0S', second: 'PT1S', result: false },
    { first: 'LALA', second: 'PT0S', result: false },
    { first: 'PT10S', second: 'LALA', result: false },
    { first: 'LALA', second: 'LALA', result: false },
  ].forEach(({ first, second, result }) => {
    it(`eq for ${first} and ${second} returns ${result}`, () => {
      assertThat(eq(first, second), equalTo(result));
    });
  });

  it('can be curried', () => {
    // @ts-ignore
    assertThat(eq('PT1S')('PT2S'), equalTo(false));
  })

  describe('throws error for date units', () => {
    DATE_UNITS.forEach((unit) => {
      it(unit, () => {
        assertThat(() => eq(unit, unit), throws());
      })
    })
  })
});

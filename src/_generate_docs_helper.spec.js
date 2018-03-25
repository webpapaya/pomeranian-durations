import { assertThat, equalTo } from 'hamjest';
import {
  extractCategories,
  generateCategoryHeading,
  generateCategoryNavigation,
  extractCategoryDescription,
  generateHeadings,
} from './_generate_docs_helper';

const EXAMPLE = [
  {
    id: 'default',
    longname: 'default',
    name: 'default',
    description: 'Finds a unit in a given ISO8601 duration',
    meta: { lineno: 1, filename: 'find.js', path: '/Users/tmayrhofer/Projects/pomeranian-durations/src' },
  }, {
    id: 'findSeconds',
    longname: 'findSeconds',
    name: 'findSeconds',
    description: 'Finds the seconds in a given ISO8601 duration string.',
    params: [[Object]],
    examples: ['findSeconds(\'PT1S\') // => 1S', 'findSeconds(\'PT1M\') // => undefined'],
    returns: [[Object]],
    meta: { lineno: 53, filename: 'find.js', path: '/Users/tmayrhofer/Projects/pomeranian-durations/src' },
  }, {
    id: 'findMinutes',
    longname: 'findMinutes',
    name: 'findMinutes',
    description: 'Finds the minutes in a given ISO8601 duration string.',
    params: [[Object]],
    examples: ['findMinutes(\'PT1S\') // => 1S\nfindMinutes(\'P1Y\') // => undefined'],
    returns: [[Object]],
    meta: { lineno: 64, filename: 'find.js', path: '/Users/tmayrhofer/Projects/pomeranian-durations/src' },
  }, {
    id: 'fromWeeks',
    longname: 'fromWeeks',
    name: 'fromWeeks',
    description: 'Converts a given number to an ISO8601 duration',
    params: [[Object]],
    examples: ['fromWeeks(1) // => \'PT1W\''],
    meta: { lineno: 72, filename: 'from.js', path: '/Users/tmayrhofer/Projects/pomeranian-durations/src' },
  },
];


describe('extractCategories', () => {
  it('extracts all different categories', () => {
    assertThat(extractCategories(EXAMPLE), equalTo(['find', 'from']));
  });
});

describe('generateCategoryHeading', () => {
  it('generates category heading correctly', () => {
    assertThat(generateCategoryHeading('find'),
      equalTo('<a name="category-find"></a>\n## find'));
  });
});

describe('generateHeadings', () => {
  it('generates headings correctly for category', () => {
    assertThat(generateHeadings(EXAMPLE, 'find'), equalTo([
      '[findSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L53)',
      '[findMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L64)',
    ].join(' | ')));
  });
});

describe('generateCategoryNavigation', () => {
  it('generates navigation correctly', () => {
    assertThat(generateCategoryNavigation(EXAMPLE, 'find'),
      equalTo('- [find](#category-find)\n- [from](#category-from)'));
  });
});

describe('extractCategoryDescription', () => {
  it('extracts description for category', () => {
    assertThat(extractCategoryDescription(EXAMPLE, 'find'),
      equalTo('Finds a unit in a given ISO8601 duration'));
  });

  it('returns empty string when top level description not found', () => {
    assertThat(extractCategoryDescription(EXAMPLE, 'unknown'), equalTo(''));
  });
});


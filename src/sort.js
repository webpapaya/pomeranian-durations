/**
 * Helpers to sort durations. Attention durations with multiple date parts can only
 * be compared using an approximation, so the result might be incorrect! (eg. on some
 * days the following is true: 'PT23H1M' > 'PT1D'). If you're using the same units in
 * all given durations that is not an issue.
 * @name default
 */

import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND } from './constants';
import { toFragments } from './transformations';
import { curry } from './_utils';

const toApproximateSeconds = (isoDuration) => {
  const fragments = toFragments(isoDuration);
  return [
    fragments.seconds * ONE_SECOND,
    fragments.minutes * ONE_MINUTE,
    fragments.hours * ONE_HOUR,
    fragments.days * ONE_DAY,
    fragments.weeks * ONE_DAY * 7,
    fragments.months * ONE_DAY * 30,
    fragments.years * ONE_DAY * 364.25,
  ].reduce((sum, seconds) => sum + seconds, 0);
};

const flipArguments = (fn) => (a, b) => fn(b, a);

/**
 * A function which can be used to sort durations ASC.
 *
 * @param a, {string} an ISO8601 duration
 * @param b, {string} an ISO8601 duration
 * @example
 * ['PT2S', 'PT1S'].sort(sortAsc) // ['PT1S', 'PT2S']
 */
export const sortAsc = (a, b) =>
  toApproximateSeconds(a) - toApproximateSeconds(b);

/**
 * A function which can be used to sort durations in an array of objects ASC.
 *
 * @param a, {string} an ISO8601 duration
 * @param b, {string} an ISO8601 duration
 * @example
 * [{ randomKey: 'PT2S' }, { randomKey: 'PT1S' }]
 *    .sort(sortAscBy('randomKey')) // [{ randomKey: 'PT1S' }, { randomKey: 'PT2S' }]
 */
export const sortAscBy = curry((key, a, b) =>
  sortAsc(a[key], b[key]));

/**
 * A function which can be used to sort durations DESC.
 *
 * @param a, {string} an ISO8601 duration
 * @param b, {string} an ISO8601 duration
 * @example
 * ['PT1S', 'PT2S'].sort(sortDesc) // ['PT2S', 'PT1S']
 */
export const sortDesc = flipArguments(sortAsc);

/**
 * A function which can be used to sort durations in an array of objects DESC.
 *
 * @param a, {string} an ISO8601 duration
 * @param b, {string} an ISO8601 duration
 * @example
 * [{ randomKey: 'PT2S' }, { randomKey: 'PT1S' }]
 *    .sort(sortDescBy('randomKey')) // [{ randomKey: 'PT2S' }, { randomKey: 'PT1S' }]
 */
export const sortDescBy = curry((key, a, b) =>
  sortDesc(a[key], b[key]));

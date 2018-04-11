/**
 * Helpers to sort durations. Attention durations with multiple date parts can only
 * be compared using an approximation, so the result might be incorrect! (eg. on some
 * days the following is true: 'PT23H1M' > 'PT1D'). If you're using the same units in
 * all given durations that is not an issue.
 * @name default
 */

import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND } from './constants';
import { toFragments } from './transformations';

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
 * A function which can be used to sort durations DESC.
 *
 * @param a, {string} an ISO8601 duration
 * @param b, {string} an ISO8601 duration
 * @example
 * ['PT1S', 'PT2S'].sort(sortAsc) // ['PT2S', 'PT1S']
 */
export const sortDesc = (a, b) =>
  toApproximateSeconds(b) - toApproximateSeconds(a);

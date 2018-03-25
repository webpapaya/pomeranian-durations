/**
 * Helpers for validating ISO8601 durations.
 * @name default
 */
import { TIME_DESIGNATOR, DURATION_DESIGNATOR, INVALID_DURATION } from './constants';
import { createRegexBuilder, curry } from './_utils';

const MATCH_NUMBER = /[+-]?\d+(\.\d+)?/.source;
const MATCH_DATE = createRegexBuilder()
  .and(`(${MATCH_NUMBER}Y)?`)
  .and(`(${MATCH_NUMBER}M)?`)
  .and(`(${MATCH_NUMBER}W)?`)
  .and(`(${MATCH_NUMBER}D)?`);

const MATCH_TIME = createRegexBuilder()
  .maybe(createRegexBuilder()
    .and(TIME_DESIGNATOR)
    .and(`(${MATCH_NUMBER}H)?`)
    .and(`(${MATCH_NUMBER}M)?`)
    .and(`(${MATCH_NUMBER}S)?`)
  );

const MATCH_DURATION = createRegexBuilder()
  .startOfLine()
  .and(DURATION_DESIGNATOR)
  .and(MATCH_TIME)
  .and(MATCH_DATE)
  .and(MATCH_TIME)
  .endOfLine();

/**
 * Returns if the iso8601 duration is valid or not.
 * @param isoDuration {string}
 * @returns {boolean}
 * @example
 * isValid('PT1S') // => true
 * @example
 * isValid('invalid') // => false
 */
export const isValid = (isoDuration) =>
  typeof isoDuration === 'string' && MATCH_DURATION.test(isoDuration.toUpperCase());

/**
 * Returns if the iso8601 duration is invalid or not.
 * @param isoDuration {string}
 * @returns {boolean}
 * @example
 * isInvalid('invalid') // => true
 * @example
 * isInvalid('PT1S') // => false
 */
export const isInvalid = (isoDuration) =>
  !isValid(isoDuration);

/**
 * Returns a default value when the given duration is invalid and duration when it is valid.
 * @param value {string}
 * @param isoDuration {string}
 * @example
 * const add10 = compose(
 *   add(10),
 *   whenInvalid(() => { throw new Error('Invalid duration') }),
 * );
 *
 * add10('invalid') // error: 'Invalid duration'
 */
export const whenInvalid = curry((value, isoDuration) => {
  if (isValid(isoDuration)) { return isoDuration; }
  if (typeof value === 'function') { return value(isoDuration); }
  return value;
});

/**
 * Returns a given default value when the given duration matches the string 'Invalid Duration'.
 * In comparison to whenInvalid the function only returns the default value when it exactly matches
 * the 'Invalid Duration' string. Otherwise it just returns the value. In many cases you would prefer
 * this function over `whenInvalid`.
 *
 * @param value {string}
 * @param isoDuration {string}
 * @example
 * const convertToHours = compose(
 *   asHours,
 *   whenInvalidDuration(null),
 * );
 *
 * convertToHours('PT10H') // 10
 * convertToHours('Blub') // null
 */
export const whenInvalidDuration = curry((value, isoDuration) => {
  if (isoDuration !== INVALID_DURATION) { return isoDuration; }
  if (typeof value === 'function') { return value(isoDuration); }
  return value;
});

import { asHours, asMinutes, asSeconds } from './conversions';
import { fromHours, fromMinutes, fromSeconds } from './from';
import { INVALID_DURATION } from './constants';
import { isInvalid } from './validate';

const buildInFunction = (fromFn, asFn) => (isoDuration) => {
  if (isInvalid(isoDuration)) { return INVALID_DURATION; }
  return fromFn(asFn(isoDuration));
};

/**
 * Converts all time parts of an ISO8601 duration to seconds and returns the ISO8601 duration string.
 * @category in
 * @param inSeconds {string} - isoDuration
 * @example
 * inSeconds('PT1M') // => 'PT60S'
 */
export const inSeconds = buildInFunction(fromSeconds, asSeconds);

/**
 * Converts all time parts of an ISO8601 duration to minutes and returns the ISO8601 duration string.
 * @category in
 * @param inSeconds {string} - isoDuration
 * @example
 * inSeconds('PT1H') // => 'PT60M'
 */
export const inMinutes = buildInFunction(fromMinutes, asMinutes);

/**
 * Converts all time parts of an ISO8601 duration to hours and returns the ISO8601 duration string.
 * @category in
 * @param inSeconds {string} - isoDuration
 * @example
 * inSeconds('PT60M') // => 'PT1H'
 */
export const inHours = buildInFunction(fromHours, asHours);

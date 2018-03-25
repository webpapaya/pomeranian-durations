/**
 * Helpers to convert an ISO8601 duration to a different unit.
 * Date components (years, months, weeks, days) can't be
 * converted to other unites without date and timezone information.
 * Because of that converting date components into other units isn't
 * supported right now. To do precise arithmetic operations it is
 * recommended to avoid years, months, weeks and days completely
 * when using durations. For more information have a look at
 * http://www.ostyn.com/standards/scorm/samples/ISOTimeForSCORM.htm
 * @name default
 */

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
 * @param inSeconds {string} - isoDuration
 * @example
 * inSeconds('PT1M') // => 'PT60S'
 */
export const inSeconds = buildInFunction(fromSeconds, asSeconds);

/**
 * Converts all time parts of an ISO8601 duration to minutes and returns the ISO8601 duration string.
 * @param inSeconds {string} - isoDuration
 * @example
 * inMinutes('PT1H') // => 'PT60M'
 */
export const inMinutes = buildInFunction(fromMinutes, asMinutes);

/**
 * Converts all time parts of an ISO8601 duration to hours and returns the ISO8601 duration string.
 * @param inSeconds {string} - isoDuration
 * @example
 * inHours('PT60M') // => 'PT1H'
 */
export const inHours = buildInFunction(fromHours, asHours);

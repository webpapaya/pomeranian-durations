/**
 * Helpers to normalize an ISO8601 duration. (eg. 61 seconds => 1 minute 1 second)
 * @name default
 */

import { INVALID_DURATION, ONE_HOUR, ONE_MINUTE, ONE_SECOND, UNIT_NAMES } from './constants';
import { toFragments, toIso } from './transformations';
import { asMicroseconds } from './conversions';
import { isInvalid } from './validate';
import { pick, pipe } from './_utils';

const TIME_UNITS = [UNIT_NAMES.hours, UNIT_NAMES.minutes, UNIT_NAMES.seconds];

/**
 * Normalizes the time part of an iso8601 duration.
 * @param isoString {string} - an ISO8601 duration
 * @returns isoString {string} - an ISO8601 duration
 * @example
 * normalizeTime('P1DT1234S') // => 'P1DT20M34S'
 * @example
 * normalizeTime('PT1S') // => 'PT1S'
 */
export const normalizeTime = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }


  const fragments = toFragments(isoString);
  const microseconds = pipe(fragments, pick(TIME_UNITS), toIso, asMicroseconds);
  const hours = Math.floor(microseconds / ONE_HOUR);
  const minutes = Math.floor((microseconds - hours * ONE_HOUR) / ONE_MINUTE);
  const seconds = (microseconds - hours * ONE_HOUR - minutes * ONE_MINUTE) / ONE_SECOND;

  return toIso({ ...fragments, hours, minutes, seconds });
};

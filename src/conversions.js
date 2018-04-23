/**
 * Helpers to convert between different units.
 * @name default
 */

import {
  ONE_MILLISECOND,
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR, INVALID_DURATION,
} from './constants';

import {
  findSeconds,
  findHours,
  findMinutes,
  findDays,
  findWeeks,
  findMonths,
  findYears,
} from './find';
import { isInvalid } from './validate';

const asUnit = (isoString, divider) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }

  const microseconds = asMicroseconds(isoString);
  return microseconds / divider;
};

const containsDateUnits = (isoString) => {
  return [
    findDays(isoString) || 0,
    findWeeks(isoString) || 0,
    findMonths(isoString) || 0,
    findYears(isoString) || 0,
  ].some((element) => element !== 0);
};

/**
 * Converts a isoDuration to microseconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in microseconds
 * @example
 * asMicroseconds('PT2s') // => 2000000
 */
export const asMicroseconds = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  if (containsDateUnits(isoString)) { throw new Error('Can\'t convert from date units.'); }

  return [
    (findSeconds(isoString) || 0) * ONE_SECOND,
    (findMinutes(isoString) || 0) * ONE_MINUTE,
    (findHours(isoString) || 0) * ONE_HOUR,
  ].reduce((sum, seconds) => sum + seconds);
};

/**
 * Converts a isoDuration to milliseconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in milliseconds
 * @example
 * asMilliseconds('PT2s') // => 2000
 */
export const asMilliseconds = (isoString) => asUnit(isoString, ONE_MILLISECOND);

/**
 * Converts a isoDuration to seconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in seconds
 * @example
 * asSeconds('PT2s') // => 2
 */
export const asSeconds = (isoString) => asUnit(isoString, ONE_SECOND);

/**
 * Converts a isoDuration to minutes. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in minutes
 * @example
 * asMinutes('PT1h1m') // => 61
 */
export const asMinutes = (isoString) => asUnit(isoString, ONE_MINUTE);

/**
 * Converts a isoDuration to hours. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in hours
 * @example
 * asHours('PT60m') // => 1
 */
export const asHours = (isoString) => asUnit(isoString, ONE_HOUR);

/**
 * Converts a duration to decimal microseconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal microseconds
 * @example
 * asDecimalMicroseconds('PT1m1s') // => 0.000061
 */
export const asDecimalMicroseconds = (isoString) => asSeconds(isoString) / ONE_MILLISECOND / ONE_MILLISECOND;

/**
 * Converts a duration to decimal milliseconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal milliseconds
 * @example
 * asDecimalMilliseconds('PT1m1.1s') // => 0.0611
 */
export const asDecimalMilliseconds = (isoString) => asSeconds(isoString) / ONE_MILLISECOND;

/**
 * Converts a duration to decimal seconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal seconds
 * @example
 * asDecimalSeconds('PT1m1s') // => 61
 */
export const asDecimalSeconds = (isoString) => asSeconds(isoString);

/**
 * Converts a duration to decimal minutes. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal minutes
 * @example
 * asDecimalMinutes('PT1m1s') // => 1.0166666666666666
 */
export const asDecimalMinutes = (isoString) => asDecimalSeconds(isoString) / 60;

/**
 * Converts a duration to decimal hours. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal hours
 * @example
 * asDecimalHours('PT1m1s') // => 0.016944444444444443
 */
export const asDecimalHours = (isoString) => asDecimalMinutes(isoString) / 60;

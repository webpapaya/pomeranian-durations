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
} from './index';
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
 * @returns {number} duration in microseconds
 */
export const asMilliseconds = (isoString) => asUnit(isoString, ONE_MILLISECOND);

/**
 * Converts a isoDuration to seconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in microseconds
 */
export const asSeconds = (isoString) => asUnit(isoString, ONE_SECOND);

/**
 * Converts a isoDuration to minutes. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in microseconds
 */
export const asMinutes = (isoString) => asUnit(isoString, ONE_MINUTE);

/**
 * Converts a isoDuration to hours. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in microseconds
 */
export const asHours = (isoString) => asUnit(isoString, ONE_HOUR);

/**
 * Converts a duration to decimal microseconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal microseconds
 */
export const asDecimalMicroseconds = (isoString) => asSeconds(isoString) / ONE_MILLISECOND / ONE_MILLISECOND;

/**
 * Converts a duration to decimal milliseconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in secimal milliseconds
 */
export const asDecimalMilliseconds = (isoString) => asSeconds(isoString) / ONE_MILLISECOND;

/**
 * Converts a duration to decimal seconds. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal seconds
 */
export const asDecimalSeconds = (isoString) => asSeconds(isoString);

/**
 * Converts a duration to decimal minutes. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal minutes
 */
export const asDecimalMinutes = (isoString) => asDecimalSeconds(isoString) / 60;

/**
 * Converts a duration to decimal hours. Throws an error when the duration
 * contains a date unit because those can't be converted reliably to time units.
 * @param isoString {string} an ISO8601 duration
 * @returns {number} duration in decimal hours
 */
export const asDecimalHours = (isoString) => asDecimalMinutes(isoString) / 60;

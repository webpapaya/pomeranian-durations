import { toIso } from './transformations';
import { ONE_MILLISECOND, ONE_SECOND } from './constants';

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromMicroseconds(1) // => 'PT0.000001S'
 */
export const fromMicroseconds = (amount) => fromSeconds(amount / ONE_SECOND);

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromMilliseconds(1) // => 'PT0.001S'
 */
export const fromMilliseconds = (amount) => fromSeconds(amount / ONE_MILLISECOND);

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromSeconds(1) // => 'PT1S'
 */
export const fromSeconds = (amount) => toIso({ seconds: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromMinutes(1) // => 'PT1M'
 */
export const fromMinutes = (amount) => toIso({ minutes: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromHours(1) // => 'PT1H'
 */
export const fromHours = (amount) => toIso({ hours: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromDays(1) // => 'P1D'
 */
export const fromDays = (amount) => toIso({ days: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromWeeks(1) // => 'PT1W'
 */
export const fromWeeks = (amount) => toIso({ weeks: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromMonths(1) // => 'P1M'
 */
export const fromMonths = (amount) => toIso({ months: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 * @example
 * fromYears(1) // => 'P1Y'
 */
export const fromYears = (amount) => toIso({ years: amount });

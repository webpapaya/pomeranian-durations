import { toIso } from './transformations';

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 */
export const fromSeconds = (amount) => toIso({ seconds: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 */
export const fromMinutes = (amount) => toIso({ minutes: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 */
export const fromHours = (amount) => toIso({ hours: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 */
export const fromDays = (amount) => toIso({ days: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 */
export const fromWeeks = (amount) => toIso({ weeks: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 */
export const fromMonths = (amount) => toIso({ months: amount });

/**
 * Converts a given number to an ISO8601 duration
 * @param amount {number}
 * @returns {string} - an ISO8601 duration
 */
export const fromYears = (amount) => toIso({ years: amount });

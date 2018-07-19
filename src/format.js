/**
 * Helpers to format an iso duration. Available tokens are:
 *
 * | Token   | Unit     | Result example   |
 * |---------|----------|------------------|
 * | %Y      | years    |  0, 01, ..., 112 |
 * | %YY     | years    | 00, 01, ..., 112 |
 * | %M'     | months   |  0,  1, ..., 112 |
 * | %MM     | months   | 00, 01, ..., 112 |
 * | %W      | weeks    |  0,  1, ..., 112 |
 * | %WW     | weeks    | 00, 01, ..., 112 |
 * | %D      | days     |  0,  1, ..., 112 |
 * | %DD     | days     | 00, 01, ..., 112 |
 * | %h      | hours    |  0,  1, ..., 112 |
 * | %hh     | hours    | 00, 01, ..., 112 |
 * | %m      | minutes  |  0,  1, ..., 112 |
 * | %mm     | minutes  | 00, 01, ..., 112 |
 * | %s      | seconds  |  0,  1, ..., 112 |
 * | %ss     | seconds  | 00, 01, ..., 112 |
 *
 * @name default
 */


import { curry, leftpad } from './_utils';
import {
  findDays,
  findHours,
  findMinutes,
  findMonths,
  findSeconds,
  findWeeks,
  findYears,
} from './find';

const compose = (...fns) => (initialValue) =>
  fns.reduce((result, fn) => fn(result), initialValue);

const toPaddedString = curry((number, value) =>
  `${leftpad(number, '0', value)}`);

const TOKEN = {
  '%Y': compose(findYears, toPaddedString(1)),
  '%YY': compose(findYears, toPaddedString(2)),

  '%M': compose(findMonths, toPaddedString(1)),
  '%MM': compose(findMonths, toPaddedString(2)),

  '%W': compose(findWeeks, toPaddedString(1)),
  '%WW': compose(findWeeks, toPaddedString(2)),

  '%D': compose(findDays, toPaddedString(1)),
  '%DD': compose(findDays, toPaddedString(2)),

  '%h': compose(findHours, toPaddedString(1)),
  '%hh': compose(findHours, toPaddedString(2)),

  '%m': compose(findMinutes, toPaddedString(1)),
  '%mm': compose(findMinutes, toPaddedString(2)),

  '%s': compose(findSeconds, toPaddedString(1)),
  '%ss': compose(findSeconds, toPaddedString(2)),
};
const SORTED_KEYS = Object.keys(TOKEN).sort((a, b) => b.length - a.length);


/**
 * Formats a given iso duration by a given template.
 *
 * @param template {string} - the template including al placeholders
 * @param isoString {string} - iso8601 duration string
 * @example
 * format('%hh:%mm:%ss', 'PT1M2S') // => '00:01:02'
 */
export const format = curry((template, isoString) =>
  SORTED_KEYS.reduce((result, key) =>
    result.replace(new RegExp(key, 'g'), TOKEN[key](isoString)), template));

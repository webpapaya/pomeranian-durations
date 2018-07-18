import { curry, leftpad } from "./_utils";
import {
  findDays,
  findHours,
  findMinutes,
  findMonths,
  findSeconds,
  findWeeks,
  findYears,
} from "./find";

const compose = (...fns) => (initialValue) =>
  fns.reduce((result, fn) => fn(result), initialValue);

const toPaddedString = curry((number, value) =>
  `${leftpad(number, '0', value)}`);

const TOKEN = {
  '%y': compose(findYears, toPaddedString(1)),
  '%yy': compose(findYears, toPaddedString(2)),

  '%M': compose(findMonths, toPaddedString(1)),
  '%MM': compose(findMonths, toPaddedString(2)),

  '%w': compose(findWeeks, toPaddedString(1)),
  '%ww': compose(findWeeks, toPaddedString(2)),

  '%d': compose(findDays, toPaddedString(1)),
  '%dd': compose(findDays, toPaddedString(2)),

  '%h': compose(findHours, toPaddedString(1)),
  '%hh': compose(findHours, toPaddedString(2)),

  '%m': compose(findMinutes, toPaddedString(1)),
  '%mm': compose(findMinutes, toPaddedString(2)),

  '%s': compose(findSeconds, toPaddedString(1)),
  '%ss': compose(findSeconds, toPaddedString(2)),
};

export const format = curry((token, isoString) =>
  TOKEN[token](isoString));

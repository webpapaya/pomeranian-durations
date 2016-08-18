import { fromFragments } from './index';
import {
  findSeconds,
  findHours,
  findMinutes,
  findDays,
  findWeeks,
  findMonths,
  findYears,
} from './finders';

import {
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,
} from './constants';

const asFragments = (isoString) => {
  return {
    seconds: findSeconds(isoString),
    minutes: findMinutes(isoString),
    hours: findHours(isoString),
    days: findDays(isoString),
    weeks: findWeeks(isoString),
    months: findMonths(isoString),
    years: findYears(isoString),
  };
};

const addUnit = (isoString, amount, unit) => {
  const fragments = asFragments(isoString);
  fragments[unit] += amount;
  return fromFragments(fragments);
};

export const addSeconds = (isoString, amount) => addUnit(isoString, amount, 'seconds');
export const addMinutes = (isoString, amount) => addUnit(isoString, amount, 'minutes');
export const addHours = (isoString, amount) => addUnit(isoString, amount, 'hours');

export const addDays = (isoString, amount) => addUnit(isoString, amount, 'days');
export const addWeeks = (isoString, amount) => addUnit(isoString, amount, 'weeks');
export const addMonths = (isoString, amount) => addUnit(isoString, amount, 'months');
export const addYears = (isoString, amount) => addUnit(isoString, amount, 'years');

export const isoStringAsMicroseconds = (isoString) => {
  return [
    findSeconds(isoString) * ONE_SECOND,
    findMinutes(isoString) * ONE_MINUTE,
    findHours(isoString) * ONE_HOUR,
    findDays(isoString) * ONE_DAY,
  ].reduce((sum, seconds) => sum + seconds);
};

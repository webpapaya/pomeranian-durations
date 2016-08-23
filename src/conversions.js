import {
  ONE_MILLISECOND,
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
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

const asUnit = (isoString, divider) => {
  const microseconds = asMicroseconds(isoString);
  return microseconds / divider;
};

const containsDateUnits = (isoString) => {
  return [
    findDays(isoString),
    findWeeks(isoString),
    findMonths(isoString),
    findYears(isoString),
  ].some((element) => element !== 0);
};

export const asMicroseconds = (isoString) => {
  if (containsDateUnits(isoString)) { throw new Error('Can\'t convert from date units.'); }
  return [
    findSeconds(isoString) * ONE_SECOND,
    findMinutes(isoString) * ONE_MINUTE,
    findHours(isoString) * ONE_HOUR,
  ].reduce((sum, seconds) => sum + seconds);
};

export const asMilliseconds = (isoString) => asUnit(isoString, ONE_MILLISECOND);
export const asSeconds = (isoString) => asUnit(isoString, ONE_SECOND);
export const asMinutes = (isoString) => asUnit(isoString, ONE_MINUTE);
export const asHours = (isoString) => asUnit(isoString, ONE_HOUR);

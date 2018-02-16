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
    findDays(isoString) || 0,
    findWeeks(isoString) || 0,
    findMonths(isoString) || 0,
    findYears(isoString) || 0,
  ].some((element) => element !== 0);
};

export const asMicroseconds = (isoString) => {
  if (containsDateUnits(isoString)) { throw new Error('Can\'t convert from date units.'); }
  return [
    (findSeconds(isoString) || 0) * ONE_SECOND,
    (findMinutes(isoString) || 0) * ONE_MINUTE,
    (findHours(isoString) || 0) * ONE_HOUR,
  ].reduce((sum, seconds) => sum + seconds);
};

export const asMilliseconds = (isoString) => asUnit(isoString, ONE_MILLISECOND);
export const asSeconds = (isoString) => asUnit(isoString, ONE_SECOND);
export const asMinutes = (isoString) => asUnit(isoString, ONE_MINUTE);
export const asHours = (isoString) => asUnit(isoString, ONE_HOUR);

export const asDecimalMicroseconds = (isoString) => asSeconds(isoString) / ONE_MILLISECOND / ONE_MILLISECOND;
export const asDecimalMilliseconds = (isoString) => asSeconds(isoString) / ONE_MILLISECOND;
export const asDecimalSeconds = (isoString) => asSeconds(isoString);
export const asDecimalMinutes = (isoString) => asDecimalSeconds(isoString) / 60;
export const asDecimalHours = (isoString) => asDecimalMinutes(isoString) / 60;

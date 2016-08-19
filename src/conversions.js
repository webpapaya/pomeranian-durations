import {
  ONE_MICROSECOND,
  ONE_MILLISECOND,
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
} from './constants';

import {
  containsDateUnits,
  findSeconds,
  findHours,
  findMinutes,
} from './finders';

export const isoStringAsMicroseconds = (isoString) => {
  return [
    findSeconds(isoString) * ONE_SECOND,
    findMinutes(isoString) * ONE_MINUTE,
    findHours(isoString) * ONE_HOUR,
  ].reduce((sum, seconds) => sum + seconds);
};

const asUnit = (isoString, divider) => {
  if (containsDateUnits(isoString)) { throw new Error('Can\'t convert from date units.'); }
  const microseconds = isoStringAsMicroseconds(isoString);
  return microseconds / divider;
};

export const asMicroseconds = (isoString) => asUnit(isoString, ONE_MICROSECOND);
export const asMilliseconds = (isoString) => asUnit(isoString, ONE_MILLISECOND);
export const asSeconds = (isoString) => asUnit(isoString, ONE_SECOND);
export const asMinutes = (isoString) => asUnit(isoString, ONE_MINUTE);
export const asHours = (isoString) => asUnit(isoString, ONE_HOUR);

import {
  ONE_MICROSECOND,
  ONE_MILLISECOND,
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
} from './constants';

import {
  durationStringToMicroseconds
} from './calculations';

const asUnit = (isoString, divider) => {
  const microseconds = durationStringToMicroseconds(isoString);
  return microseconds / divider;
};

export const asMicroseconds = (isoString) => asUnit(isoString, ONE_MICROSECOND);
export const asMilliseconds = (isoString) => asUnit(isoString, ONE_MILLISECOND);
export const asSeconds = (isoString) => asUnit(isoString, ONE_SECOND);
export const asMinutes = (isoString) => asUnit(isoString, ONE_MINUTE);
export const asHours = (isoString) => asUnit(isoString, ONE_HOUR);

import {
  ONE_MILLISECOND,
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
} from './constants';

import {
  durationStringToMicroseconds
} from './calculations';

export const asMicroseconds = (isoString) => durationStringToMicroseconds(isoString);
export const asMilliseconds = (isoString) => {
  const microseconds = durationStringToMicroseconds(isoString);
  return microseconds / ONE_MILLISECOND;
};

export const asSeconds = (isoString) => {
  const microseconds = durationStringToMicroseconds(isoString);
  return microseconds / ONE_SECOND;
};

export const asMinutes = (isoString) => {
  const microseconds = durationStringToMicroseconds(isoString);
  return microseconds / ONE_MINUTE;
};

export const asHours = (isoString) => {
  const microseconds = durationStringToMicroseconds(isoString);
  return microseconds / ONE_HOUR;
};

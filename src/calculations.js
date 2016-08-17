import { fromFragments } from './index';
import {
  findSeconds,
  findHours,
  findMinutes,
  findDays,
} from './finders'

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
  };
};

export const addSeconds = (isoString, amount) => {
  const fragments = asFragments(isoString);
  fragments.seconds += amount;
  return fromFragments(fragments);
};

export const isoStringAsMicroseconds = (isoString) => {
  return [
    findSeconds(isoString) * ONE_SECOND,
    findMinutes(isoString) * ONE_MINUTE,
    findHours(isoString) * ONE_HOUR,
    findDays(isoString) * ONE_DAY,
  ].reduce((sum, seconds) => sum + seconds);
};

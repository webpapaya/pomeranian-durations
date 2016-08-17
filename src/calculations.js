import { fromFragments } from './index';
import {
  findSeconds,
  findHours,
  findMinutes,
} from './finders'

const asFragments = (isoString) => {
  return {
    seconds: findSeconds(isoString),
    minutes: findMinutes(isoString),
    hours: findHours(isoString),
  }
};

export const addSeconds = (isoString, amount) => {
  const fragments = asFragments(isoString);
  fragments.seconds += amount;
  return fromFragments(fragments);
};

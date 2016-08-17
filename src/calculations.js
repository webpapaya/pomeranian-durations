import {
  fromFragments,
  findSeconds,
  findHours,
  findMinutes,
} from './index';

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

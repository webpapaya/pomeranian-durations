import {
  findSeconds,
  findMinutes,
  findHours,
  findDays,
  findMonths,
  findYears,
} from './finders';

import { addSeconds } from './calculations';

import {
  ONE_MILLISECOND,
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,

  DURATION_DESIGNATOR,
  TIME_DESIGNATOR,

  UNITS,
  DATE_UNITS,
  TIME_UNITS
} from './constants';



const toInt = (number) => parseInt(number, 10);


const durationStringToMicroseconds = (isoString) => {
  return [
    findSeconds(isoString) * ONE_SECOND,
    findMinutes(isoString) * ONE_MINUTE,
    findHours(isoString) * ONE_HOUR,
    findDays(isoString) * ONE_DAY,
  ].reduce((sum, seconds) => sum + seconds);
};

const normalize = (isoString) => {
  const microseconds = durationStringToMicroseconds(isoString);
  const milliseconds = toInt(microseconds / 1000);
  const seconds = toInt(milliseconds / 1000);
  const minutes = toInt(seconds / 60);
  const hours = toInt(minutes / 60);

  return {
    microseconds: microseconds - (milliseconds * 1000),
    milliseconds: milliseconds - (seconds * 1000),
    seconds: seconds - (minutes * 60),
    minutes: minutes - (hours * 60),
    hours: hours,
  };
};


const buildIsoComponent = (fragments, units) => {
  return Object.keys(fragments)
    .filter((unitName) => Object.keys(units).includes(unitName))
    .sort((a, b) => {
      const sortedUnitNames = Object.keys(UNITS);
      return  sortedUnitNames.indexOf(b) - sortedUnitNames.indexOf(a);
    })
    .reduce((prev, name) => {
      if (fragments[name] === 0) { return prev; }
      const unit = units[name];
      const value = fragments[name];
      return `${prev}${value}${unit}`;
    }, '');
};

const buildDateComponent = (fragments) => buildIsoComponent(fragments, DATE_UNITS);
const buildTimeComponent = (fragments) => buildIsoComponent(fragments, TIME_UNITS);

const toIso = (fragments) => {
  return [
    DURATION_DESIGNATOR,
    buildDateComponent(fragments),
    TIME_DESIGNATOR,
    buildTimeComponent(fragments),
  ].join('');
};

const toNormalizedIso = (isoString) => {
  const durations = normalize(isoString);
  return toIso(durations);
};

export const fromFragments = (fragments) => {
  const isoString = toIso(fragments);
  return fromIso(isoString);
};

export const fromIso = (isoString) => {
  const microseconds = durationStringToMicroseconds(isoString);

  return {
    asMicroseconds: () => microseconds,
    asMilliseconds: () => microseconds / ONE_MILLISECOND,
    asSeconds: () => microseconds / ONE_SECOND,
    asMinutes: () => microseconds / ONE_MINUTE,
    asHours: () => microseconds / ONE_HOUR,

    findSeconds: () => findSeconds(isoString),
    findMinutes: () => findMinutes(isoString),
    findHours: () => findHours(isoString),
    findDays: () => findDays(isoString),
    findYears: () => findYears(isoString),
    findMonths: () => findMonths(isoString),

    addSeconds: (amount) => addSeconds(isoString, amount),
    
    toIso: () => isoString,
    toNormalizedIso: () => toNormalizedIso(isoString),

    ...normalize(isoString),
  };
};

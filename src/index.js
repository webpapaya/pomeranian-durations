import {
  findSeconds,
  findMinutes,
  findHours,
  findDays,
  findMonths,
  findYears,
} from './finders';

import { addSeconds } from './calculations';

const ONE_MICROSECOND = 1;
const ONE_MILLISECOND = ONE_MICROSECOND * 1000;
const ONE_SECOND = ONE_MILLISECOND * 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

export const TIME_DESIGNATOR = 'T';
export const DURATION_DESIGNATOR = 'P';

export const TIME_UNITS = {
  seconds: 'S',
  minutes: 'M',
  hours: 'H',
};

export const DATE_UNITS = {
  days: 'D',
  months: 'M',
  years: 'Y',
};

export const UNITS = {
  ...TIME_UNITS,
  ...DATE_UNITS,
};

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

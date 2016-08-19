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
  asMicroseconds,
  asMilliseconds,
  asSeconds,
  asMinutes,
  asHours,
} from './conversions';

import {
  DURATION_DESIGNATOR,
  TIME_DESIGNATOR,

  UNITS,
  DATE_UNITS,
  TIME_UNITS,
} from './constants';

const toInt = (number) => parseInt(number, 10);

const normalize = (isoString) => {
  const microseconds = asMicroseconds(isoString);
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
      return sortedUnitNames.indexOf(b) - sortedUnitNames.indexOf(a);
    })
    .reduce((prev, name) => {
      if (fragments[name] === 0) { return prev; }
      const unit = units[name];
      const value = fragments[name];
      return `${prev}${value}${unit}`;
    }, '');
};

const buildDateComponent = (fragments) => {
  const dateComponent = buildIsoComponent(fragments, DATE_UNITS);
  return `${DURATION_DESIGNATOR}${dateComponent}`;
};

const buildTimeComponent = (fragments) => {
  const timeComponent = buildIsoComponent(fragments, TIME_UNITS);
  return timeComponent ? `${TIME_DESIGNATOR}${timeComponent}` : '';
};

export const toIso = (fragments) => {
  const dateComponent = buildDateComponent(fragments);
  const timeComponent = buildTimeComponent(fragments);
  return `${dateComponent}${timeComponent}`;
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
  return {
    asMicroseconds: () => asMicroseconds(isoString),
    asMilliseconds: () => asMilliseconds(isoString),
    asSeconds: () => asSeconds(isoString),
    asMinutes: () => asMinutes(isoString),
    asHours: () => asHours(isoString),

    findSeconds: () => findSeconds(isoString),
    findMinutes: () => findMinutes(isoString),
    findHours: () => findHours(isoString),
    findDays: () => findDays(isoString),
    findYears: () => findYears(isoString),
    findMonths: () => findMonths(isoString),

    addSeconds: (amount) => addSeconds(isoString, amount),

    toIso: () => isoString,
    toNormalizedIso: () => toNormalizedIso(isoString),
  };
};

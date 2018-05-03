import { toFragments } from './transformations';
import { isInvalid } from './validate';
import { INVALID_DURATION } from './constants';
import { except, leftpad, pick } from "./_utils";

const KEY_TO_POSTGRES_MAP = {
  years: 'years',
  months: 'mons',
  days: 'days',
  hours: 'hours',
  minutes: 'mins',
  seconds: 'seconds',
};

const leftPadZeros = leftpad(2, '0');
const fragmentsToPostgresVerbose = (fragments) => Object.keys(fragments)
  .filter((unit) => fragments[unit] !== 0)
  .map((unit) => `${fragments[unit]} ${KEY_TO_POSTGRES_MAP[unit]}`)
  .join(' ');

const fragmentsToPostgresTime = (fragments) => [
  leftPadZeros(fragments.hours),
  leftPadZeros(fragments.minutes),
  leftPadZeros(fragments.seconds),
].join(':');

export const toPostgresVerbose = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  const fragments = toFragments(isoString);
  return fragmentsToPostgresVerbose(fragments);
};

export const toPostgres = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  const fragments = toFragments(isoString);
  const timeParts = pick('hours minutes seconds'.split(' '), fragments);
  const dateParts = except('hours minutes seconds'.split(' '), fragments);
  return [
    fragmentsToPostgresVerbose(dateParts),
    fragmentsToPostgresTime(timeParts),
  ].join('');
};

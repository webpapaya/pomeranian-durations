import { toFragments } from './transformations';
import { isInvalid } from './validate';
import { INVALID_DURATION } from './constants';

const KEY_TO_POSTGRES_MAP = {
  years: 'years',
  months: 'mons',
  days: 'days',
  hours: 'hours',
  minutes: 'mins',
  seconds: 'seconds',
};

export const toPostgresVerbose = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  const fragments = toFragments(isoString);
  return Object.keys(fragments)
    .filter((unit) => fragments[unit] !== 0)
    .map((unit) => `${fragments[unit]} ${KEY_TO_POSTGRES_MAP[unit]}`)
    .join(' ');
};

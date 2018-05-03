import { toFragments } from './transformations';
import { isInvalid } from './validate';
import { INVALID_DURATION, UNIT_ORDER } from './constants';
import { leftpad, pipe, joinWhen } from './_utils';
import { asMicroseconds } from './conversions';
import { absolute } from './math';
import { normalizeTime } from './normalize';
import { removeDateUnits, removeTimeUnits } from './remove';

const KEY_TO_POSTGRES_MAP = {
  years: 'years',
  months: 'mons',
  days: 'days',
  hours: 'hours',
  minutes: 'mins',
  seconds: 'seconds',
};

const leftPadZeros = leftpad(2, '0');
const isoStringToPostgresVerbose = (isoString) => {
  const fragments = toFragments(isoString);
  return Object.keys(fragments)
    .sort((a, b) => UNIT_ORDER.indexOf(b) - UNIT_ORDER.indexOf(a))
    .filter((unit) => fragments[unit] !== 0)
    .map((unit) => `${fragments[unit]} ${KEY_TO_POSTGRES_MAP[unit]}`)
    .join(' ');
};

const fragmentsToPostgresTime = (isoString) => {
  const microseconds = pipe(isoString, asMicroseconds);
  const updatedFragments = pipe(isoString, absolute, normalizeTime, toFragments);
  const sign = microseconds < 0 ? '-' : '';
  return sign + [
    leftPadZeros(updatedFragments.hours),
    leftPadZeros(updatedFragments.minutes),
    leftPadZeros(updatedFragments.seconds),
  ].join(':');
};

/**
 * Converts an ISO8601 duration to a Postgres verbose duration.
 * @param isoString {string} - ISO8601 duration
 * @returns {string} - postgres verbose duration string
 * @example
 * toPostgresVerbose('P2DT3M') // => '2 days 3 mins'
 */
export const toPostgresVerbose = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  return isoStringToPostgresVerbose(isoString);
};

/**
 * Converts an ISO8601 duration to a Postgres duration.
 * @param isoString {string} - ISO8601 duration
 * @returns {string} - postgres verbose duration string
 * @example
 * toPostgres('P2DT1M') // => '2 days 00:01:00'
 */
export const toPostgres = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  const timeParts = pipe(isoString, removeDateUnits, fragmentsToPostgresTime);
  const dateParts = pipe(isoString, removeTimeUnits, isoStringToPostgresVerbose);
  return joinWhen((value) => value !== '', ' ', dateParts, timeParts);
};

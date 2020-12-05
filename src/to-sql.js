import { toFragments } from './transformations';
import { isInvalid } from './validate';
import { INVALID_DURATION, UNIT_ORDER } from './constants';
import { leftPad, pipe, joinWhen, curry, values } from './_utils';
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

const leftPadZeros = (value) => leftPad(2, '0', value);
const isoStringToPostgresVerbose = (isoString) => {
  const fragments = toFragments(isoString);
  return Object.keys(fragments)
    .sort((a, b) => UNIT_ORDER.indexOf(b) - UNIT_ORDER.indexOf(a))
    .filter((unit) => fragments[unit] !== 0)
    .map((unit) => `${fragments[unit]} ${KEY_TO_POSTGRES_MAP[unit]}`)
    .join(' ');
};

const fragmentsToSqlTime = curry((leftPadHours, isoString) => {
  const microseconds = pipe(isoString, asMicroseconds);
  if (microseconds === 0) { return ''; }
  const updatedFragments = pipe(isoString, absolute, normalizeTime, toFragments);
  const sign = microseconds < 0 ? '-' : '';
  return sign + [
    leftPadHours ? leftPadZeros(updatedFragments.hours) : updatedFragments.hours,
    leftPadZeros(updatedFragments.minutes),
    leftPadZeros(updatedFragments.seconds),
  ].join(':');
});

const fragmentsToSqlDate = (isoString) => {
  const fragments = toFragments(isoString);
  if (values(fragments).every((fragment) => fragment === 0)) { return ''; }
  return `${fragments.years}-${fragments.months} ${fragments.days}`;
};

/**
 * Converts an ISO8601 duration to a Postgres verbose duration.
 * @param isoString {string} - ISO8601 duration
 * @returns {string} - postgres verbose duration string
 * @example
 * toPostgresVerbose('P2DT3M') // => '@ 2 days 3 mins'
 */
export const toPostgresVerbose = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  return `@ ${isoStringToPostgresVerbose(isoString)}`.trim();
};

/**
 * Converts an ISO8601 duration to a Postgres duration.
 * @param isoString {string} - ISO8601 duration
 * @returns {string} - postgres duration string
 * @example
 * toPostgres('P2DT1M') // => '2 days 00:01:00'
 */
export const toPostgres = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  const timeParts = pipe(isoString, removeDateUnits, fragmentsToSqlTime(true));
  const dateParts = pipe(isoString, removeTimeUnits, isoStringToPostgresVerbose);
  return joinWhen((value) => value !== '', ' ', dateParts, timeParts);
};

/**
 * Converts an ISO8601 duration to a SQL duration.
 * @param isoString {string} - ISO8601 duration
 * @returns {string} - sql duration string
 * @example
 * toSql('P1Y2DT1M') // => '1-0 2 0:01:00'
 */
export const toSql = (isoString) => {
  if (isInvalid(isoString)) { return INVALID_DURATION; }
  const timeParts = pipe(isoString, removeDateUnits, fragmentsToSqlTime(false));
  const dateParts = pipe(isoString, removeTimeUnits, fragmentsToSqlDate);
  return joinWhen((value) => value !== '', ' ', dateParts, timeParts);
};

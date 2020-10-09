export const ONE_MICROSECOND = 1;
export const ONE_MILLISECOND = ONE_MICROSECOND * 1000;
export const ONE_SECOND = ONE_MILLISECOND * 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const ONE_HOUR = ONE_MINUTE * 60;
export const ONE_DAY = ONE_HOUR * 24;

export const TIME_DESIGNATOR = 'T';
export const DURATION_DESIGNATOR = 'P';
export const INVALID_DURATION = 'Invalid Duration';

export const UNIT_NAMES_LIST = [
  'microseconds',
  'milliseconds',
  'seconds',
  'minutes',
  'hours',
  'days',
  'weeks',
  'months',
  'years',
];

export const UNIT_NAMES = UNIT_NAMES_LIST.reduce((result, unitName) => {
  // eslint-disable-next-line no-param-reassign
  result[unitName] = unitName;
  return result;
}, {});

export const UNIT_ORDER = [
  UNIT_NAMES.microseconds,
  UNIT_NAMES.milliseconds,
  UNIT_NAMES.seconds,
  UNIT_NAMES.minutes,
  UNIT_NAMES.hours,
  UNIT_NAMES.days,
  UNIT_NAMES.weeks,
  UNIT_NAMES.months,
  UNIT_NAMES.years,
];

export const TIME_UNITS = {
  [UNIT_NAMES.seconds]: 'S',
  [UNIT_NAMES.minutes]: 'M',
  [UNIT_NAMES.hours]: 'H',
};

export const DATE_UNITS = {
  [UNIT_NAMES.days]: 'D',
  [UNIT_NAMES.weeks]: 'W',
  [UNIT_NAMES.months]: 'M',
  [UNIT_NAMES.years]: 'Y',
};

export const UNITS = {
  ...TIME_UNITS,
  ...DATE_UNITS,
};

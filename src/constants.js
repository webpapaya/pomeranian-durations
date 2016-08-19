export const ONE_MICROSECOND = 1;
export const ONE_MILLISECOND = ONE_MICROSECOND * 1000;
export const ONE_SECOND = ONE_MILLISECOND * 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const ONE_HOUR = ONE_MINUTE * 60;
export const ONE_DAY = ONE_HOUR * 24;

export const TIME_DESIGNATOR = 'T';
export const DURATION_DESIGNATOR = 'P';

export const UNIT_NAMES = {
  microseconds: 'microseconds',
  milliseconds: 'milliseconds',
  seconds: 'seconds',
  minutes: 'minutes',
  hours: 'hours',
  days: 'days',
  weeks: 'weeks',
  months: 'months',
  years: 'years',
};

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

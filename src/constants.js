export const ONE_MICROSECOND = 1;
export const ONE_MILLISECOND = ONE_MICROSECOND * 1000;
export const ONE_SECOND = ONE_MILLISECOND * 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const ONE_HOUR = ONE_MINUTE * 60;
export const ONE_DAY = ONE_HOUR * 24;

export const TIME_DESIGNATOR = 'T';
export const DURATION_DESIGNATOR = 'P';

export const TIME_UNITS = {
  seconds: 'S',
  minutes: 'M',
  hours: 'H',
};

export const DATE_UNITS = {
  days: 'D',
  weeks: 'W',
  months: 'M',
  years: 'Y',
};

export const UNITS = {
  ...TIME_UNITS,
  ...DATE_UNITS,
};




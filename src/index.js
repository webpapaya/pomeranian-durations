const ONE_MICROSECOND = 1;
const ONE_MILLISECOND = ONE_MICROSECOND * 1000;
const ONE_SECOND = ONE_MILLISECOND * 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const TIME_DESIGNATOR = 'T';
const DURATION_DESIGNATOR = 'P';

const TIME_UNITS = {
  seconds: 'S',
  minutes: 'M',
  hours: 'H',
};

const DATE_UNITS = {
  days: 'D',
  months: 'M',
  years: 'Y',
};

const UNITS = {
  ...TIME_UNITS,
  ...DATE_UNITS,
};

const toInt = (number) => parseInt(number, 10);

const extractTimeComponents = (isoString) => isoString.split(TIME_DESIGNATOR)[1] || "";
const extractDateComponents = (isoString) => {
  if(isoString.lastIndexOf(TIME_DESIGNATOR) === -1) { return isoString.replace(DURATION_DESIGNATOR, ''); }
  return isoString.substring(isoString.lastIndexOf(DURATION_DESIGNATOR)+1,isoString.lastIndexOf(TIME_DESIGNATOR));
};

const findUnit = (stringComponent, unit) => {
  const matchedUnit = stringComponent
    .toUpperCase()
    .match(new RegExp(`[+,-]?[0-9]+(\\.[0-9]+)?${unit}`));

  if (!matchedUnit) { return 0; }
  return parseFloat(matchedUnit[0].slice(0, -1));
};

const findTimeUnit = (isoString, unit) => {
  const timeComponent = extractTimeComponents(isoString);
  return findUnit(timeComponent, unit);
};

const findDateUnit = (isoString, unit) => {
  const dateComponent = extractDateComponents(isoString);
  return findUnit(dateComponent, unit);
};

const findSeconds = (isoString) => findTimeUnit(isoString, UNITS.seconds);
const findMinutes = (isoString) => findTimeUnit(isoString, UNITS.minutes);
const findHours = (isoString) => findTimeUnit(isoString, UNITS.hours);

const findDays = (isoString) => findDateUnit(isoString, UNITS.days);
const findMonths = (isoString) => findDateUnit(isoString, UNITS.months);
const findYears = (isoString) => findDateUnit(isoString, UNITS.years);

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
  const days = toInt(hours / 24);

  return {
    microseconds: microseconds - (milliseconds * 1000),
    milliseconds: milliseconds - (seconds * 1000),
    seconds: seconds - (minutes * 60),
    minutes: minutes - (hours * 60),
    hours: hours - (days * 24),
    days: days,
  }
};


const buildIsoComponent = (durations, units) => {
  return Object.keys(durations)
    .filter((unitName) => Object.keys(units).includes(unitName))
    .reverse()
    .reduce((prev, name) => {
      if(durations[name] === 0) { return prev; }
      const unit = units[name];
      const values = durations[name];
      return `${prev}${values}${unit}`;
    }, '');
};

const buildDateComponent = (durations) =>  buildIsoComponent(durations, DATE_UNITS);
const buildTimeComponent = (durations) =>  buildIsoComponent(durations, TIME_UNITS);

const toNormalizedIso = (isoString) => {
  const durations = normalize(isoString);
  return [
    DURATION_DESIGNATOR,
    buildDateComponent(durations),
    TIME_DESIGNATOR,
    buildTimeComponent(durations),
  ].join('');
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
    toNormalizedIso: () => toNormalizedIso(isoString),

    ...normalize(isoString),
  };
};

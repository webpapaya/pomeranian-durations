const ONE_MICROSECOND = 1;
const ONE_MILLISECOND = ONE_MICROSECOND * 1000;
const ONE_SECOND = ONE_MILLISECOND * 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const toInt = (number) => parseInt(number, 10);

const extractTimeComponents = (isoString) => isoString.split("T")[1] || "";
const extractDateComponents = (isoString) => {
  if(isoString.lastIndexOf('T') === -1) { return isoString.replace('P', ''); }
  return isoString.substring(isoString.lastIndexOf("P")+1,isoString.lastIndexOf("T"));
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

const findSeconds = (isoString) => findTimeUnit(isoString, 'S');
const findMinutes = (isoString) => findTimeUnit(isoString, 'M');
const findHours = (isoString) => findTimeUnit(isoString, 'H');

const findDays = (isoString) => findDateUnit(isoString, 'D');
const findMonths = (isoString) => findDateUnit(isoString, 'M');
const findYears = (isoString) => findDateUnit(isoString, 'Y');

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

    ...normalize(isoString),
  };
};

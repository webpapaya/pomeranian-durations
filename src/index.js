const ONE_MICROSECOND = 1;
const ONE_MILLISECOND = ONE_MICROSECOND * 1000;
const ONE_SECOND = ONE_MILLISECOND * 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const toInt = (number) => parseInt(number, 10);
const findUnit = (isoString, unit) => {
  const matchedUnit = isoString.match(new RegExp(`[+,-]?[0-9]+(\.[0-9]+)?${unit}`));
  if (!matchedUnit) { return 0; }
  return parseFloat(matchedUnit[0].slice(0, -1));
};

const findSeconds = (isoString) => findUnit(isoString, 's');
const findMinutes = (isoString) => findUnit(isoString, 'm');
const findHours = (isoString) => findUnit(isoString, 'h');
const findDays = (isoString) => findUnit(isoString, 'D');

const durationStringToMicroseconds = (isoString) => {
  return [
    findSeconds(isoString) * ONE_SECOND,
    findMinutes(isoString) * ONE_MINUTE,
    findHours(isoString) * ONE_HOUR,
    findDays(isoString) * ONE_DAY,
  ].reduce((sum, seconds) => sum + seconds);
};

export const fromIso = (isoString) => {
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
  };
};

const ONE_MICROSECOND = 1;
const ONE_MILLISECOND = ONE_MICROSECOND * 1000;
const ONE_SECOND = ONE_MILLISECOND * 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const toInt = (number) => parseInt(number, 10);
const hasFraction = (number) => number.toString().match(/\./);

const findUnit = (isoString, unit) => {
  const matchedSeconds = isoString.match(new RegExp(`[+,-]?[0-9]+(\.[0-9]+)?${unit}`));
  if (matchedSeconds) { return parseFloat(matchedSeconds[0].slice(0, -1)); }
  return 0;
};


const findMicroseconds = (isoString) => {
  const seconds = findUnit(isoString, 's');
  if (!hasFraction(seconds)) { return 0 ; }

  const fractionsOfSeconds = parseFloat('0.' + seconds.toString().split('.')[1]);
  return fractionsOfSeconds * ONE_SECOND;
};

const findSeconds = (isoString) => parseInt(findUnit(isoString, 's'));
const findMinutes = (isoString) => findUnit(isoString, 'm');
const findHours = (isoString) => findUnit(isoString, 'h');
const findDays = (isoString) => findUnit(isoString, 'D');


const durationStringToMicroseconds = (isoString) => {
  return [
    findMicroseconds(isoString),
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

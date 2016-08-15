const toInt = (number) => parseInt(number, 10);
const findUnit = (isoString, unit) => {
  const matchedSeconds = isoString.match(new RegExp(`[+,-]?[0-9]+(\.[0-9]+)?${unit}`));
  if(matchedSeconds) { return parseFloat(matchedSeconds[0].slice(0, -1)); }
  return 0;
};
const findMicroseconds = (isoString) => {
  const seconds = findUnit(isoString, 's');
  const hasFraction = seconds.toString().match(/\./);
  if(!hasFraction) { return 0 ; }

  const fractionsOfSeconds = parseFloat('0.' + seconds.toString().split('.')[1]);
  return fractionsOfSeconds * 1000000;
};

const findSeconds = (isoString) => parseInt(findUnit(isoString, 's'));
const findMinutes = (isoString) => findUnit(isoString, 'm');
const findHours = (isoString) => findUnit(isoString, 'h');
const findDays = (isoString) => findUnit(isoString, 'D');

const durationStringToMicroSeconds = (isoString) => {
  return [
    findMicroseconds(isoString),
    findSeconds(isoString) * 1000000,
    findMinutes(isoString) * 60 * 1000000,
    findHours(isoString) * 60 * 60 * 1000000,
    findDays(isoString) * 60 * 60 * 24 * 1000000,
  ].reduce((sum, seconds) => sum + seconds);
};

export const fromIso = (isoString) => {
  const microseconds = durationStringToMicroSeconds(isoString);
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

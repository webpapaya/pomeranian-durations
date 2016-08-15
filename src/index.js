const toInt = (number) => parseInt(number, 10);

const findUnit = (isoString, unit) => {
  const matchedSeconds = isoString.match(new RegExp(`[0-9]+${unit}`));
  if(matchedSeconds) { return toInt(matchedSeconds[0].slice(0, -1)); }
  return 0;
};

const findSeconds = (isoString) => findUnit(isoString, 'S');
const findMinutes = (isoString) => findUnit(isoString, 'M');

export const fromIso = (isoString) => {
  const secondsInIsoString = findSeconds(isoString) + (findMinutes(isoString) * 60);
  const seconds = toInt(secondsInIsoString);
  const minutes = toInt(seconds / 60);
  const hours = toInt(minutes / 60);
  const days = toInt(hours / 24);

  return {
    seconds: seconds - (minutes * 60),
    minutes: minutes - (hours * 60),
    hours: hours - (days * 24),
    days: days,
  };
};

const toInt = (number) => parseInt(number, 10);

const findSeconds = (isoString) => {
  const matchedSeconds = isoString.match(/[0-9]+S/);
  if(matchedSeconds) { return toInt(matchedSeconds[0].slice(0, -1)); }
  return 0;
};

const findMinutes = (isoString) => {
  const matchedMinutes = isoString.match(/[0-9]+M/);
  if(matchedMinutes) { return toInt(matchedMinutes[0].slice(0, -1)); }
  return 0;
};

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

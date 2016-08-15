const toInt = (number) => parseInt(number, 10);

export const fromIso = (isoString) => {
  const seconds = toInt(isoString.match(/[0-9]+/)[0]);
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

export const fromIso = (isoString) => {
  const seconds = parseInt(isoString.match(/[0-9]+/)[0]);
  const minutes = parseInt(seconds / 60);
  const hours = parseInt(minutes / 60);
  const days = parseInt(hours / 24);

  return {
    seconds: seconds - (minutes * 60),
    minutes: minutes - (hours * 60),
    hours: hours - (days * 24),
    days: days,
  }
};

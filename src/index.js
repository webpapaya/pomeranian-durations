export const fromIso = (isoString) => {
  const seconds = parseInt(isoString.match(/[0-9]+/)[0]);
  const minutes = parseInt(seconds / 60);

  return {
    seconds: seconds - (minutes * 60),
    minutes: minutes
  }
};

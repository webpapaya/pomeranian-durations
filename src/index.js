export const fromIso = (isoString) => {
  const seconds = parseInt(isoString.match(/[0-9]/)[0]);
  return {
    seconds: seconds
  }
};

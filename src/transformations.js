import {
  DURATION_DESIGNATOR,
  TIME_DESIGNATOR,

  UNITS,
  DATE_UNITS,
  TIME_UNITS,
} from './constants';

const buildIsoComponent = (fragments, units) => {
  return Object.keys(fragments)
    .filter((unitName) => Object.keys(units).includes(unitName))
    .sort((a, b) => {
      const sortedUnitNames = Object.keys(UNITS);
      return sortedUnitNames.indexOf(b) - sortedUnitNames.indexOf(a);
    })
    .reduce((prev, name) => {
      if (fragments[name] === 0) { return prev; }
      const unit = units[name];
      const value = fragments[name];
      return `${prev}${value}${unit}`;
    }, '');
};

const buildDateComponent = (fragments) => {
  const dateComponent = buildIsoComponent(fragments, DATE_UNITS);
  return `${DURATION_DESIGNATOR}${dateComponent}`;
};

const buildTimeComponent = (fragments) => {
  const timeComponent = buildIsoComponent(fragments, TIME_UNITS);
  return timeComponent ? `${TIME_DESIGNATOR}${timeComponent}` : '';
};

export const toIso = (fragments) => {
  const dateComponent = buildDateComponent(fragments);
  const timeComponent = buildTimeComponent(fragments);
  return `${dateComponent}${timeComponent}`;
};

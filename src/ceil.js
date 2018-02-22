import {
  floor,
  floorDays,
  floorHours,
  floorMinutes,
  floorMonths,
  floorSeconds,
  floorWeeks,
  floorYears,
} from './floor';

import {
  add,
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addSeconds,
  addWeeks,
  addYears,
} from './add';

const buildCeilFn = (addFn, floorFn) => (isoString) =>
  floorFn(addFn(1, isoString));

export const ceil = (granularity, isoString) =>
  floor(granularity, add(granularity, isoString));

export const ceilSeconds = buildCeilFn(addSeconds, floorSeconds);
export const ceilMinutes = buildCeilFn(addMinutes, floorMinutes);
export const ceilHours = buildCeilFn(addHours, floorHours);
export const ceilDays = buildCeilFn(addDays, floorDays);
export const ceilWeeks = buildCeilFn(addWeeks, floorWeeks);
export const ceilMonths = buildCeilFn(addMonths, floorMonths);
export const ceilYears = buildCeilFn(addYears, floorYears);

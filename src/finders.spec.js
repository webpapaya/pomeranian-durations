import { assertThat, equalTo } from 'hamjest';

import {
  findYears,
  findMonths,
  findWeeks,
  findDays,
  findHours,
  findMinutes,
  findSeconds,
} from './finders';

describe('unit finders for P3Y6M1W4DT12H30M17.5S', () => {
  it('finds 3 years', () => assertThat(
    findYears('P3Y6M1W4DT12H30M17.5S'), equalTo(3)));

  it('finds 6 months', () => assertThat(
    findMonths('P3Y6M1W4DT12H30M17.5S'), equalTo(6)));

  it('finds 4 days', () => assertThat(
    findDays('P3Y6M1W4DT12H30M17.5S'), equalTo(4)));

  it('finds 1 week', () => assertThat(
    findWeeks('P3Y6M1W4DT12H30M17.5S'), equalTo(1)));

  it('finds 12 hours', () => assertThat(
    findHours('P3Y6M1W4DT12H30M17.5S'), equalTo(12)));

  it('finds 12 minutes', () => assertThat(
    findMinutes('P3Y6M1W4DT12H30M17.5S'), equalTo(30)));

  it('finds 17.5 seconds', () => assertThat(
    findSeconds('P3Y6M1W4DT12H30M17.5S'), equalTo(17.5)));
});

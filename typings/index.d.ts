declare module 'pomeranian-durations' {
  //add.js
  export function add(firstIsoString: string, secondIsoString: string): string
  export function sum(durations: string[]): string
  export function addMicroseconds(amount: number, isoSring: string): string
  export function addMilliseconds(amount: number, isoSring: string): string
  export function addSeconds(amount: number, isoSring: string): string
  export function addMinutes(amount: number, isoSring: string): string
  export function addHours(amount: number, isoSring: string): string
  export function addDays(amount: number, isoSring: string): string
  export function addWeeks(amount: number, isoSring: string): string
  export function addMonths(amount: number, isoSring: string): string
  export function addYears(amount: number, isoSring: string): string

  //ceil.js
  export function ceil(granularity: string, isoString: string): string
  export function ceilSeconds(isoDuration: string): string
  export function ceilMinutes(isoDuration: string): string
  export function ceilHours(isoDuration: string): string
  export function ceilDay(isoDuration: string): string
  export function ceilWeeks(isoDuration: string): string
  export function ceilMonths(isoDuration: string): string
  export function ceilYears(isoDuration: string): string

  //compare.js
  export function gte(firstIsoDuration: string, secondIsoDuration: string): boolean
  export function gt(firstIsoDuration: string, secondIsoDuration: string): boolean
  export function lt(firstIsoDuration: string, secondIsoDuration: string): boolean
  export function lte(firstIsoDuration: string, secondIsoDuration: string): boolean
  export function eq(firstIsoDuration: string, secondIsoDuration: string): boolean

  //constatnts.js
  export const ONE_MICROSECOND: number;
  export const ONE_MILLISECOND: number;
  export const ONE_SECOND: number;
  export const ONE_MINUTE: number;
  export const ONE_HOUR: number;
  export const ONE_DAY: number;

  export const TIME_DESIGNATOR = 'T';
  export const DURATION_DESIGNATOR = 'P';
  export const INVALID_DURATION = 'Invalid Duration';

  export const UNIT_NAMES: {
    microseconds: 'microseconds',
    milliseconds: 'milliseconds',
    seconds: 'seconds',
    minutes: 'minutes',
    hours: 'hours',
    days: 'days',
    weeks: 'weeks',
    months: 'months',
    years: 'years',
  };

  export const UNIT_ORDER: string[];

  export const TIME_UNITS: {
    [UNIT_NAMES.seconds]: 'S',
    [UNIT_NAMES.minutes]: 'M',
    [UNIT_NAMES.hours]: 'H',
  };

  export const DATE_UNITS: {
    [UNIT_NAMES.days]: 'D',
    [UNIT_NAMES.weeks]: 'W',
    [UNIT_NAMES.months]: 'M',
    [UNIT_NAMES.years]: 'Y',
  };

  export const UNITS: {
    [UNIT_NAMES.seconds]: 'S',
    [UNIT_NAMES.minutes]: 'M',
    [UNIT_NAMES.hours]: 'H',
    [UNIT_NAMES.days]: 'D',
    [UNIT_NAMES.weeks]: 'W',
    [UNIT_NAMES.months]: 'M',
    [UNIT_NAMES.years]: 'Y',
  };

  type Units = {
    [UNIT_NAMES.seconds]?: 'S',
    [UNIT_NAMES.minutes]?: 'M',
    [UNIT_NAMES.hours]?: 'H',
    [UNIT_NAMES.days]?: 'D',
    [UNIT_NAMES.weeks]?: 'W',
    [UNIT_NAMES.months]?: 'M',
    [UNIT_NAMES.years]?: 'Y',
  }

  //conversions.js
  export function asMicroseconds(isoSring: string): number
  export function asMilliseconds(isoSring: string): number
  export function asSeconds(isoSring: string): number
  export function asMinutes(isoSring: string): number
  export function asHours(isoSring: string): number
  export function asDecimalMicroseconds(isoSring: string): number
  export function asDecimalMilliseconds(isoSring: string): number
  export function asDecimalSeconds(isoSring: string): number
  export function asDecimalMinutes(isoSring: string): number
  export function asDecimalHours(isoSring: string): number
  
  //find.js
  export function findSeconds(isoString: string): number | undefined
  export function findMinutes(isoString: string): number | undefined
  export function findHours(isoString: string): number | undefined
  export function findDays(isoString: string): number | undefined
  export function findWeeks(isoString: string): number | undefined
  export function findMonths(isoString: string): number | undefined
  export function findYears(isoString: string): number | undefined

  //floor.js
  export function floor(granularity: string, isoString: string): string
  export function floorSeconds(isoDuration: string): string
  export function floorMinutes(isoDuration: string): string
  export function floorHours(isoDuration: string): string
  export function floorDays(isoDuration: string): string
  export function floorWeeks(isoDuration: string): string
  export function floorMonths(isoDuration: string): string
  export function floorYears(isoDuration: string): string

  //format.js
  export function format(template: string, isoSring: string): string

  //from-sql.js
  export function fromPostgres(isoSring: string): string
  export function fromPostgresVerbose(isoSring: string): string

  //from.js
  export function fromMicroseconds(amount: number): string
  export function fromMilliseconds(amount: number): string
  export function fromSeconds(amount: number): string
  export function fromMinutes(amount: number): string
  export function fromHours(amount: number): string
  export function fromDays(amount: number): string
  export function fromWeeks(amount: number): string
  export function fromMonths(amount: number): string
  export function fromYears(amount: number): string

  //in.js
  export function inSeconds(isoDuration: string): string
  export function inMinutes(isoDuration: string): string
  export function inHours(isoDuration: string): string

  //math.js
  export function absolute(isoDuration: string): string

  //normolize.js
  export function normalizeTime(isoDuration: string): string

  //remove.js
  export function removeSeconds(isoSring: string): string
  export function removeMinutes(isoSring: string): string
  export function removeHours(isoSring: string): string
  export function removeDays(isoSring: string): string
  export function removeWeeks(isoSring: string): string
  export function removeMonths(isoSring: string): string
  export function removeYears(isoSring: string): string
  export function removeTimeUnits(isoSring: string): string
  export function removeDateUnits(isoSring: string): string

  //sort.js
  export function sortAsc(firstIsoSring: string, secondIsoString: string): number
  export function sortAscBy(key: string, firstIsoSring: string, secondIsoString: string): number
  export function sortDesc(firstIsoSring: string, secondIsoString: string): number
  export function sortDescBy(key: string, firstIsoSring: string, secondIsoString: string): number

  //substruct.js
  export function subtract(firstIsoString: string, secondIsoString: string): string
  export function subtractMilliseconds(amount: number, isoSring: string): string
  export function subtractMicroseconds(amount: number, isoSring: string): string
  export function subtractSeconds(amount: number, isoSring: string): string
  export function subtractMinutes(amount: number, isoSring: string): string
  export function subtractHours(amount: number, isoSring: string): string
  export function subtractDays(amount: number, isoSring: string): string
  export function subtractWeeks(amount: number, isoSring: string): string
  export function subtractMonths(amount: number, isoSring: string): string
  export function subtractYears(amount: number, isoSring: string): string

  //to-sql.js
  export function toPostgresVerbose(isoSring: string): string
  export function toPostgres(isoSring: string): string
  export function toSql(isoSring: string): string

  //transformations.js
  export function toIso(fragments: Units): string
  export function toFragments(isoSring): Units

  //validate.js
  export function isValid(isoSring: string): boolean
  export function isInvalid(isoSring: string): boolean
  export function whenInvalid(value: string | Function, isoDuration: string): string
  export function whenInvalidDuration(value: string | Function, isoDuration: string): string
}

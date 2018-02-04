# Pomeranian Durations
An immutable duration library based on the ISO-8601 format for durations.

## Upgrade to version 1.0.0
- Swapped arguments of add* and subtract* functions, as they're now curried.
```
// V0.*
addMinute('PT10S', 1)

// V1.*
addMinute(1, 'PT10S')
```


## Usage

```js
npm install pomeranian-durations
```

### Public API

#### Finders

All finders accept an ISO-8601 duration string and respond a number. eg.: `findSeconds('PT1S') // => 1``

```js
export {
  findSeconds,
  findMinutes,
  findHours,
  findDays,
  findWeeks,
  findMonths,
  findYears,
};
```


#### Calculations

All calculations accept an ISO-8601 duration string and respond an ISO-8601 duration string. eg.: `addSeconds('PT0S', 1) // => 'PT1S'`

```js
export {
  addMicroseconds,
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addWeeks,
  addMonths,
  addYears,

  subtractMilliseconds,
  subtractMicroseconds,
  subtractSeconds,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractWeeks,
  subtractMonths,
  subtractYears,
};
```


#### Conversions

All conversions accept an ISO-8601 duration string and respond a number. eg.: `asSeconds('PT1M1S', 1) // => 61`

```js
export {
  asMicroseconds,
  asMilliseconds,
  asSeconds,
  asMinutes,
  asHours,
  // NOTE: other conversions are not possible see: Precision Issues


  asDecimalMilliseconds,
  asDecimalSeconds,
  asDecimalMinutes,
  asDecimalHours,
};
```


#### Transformations

Transformations are used to convert an ISO string to an object and the other way round.

```js
import { toFragments } from 'pomeranian-durations';

toFragments('PT1S') // { ..., hours: 0, seconds: 1, ... }
```

```js
import { toIso } from 'pomeranian-durations';

toIso({ seconds: 1 }) // 'PT1S'

toIso({ seconds: 0 }) // 'P'
toIso({ seconds: 0 }, { includeZeroValues: false } ) // 'P'
toIso({ seconds: 0 }, { includeZeroValues: true } ) // 'PT0S'
```


#### Wrapper

The wrapper object is an immutable convenience object which makes multiple calculations on the same object easier.
 
```js
import { addSeconds } from 'pomeranian-duration'

const duration = addSeconds('PT0S', 1); // => 'PT1S';
```

```js
import { fromIso } from 'pomeranian-duration'

const duration = fromIso('PT0S').addSeconds(1).toIso(); // => 'PT1S';
```

Pomeranian is completely immutable.

## Precision Issues
Because date components (years, months, weeks, days) can't be converted to other unites without date and timezone information, `pomeranian-durations`
doesn't support them yet. To do precise arithmetic operations it is recommended to avoid years, months, weeks and days completely when using durations.

For more information have a look at http://www.ostyn.com/standards/scorm/samples/ISOTimeForSCORM.htm

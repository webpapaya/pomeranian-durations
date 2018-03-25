 
# Pomeranian Durations 🐶

An immutable duration library based on the ISO-8601 format for durations.

# Helpers

- [add](#category-add)
- [ceil](#category-ceil)
- [find](#category-find)
- [floor](#category-floor)
- [from](#category-from)
- [in](#category-in)
- [subtract](#category-subtract)
- [validate](#category-validate)
- [conversions](#category-conversions)
- [transformations](#category-transformations)


<a name="category-add"></a>
## add

Helpers to add to a duration.

[add](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L18) | [addMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L37) | [addMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L46) | [addSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L55) | [addMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L64) | [addHours](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L73) | [addDays](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L82) | [addWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L91) | [addMonths](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L100) | [addYears](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L109)

```javascript
addMicroseconds('PT3S', 'PT1S') // => PT4S
addMicroseconds(1, 'PT1S') // => PT1.000001S
addMilliseconds(1, 'PT1S') // => PT1.001S
addSeconds(1, 'PT1S') // => PT2S
addMinutes(1, 'PT1M') // => PT2M
addHours(1, 'PT1M') // => PT2M
addDays(1, 'P1D') // => P2D
addWeeks(1, 'P1W') // => P2W
addMonths(1, 'P1M') // => P2M
addYears(1, 'P1Y') // => P2Y
```


<a name="category-ceil"></a>
## ceil

Helpers to ceil an ISO8601 duration to a particular granularity.

[ceil](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L30) | [ceilSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L39) | [ceilMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L47) | [ceilHours](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L55) | [ceilDays](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L63) | [ceilWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L71) | [ceilMonths](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L79) | [ceilYears](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L87)

```javascript
ceil('PT2s', 'PT5S') // => PT6S
ceil('PT3s', 'PT5S') // => PT6S
ceil('PT4s', 'PT5S') // => PT8S
ceilSeconds('PT1.1S') // => PT2S
ceilMinutes('PT1.1M') // => PT2M
ceilHours('PT1.1H') // => PT2H
ceilDays('P1.1D') // => P2D
ceilWeeks('P1.1W') // => P2W
ceilMonths('P1.1M') // => P2M
ceilYears('P1.1Y') // => P2Y
```


<a name="category-find"></a>
## find

Helpers for finding particular units in a given ISO8601 duration

[findSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L52) | [findMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L62) | [findHours](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L72) | [findDays](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L82) | [findWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L92) | [findMonths](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L102) | [findYears](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L112)

```javascript
findSeconds('PT1S') // => 1S
findSeconds('PT1M') // => undefined
findMinutes('PT1S') // => 1S
findMinutes('P1Y') // => undefined
findHours('PT1H') // => 1
findHours('PT1M') // => undefined
findDays('P1D') // => 1
findDays('PT1M') // => undefined
findWeeks('P1W') // => 1
findWeeks('PT1M') // => undefined
findMonths('P1M') // => 1
findMonths('PT1s') // => undefined
findYears('P1Y') // => 1
findYears('PT1M') // => undefined
```


<a name="category-floor"></a>
## floor

Helpers to floor an ISO8601 duration to a particular granularity.

[floor](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L43) | [floorSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L64) | [floorMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L72) | [floorHours](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L80) | [floorDays](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L88) | [floorWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L96) | [floorMonths](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L104) | [floorYears](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L112)

```javascript
floor('PT2s', 'PT5S') // => PT4S
floor('PT3s', 'PT5S') // => PT3S
floor('PT4s', 'PT5S') // => PT4S
floorSeconds('P1.1Y') // => P1S
floorMinutes('P1.1Y') // => P1M
floorHours('P1.1Y') // => P1H
floorDays('P1.1Y') // => P1D
floorWeeks('P1.1Y') // => P1W
floorMonths('P1.1Y') // => P1M
floorYears('P1.1Y') // => P1Y
```


<a name="category-from"></a>
## from

Helpers to convert an integer to an ISO8601 duration.

[fromMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L16) | [fromMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L25) | [fromSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L34) | [fromMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L43) | [fromHours](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L52) | [fromDays](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L61) | [fromWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L70) | [fromMonths](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L79) | [fromYears](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L88)

```javascript
fromMicroseconds(1) // => 'PT0.000001S'
fromMilliseconds(1) // => 'PT0.001S'
fromSeconds(1) // => 'PT1S'
fromMinutes(1) // => 'PT1M'
fromHours(1) // => 'PT1H'
fromDays(1) // => 'P1D'
fromWeeks(1) // => 'PT1W'
fromMonths(1) // => 'P1M'
fromYears(1) // => 'P1Y'
```


<a name="category-in"></a>
## in

Helpers to convert an ISO8601 duration to a different unit.
Date components (years, months, weeks, days) can't be
converted to other unites without date and timezone information.
Because of that converting date components into other units isn't
supported right now. To do precise arithmetic operations it is
recommended to avoid years, months, weeks and days completely
when using durations. For more information have a look at
http://www.ostyn.com/standards/scorm/samples/ISOTimeForSCORM.htm

[inSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L29) | [inMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L37) | [inHours](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L45)

```javascript
inSeconds('PT1M') // => 'PT60S'
inMinuts('PT1H') // => 'PT60M'
inHours('PT60M') // => 'PT1H'
```


<a name="category-subtract"></a>
## subtract

Helpers to subtract from a duration.

[subtract](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L29) | [subtractMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L45) | [subtractMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L54) | [subtractSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L63) | [subtractMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L72) | [subtractHours](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L81) | [subtractDays](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L90) | [subtractWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L99) | [subtractMonths](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L108) | [subtractYears](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L117)

```javascript
subtractMilliseconds(1, 'PT2M') // => PT1M
subtractMilliseconds(1, 'PT2M') // => PT1M
subtractMicroseconds(1, 'PT2M') // => PT1M
subtractSeconds(1, 'PT2S') // => PT1S
subtractMinutes(1, 'PT2M') // => PT1M
subtractHours(1, 'PT2H') // => PT1H
subtractDays(1, 'P2D') // => P1D
subtractWeeks(1, 'P2W') // => P1W
subtractMonths(1, 'P2M') // => P1M
subtractYears(1, 'P2Y') // => P1Y
```


<a name="category-validate"></a>
## validate

Helpers for validating ISO8601 durations.

[isValid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L36) | [isInvalid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L44) | [whenInvalid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L59) | [whenInvalidDuration](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L82)

```javascript
const add10 = compose(
  add(10),
  whenInvalid(() => { throw new Error('Invalid duration') }),
);

add10('invalid') // => error: 'Invalid duration'
const convertToHours = compose(
  asHours,
  whenInvalidDuration(null),
);

convertToHours('PT10H') // => 10
convertToHours('Blub') // => null
```


<a name="category-conversions"></a>
## conversions

[asMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L41) | [asMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L58) | [asSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L66) | [asMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L74) | [asHours](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L82) | [asDecimalMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L90) | [asDecimalMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L98) | [asDecimalSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L106) | [asDecimalMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L114) | [asDecimalHours](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L122)

```javascript

```


<a name="category-transformations"></a>
## transformations

[toIso](https://github.com/webPapaya/pomeranian/blob/master/src/transformations.js#L55) | [toFragments](https://github.com/webPapaya/pomeranian/blob/master/src/transformations.js#L68)

```javascript
toIso({ seconds: 1, hours: 2 }) // => 'PT1H1S'
toFragments('PT1H1S') // => { seconds: 1, hours: 2 }
```


# Handling parsing errors

By default this library returns 'Invalid Duration' when it can't parse the format.
As every application wants to handle those kinds of errors differently developers
can use functional composition to create their own verison of pomeranian durations.

```js
const errorHandler = () => 'An error occured, our team is already on it.'
const addSchoolHour = pipe(
  addHours(1.5),
  whenInvalid(errorHandler)
);

addSchoolHour('PT1H') // => PT2.5H
addSchoolHour('Invalid duration') // => 'An error occured, our team is already on it.'
```

# Upgrade to version 1.0.0

- Swapped arguments of add* and subtract* functions, as they're now curried.
```js
// version 0.*
addSeconds('PT1S', 1) // => PT2S

// version 1.*
addSeconds(1, 'PT1S') // => PT2S
addSeconds(1)('PT1S') // => PT2S
```
- Wrapper got removed (please use regular functional composition instead)
- Pomeranian durations return 'Invalid Duration' when it receives an invalid duration. It's up to the developer how this should be handled. This library provides a helper `whenInvalid` which can be used to handle those cases.

```js
import { addSeconds as _addSeconds, whenInvalid } from 'pomeranian-durations';

const addSeconds1 = pipe(
  whenInvalid(() => 'PT0S'),
  _addSeconds(10),
); // => PT10S

const addSeconds2 = pipe(
  _addSeconds(10),
  whenInvalid(() => 'PT0S'),
); // => PT0S
```

# Precision Issues

Because date components (years, months, weeks, days) can't be converted to other unites without date and timezone information, `pomeranian-durations`
doesn't support them yet. To do precise arithmetic operations it is recommended to avoid years, months, weeks and days completely when using durations.

For more information have a look at http://www.ostyn.com/standards/scorm/samples/ISOTimeForSCORM.htm


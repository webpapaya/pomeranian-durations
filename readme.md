
# Pomeranian Durations 🐶

An immutable duration library based on the ISO-8601 format for durations.

# Helpers

- [finders](#category-finders)
- [add](#category-add)
- [ceil](#category-ceil)
- [conversions](#category-conversions)
- [floor](#category-floor)
- [from](#category-from)
- [in](#category-in)
- [subtract](#category-subtract)
- [transformations](#category-transformations)
- [validate](#category-validate)


<a name="category-finders"></a>
## finders

Finds {{unit}} in a given ISO8601 duration

[findSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/finders.js#L52) | [findMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/finders.js#L62) | [findHours](https://github.com/webPapaya/pomeranian/blob/master/src/finders.js#L72) | [findDays](https://github.com/webPapaya/pomeranian/blob/master/src/finders.js#L82) | [findWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/finders.js#L92) | [findMonths](https://github.com/webPapaya/pomeranian/blob/master/src/finders.js#L102) | [findYears](https://github.com/webPapaya/pomeranian/blob/master/src/finders.js#L112)

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


<a name="category-add"></a>
## add

[add](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L13) | [addMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L32) | [addMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L41) | [addSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L50) | [addMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L59) | [addHours](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L68) | [addDays](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L77) | [addWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L86) | [addMonths](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L95) | [addYears](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L104)

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

[ceil](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L25) | [ceilSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L34) | [ceilMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L42) | [ceilHours](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L50) | [ceilDays](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L58) | [ceilWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L66) | [ceilMonths](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L74) | [ceilYears](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L82)

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


<a name="category-conversions"></a>
## conversions

[asMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L41) | [asMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L58) | [asSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L66) | [asMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L74) | [asHours](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L82) | [asDecimalMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L90) | [asDecimalMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L98) | [asDecimalSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L106) | [asDecimalMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L114) | [asDecimalHours](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L122)

```javascript

```


<a name="category-floor"></a>
## floor

[floor](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L38) | [floorSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L59) | [floorMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L67) | [floorHours](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L75) | [floorDays](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L83) | [floorWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L91) | [floorMonths](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L99) | [floorYears](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L107)

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

[fromMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L11) | [fromMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L20) | [fromSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L29) | [fromMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L38) | [fromHours](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L47) | [fromDays](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L56) | [fromWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L65) | [fromMonths](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L74) | [fromYears](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L83)

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

[inSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L17) | [inMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L25) | [inHours](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L33)

```javascript
inSeconds('PT1M') // => 'PT60S'
inSeconds('PT1H') // => 'PT60M'
inSeconds('PT60M') // => 'PT1H'
```


<a name="category-subtract"></a>
## subtract

[subtract](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L24) | [subtractMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L40) | [subtractMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L49) | [subtractSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L58) | [subtractMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L67) | [subtractHours](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L76) | [subtractDays](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L85) | [subtractWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L94) | [subtractMonths](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L103) | [subtractYears](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L112)

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


<a name="category-transformations"></a>
## transformations

[toIso](https://github.com/webPapaya/pomeranian/blob/master/src/transformations.js#L55) | [toFragments](https://github.com/webPapaya/pomeranian/blob/master/src/transformations.js#L68)

```javascript
toIso({ seconds: 1, hours: 2 }) // => 'PT1H1S'
toFragments('PT1H1S') // => { seconds: 1, hours: 2 }
```


<a name="category-validate"></a>
## validate

[isValid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L32) | [isInvalid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L40) | [whenInvalid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L55) | [whenInvalidDuration](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L78)

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


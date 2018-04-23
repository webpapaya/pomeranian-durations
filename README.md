 
# Pomeranian Durations 🐶

An immutable duration library based on the ISO-8601 format for durations.

```
npm install pomeranian-durations --save
yarn add pomeranian-durations
```

# Helpers

- [add](#category-add)
- [ceil](#category-ceil)
- [compare](#category-compare)
- [conversions](#category-conversions)
- [find](#category-find)
- [floor](#category-floor)
- [from](#category-from)
- [in](#category-in)
- [sort](#category-sort)
- [subtract](#category-subtract)
- [validate](#category-validate)
- [transformations](#category-transformations)


<a name="category-add"></a>
## add

[add](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L18) | [addMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L37) | [addMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L46) | [addSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L55) | [addMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L64) | [addHours](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L73) | [addDays](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L82) | [addWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L91) | [addMonths](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L100) | [addYears](https://github.com/webPapaya/pomeranian/blob/master/src/add.js#L109)

Helpers to add to a duration.

```javascript
add('PT3S', 'PT1S') // => 'PT4S'
addMicroseconds(1, 'PT1S') // => 'PT1.000001S'
addMilliseconds(1, 'PT1S') // => 'PT1.001S'
addSeconds(1, 'PT1S') // => 'PT2S'
addMinutes(1, 'PT1M') // => 'PT2M'
addHours(1, 'PT1M') // => 'PT1H1M'
addDays(1, 'P1D') // => 'P2D'
addWeeks(1, 'P1W') // => 'P2W'
addMonths(1, 'P1M') // => 'P2M'
addYears(1, 'P1Y') // => 'P2Y'
```


<a name="category-ceil"></a>
## ceil

[ceil](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L32) | [ceilSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L41) | [ceilMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L49) | [ceilHours](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L57) | [ceilDays](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L65) | [ceilWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L73) | [ceilMonths](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L81) | [ceilYears](https://github.com/webPapaya/pomeranian/blob/master/src/ceil.js#L89)

Helpers to ceil an ISO8601 duration to a particular granularity.

```javascript
ceil('PT2s', 'PT5S') // => 'PT6S'
ceil('PT3s', 'PT5S') // => 'PT6S'
ceil('PT4s', 'PT5S') // => 'PT8S'
ceilSeconds('PT1.1S') // => 'PT2S'
ceilMinutes('PT1.1M') // => 'PT2M'
ceilHours('PT1.1H') // => 'PT2H'
ceilDays('P1.1D') // => 'P2D'
ceilWeeks('P1.1W') // => 'P2W'
ceilMonths('P1.1M') // => 'P2M'
ceilYears('P1.1Y') // => 'P2Y'
```


<a name="category-compare"></a>
## compare

[gte](https://github.com/webPapaya/pomeranian/blob/master/src/compare.js#L66) | [gt](https://github.com/webPapaya/pomeranian/blob/master/src/compare.js#L80) | [lt](https://github.com/webPapaya/pomeranian/blob/master/src/compare.js#L94) | [lte](https://github.com/webPapaya/pomeranian/blob/master/src/compare.js#L108) | [eq](https://github.com/webPapaya/pomeranian/blob/master/src/compare.js#L117)

Helpers to compare 2 iso durations with each other. Only time parts can be compared
as otherwise the comparison might be wrong. When any of the functions is partially
applied the arguments are automatically swapped so one can write the following:
````javascript
const isStillBigger = pipe(
  add('PT10S'),
  gte('PT1M'),
)
isStillBigger('PT50S') // => true
isStillBigger('PT49S') // => false
````

```javascript
gte('PT2S', 'PT2S') // => true
gte('PT3S', 'PT2S') // => true
gte('PT3S')('PT2S') // => false
gt('PT2S', 'PT2S') // => false
gt('PT3S', 'PT2S') // => true
gt('PT3S')('PT2S') // => false
lt('PT2S', 'PT2S') // => false
lt('PT3S', 'PT2S') // => false
lt('PT3S')('PT2S') // => true
lte('PT2S', 'PT2S') // => true
lte('PT3S', 'PT2S') // => false
lte('PT3S')('PT2S') // => true
eq('PT2S', 'PT2S') // => true
```


<a name="category-conversions"></a>
## conversions

[asMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L48) | [asMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L67) | [asSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L77) | [asMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L87) | [asHours](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L97) | [asDecimalMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L107) | [asDecimalMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L117) | [asDecimalSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L127) | [asDecimalMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L137) | [asDecimalHours](https://github.com/webPapaya/pomeranian/blob/master/src/conversions.js#L147)

Helpers to convert between different units.

```javascript
asMicroseconds('PT2s') // => 2000000
asMilliseconds('PT2s') // => 2000
asSeconds('PT2s') // => 2
asMinutes('PT1h1m') // => 61
asHours('PT60m') // => 1
asDecimalMicroseconds('PT1m1s') // => 0.000061
asDecimalMilliseconds('PT1m1.1s') // => 0.0611
asDecimalSeconds('PT1m1s') // => 61
asDecimalMinutes('PT1m1s') // => 1.0166666666666666
asDecimalHours('PT1m1s') // => 0.016944444444444443
```


<a name="category-find"></a>
## find

[findSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L54) | [findMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L65) | [findHours](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L76) | [findDays](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L87) | [findWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L98) | [findMonths](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L109) | [findYears](https://github.com/webPapaya/pomeranian/blob/master/src/find.js#L120)

Helpers for finding particular units in a given ISO8601 duration

```javascript
findSeconds('PT1S') // => 1
findSeconds('PT1M') // => undefined
findMinutes('PT1M') // => 1
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

[floor](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L45) | [floorSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L66) | [floorMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L74) | [floorHours](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L82) | [floorDays](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L90) | [floorWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L98) | [floorMonths](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L106) | [floorYears](https://github.com/webPapaya/pomeranian/blob/master/src/floor.js#L114)

Helpers to floor an ISO8601 duration to a particular granularity.

```javascript
floor('PT2s', 'PT5S') // => 'PT4S'
floor('PT3s', 'PT5S') // => 'PT3S'
floor('PT4s', 'PT5S') // => 'PT4S'
floorSeconds('PT1.1S') // => 'PT1S'
floorMinutes('PT1.1M') // => 'PT1M'
floorHours('PT1.1H') // => 'PT1H'
floorDays('P1.1D') // => 'P1D'
floorWeeks('P1.1W') // => 'P1W'
floorMonths('P1.1M') // => 'P1M'
floorYears('P1.1Y') // => 'P1Y'
```


<a name="category-from"></a>
## from

[fromMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L16) | [fromMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L25) | [fromSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L34) | [fromMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L43) | [fromHours](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L52) | [fromDays](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L61) | [fromWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L70) | [fromMonths](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L79) | [fromYears](https://github.com/webPapaya/pomeranian/blob/master/src/from.js#L88)

Helpers to convert an integer to an ISO8601 duration.

```javascript
fromMicroseconds(1) // => 'PT0.000001S'
fromMilliseconds(1) // => 'PT0.001S'
fromSeconds(1) // => 'PT1S'
fromMinutes(1) // => 'PT1M'
fromHours(1) // => 'PT1H'
fromDays(1) // => 'P1D'
fromWeeks(1) // => 'P1W'
fromMonths(1) // => 'P1M'
fromYears(1) // => 'P1Y'
```


<a name="category-in"></a>
## in

[inSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L29) | [inMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L37) | [inHours](https://github.com/webPapaya/pomeranian/blob/master/src/in.js#L45)

Helpers to convert an ISO8601 duration to a different unit.
Date components (years, months, weeks, days) can't be
converted to other unites without date and timezone information.
Because of that converting date components into other units isn't
supported right now. To do precise arithmetic operations it is
recommended to avoid years, months, weeks and days completely
when using durations. For more information have a look at
http://www.ostyn.com/standards/scorm/samples/ISOTimeForSCORM.htm

```javascript
inSeconds('PT1M') // => 'PT60S'
inMinutes('PT1H') // => 'PT60M'
inHours('PT60M') // => 'PT1H'
```


<a name="category-sort"></a>
## sort

[sortAsc](https://github.com/webPapaya/pomeranian/blob/master/src/sort.js#L36) | [sortAscBy](https://github.com/webPapaya/pomeranian/blob/master/src/sort.js#L48) | [sortDesc](https://github.com/webPapaya/pomeranian/blob/master/src/sort.js#L59) | [sortDescBy](https://github.com/webPapaya/pomeranian/blob/master/src/sort.js#L70)

Helpers to sort durations. Attention durations with multiple date parts can only
be compared using an approximation, so the result might be incorrect! (eg. on some
days the following is true: 'PT23H1M' > 'PT1D'). If you're using the same units in
all given durations that is not an issue.

```javascript
['PT2S', 'PT1S'].sort(sortAsc) // ['PT1S', 'PT2S']
[{ randomKey: 'PT2S' }, { randomKey: 'PT1S' }].sort(sortAscBy('randomKey'))
  // => [{ randomKey: 'PT1S' }, { randomKey: 'PT2S' }]
['PT1S', 'PT2S'].sort(sortDesc) // ['PT2S', 'PT1S']
[{ randomKey: 'PT2S' }, { randomKey: 'PT1S' }].sort(sortDescBy('randomKey'))
  // => [{ randomKey: 'PT2S' }, { randomKey: 'PT1S' }]
```


<a name="category-subtract"></a>
## subtract

[subtract](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L29) | [subtractMilliseconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L45) | [subtractMicroseconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L54) | [subtractSeconds](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L63) | [subtractMinutes](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L72) | [subtractHours](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L81) | [subtractDays](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L90) | [subtractWeeks](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L99) | [subtractMonths](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L108) | [subtractYears](https://github.com/webPapaya/pomeranian/blob/master/src/subtract.js#L117)

Helpers to subtract from a duration.

```javascript
subtract('PT2M', 'PT1M') // => 'PT1M'
subtractMilliseconds(1, 'PT2M') // => 'PT2M-0.001S'
subtractMicroseconds(1, 'PT2M') // => 'PT2M-0.000001S'
subtractSeconds(1, 'PT2S') // => 'PT1S'
subtractMinutes(1, 'PT2M') // => 'PT1M'
subtractHours(1, 'PT2H') // => 'PT1H'
subtractDays(1, 'P2D') // => 'P1D'
subtractWeeks(1, 'P2W') // => 'P1W'
subtractMonths(1, 'P2M') // => 'P1M'
subtractYears(1, 'P2Y') // => 'P1Y'
```


<a name="category-validate"></a>
## validate

[isValid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L40) | [isInvalid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L52) | [whenInvalid](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L67) | [whenInvalidDuration](https://github.com/webPapaya/pomeranian/blob/master/src/validate.js#L90)

Helpers for validating ISO8601 durations.

```javascript
isValid('PT1S') // => true
isValid('invalid') // => false
isInvalid('invalid') // => true
isInvalid('PT1S') // => false
const add10 = compose(
  add(10),
  whenInvalid(() => { throw new Error('Invalid duration') }),
);

add10('invalid') // error: 'Invalid duration'
const convertToHours = compose(
  asHours,
  whenInvalidDuration(null),
);

convertToHours('PT10H') // 10
convertToHours('Blub') // null
```


<a name="category-transformations"></a>
## transformations

[toIso](https://github.com/webPapaya/pomeranian/blob/master/src/transformations.js#L55) | [toFragments](https://github.com/webPapaya/pomeranian/blob/master/src/transformations.js#L68)

```javascript
toIso({ seconds: 1, hours: 2 }) // => 'PT2H1S'
toFragments('PT1H1S') // => ({ seconds: 1, minutes: 0, hours: 1, days: 0, weeks: 0, months: 0, years: 0 })
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

# Contributing

All contributions are very welcome. If you need help with the setup or if this library is missing 
some features just create an issue or ping me on Twitter (@webpapaya). I'm happy to help you out.


# Pomeranian Durations [![Build Status](https://travis-ci.org/webpapaya/pomeranian-durations.svg?branch=master)](https://travis-ci.org/webpapaya/pomeranian-durations)

An immutable duration library based on the ISO-8601 format for durations.

# Basic Usage

Pomeranian durations provides a couple of helpers to work with ISO8601 durations.


```
  addMinutes('PT3M', 2) // => 'PT5M'
  floorMinutes('PT3.5M') // => 'PT3M'
  findMinutes('PT3M') // => 3

  isValid('P3Y6M1W4DT12H30M17.5S') // => true
  isValid('P3') // => false
```

A full list of all helpers can be found at the [docs](https://github.com/webpapaya/pomeranian-durations/blob/master/doc.md)

## Handling parsing errors

By default this library returns 'Invalid Duration' when it can't parse the format.
As every application wants to handle those kinds of errors differently developers
can use functional composition to create their own verison of pomeranian durations.

```
const errorHandler = () => 'An error occured, our team is already on it.'
const addSchoolHour = pipe(
  addHours(1.5),
  whenInvalid(errorHandler)
);

addSchoolHour('PT1H') // => PT2.5H
addSchoolHour('Invalid duration') // => 'An error occured, our team is already on it.'
```


## Upgrade to version 1.0.0
- Swapped arguments of add* and subtract* functions, as they're now curried.
```
// version 0.*
addSeconds('PT1S', 1) // => PT2S

// version 1.*
addSeconds(1, 'PT1S') // => PT2S
addSeconds(1)('PT1S') // => PT2S
```

## Precision Issues
Because date components (years, months, weeks, days) can't be converted to other unites without date and timezone information, `pomeranian-durations`
doesn't support them yet. To do precise arithmetic operations it is recommended to avoid years, months, weeks and days completely when using durations.

For more information have a look at http://www.ostyn.com/standards/scorm/samples/ISOTimeForSCORM.htm

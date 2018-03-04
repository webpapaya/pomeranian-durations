# Pomeranian Durations

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

/* eslint-disable max-len */
const jsdoc2md = require('jsdoc-to-markdown');
const parsedDocs = jsdoc2md.getTemplateDataSync({ files: 'src/*.js' });
const {
  generateCategoryNavigation,
  extractCategories,
  generateCategory,
} = require('./_generate_docs_helper');

// eslint-disable-next-line no-console
console.log(` 
# Pomeranian Durations 🐶

An immutable duration library based on the ISO-8601 format for durations.

\`\`\`
npm install pomeranian-durations --save
yarn add pomeranian-durations
\`\`\`

# Helpers

${generateCategoryNavigation(parsedDocs)}

${extractCategories(parsedDocs).map((category) => generateCategory(parsedDocs, category)).join('\n')}

# Handling parsing errors

By default this library returns 'Invalid Duration' when it can't parse the format.
As every application wants to handle those kinds of errors differently developers
can use functional composition to create their own verison of pomeranian durations.

\`\`\`js
const errorHandler = () => 'An error occured, our team is already on it.'
const addSchoolHour = pipe(
  addHours(1.5),
  whenInvalid(errorHandler)
);

addSchoolHour('PT1H') // => PT2.5H
addSchoolHour('Invalid duration') // => 'An error occured, our team is already on it.'
\`\`\`

# Upgrade to version 1.0.0

- Swapped arguments of add* and subtract* functions, as they're now curried.
\`\`\`js
// version 0.*
addSeconds('PT1S', 1) // => PT2S

// version 1.*
addSeconds(1, 'PT1S') // => PT2S
addSeconds(1)('PT1S') // => PT2S
\`\`\`
- Wrapper got removed (please use regular functional composition instead)
- Pomeranian durations return 'Invalid Duration' when it receives an invalid duration. It's up to the developer how this should be handled. This library provides a helper \`whenInvalid\` which can be used to handle those cases.

\`\`\`js
import { addSeconds as _addSeconds, whenInvalid } from 'pomeranian-durations';

const addSeconds1 = pipe(
  whenInvalid(() => 'PT0S'),
  _addSeconds(10),
); // => PT10S

const addSeconds2 = pipe(
  _addSeconds(10),
  whenInvalid(() => 'PT0S'),
); // => PT0S
\`\`\`

# Precision Issues

Because date components (years, months, weeks, days) can't be converted to other unites without date and timezone information, \`pomeranian-durations\`
doesn't support them yet. To do precise arithmetic operations it is recommended to avoid years, months, weeks and days completely when using durations.

For more information have a look at http://www.ostyn.com/standards/scorm/samples/ISOTimeForSCORM.htm

# Contributing

All contributions are very welcome. If you need help with the setup or if this library is missing 
some features just create an issue or ping me on Twitter (@webpapaya). I'm happy to help you out.
`);

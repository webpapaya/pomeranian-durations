const { homepage } = require('../package');

const extractCategory = (doc) => doc.meta.filename.replace('.js', '');
const extractCategories = (parsedDocs) => Object.keys(parsedDocs.reduce((acc, doc) => {
  acc[extractCategory(doc)] = 0; // eslint-disable-line no-param-reassign
  return acc;
}, {}));

const extractCategoryDescription = (parsedDocs, category) => {
  const categoryDefinition = parsedDocs
    .find((doc) => doc.id === 'default' && extractCategory(doc) === category);

  return categoryDefinition ? categoryDefinition.description : '';
};

const generateHeadings = (parsedDocs, category) => parsedDocs
  .filter((doc) => doc.id !== 'default' && extractCategory(doc) === category)
  .map((doc) => `[${doc.longname}](${homepage}/blob/master/src/${doc.meta.filename}#L${doc.meta.lineno})`)
  .join(' | ');

const generateCategoryNavigation = (parsedDocs) => extractCategories(parsedDocs)
  .map((category) => `- [${category}](#category-${category})`)
  .join('\n');

const extractCategoryExamples = (parsedDocs, category) => parsedDocs
  .filter((doc) => doc.id !== 'default' && extractCategory(doc) === category && doc.examples)
  .map((doc) => doc.examples.join('\n')).join('\n');

const generateCategoryHeading = (category) =>
  `<a name="category-${category}"></a>\n## ${category}`;

const generateCategory = (parsedDocs, category) => `
${generateCategoryHeading(category)}

${generateHeadings(parsedDocs, category)}

${extractCategoryDescription(parsedDocs, category)}

\`\`\`javascript
${extractCategoryExamples(parsedDocs, category)}
\`\`\`
`.replace('\n\n\n', '\n');

module.exports = {
  extractCategory,
  extractCategories,
  extractCategoryDescription,
  generateHeadings,
  generateCategoryNavigation,
  extractCategoryExamples,
  generateCategoryHeading,
  generateCategory,
};

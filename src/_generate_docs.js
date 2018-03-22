const jsdoc2md = require('jsdoc-to-markdown')

const parseCategories = (categories) => categories
  ? categories.split(',').map((category) => category.trim())
  : ['unknown'];

const parseDocs = () => {
  const jsonDoc = jsdoc2md.getTemplateDataSync({ files: 'src/*.js' });
  return jsonDoc.map((doc) => ({ ...doc, category: parseCategories(doc.category) }));
};

const getAllCategories = (docs) => Object.keys(docs.reduce((acc, doc) => {
  doc.category.forEach((category) => { acc[category] = 0; });
  return acc;
}, {})).sort((a, b) => a.localeCompare(b));

const NEW_LINE = '\n\n';
const categoryHeading = (category) =>
  `\n<a name="category-heading-${category}"></a> ${NEW_LINE} ### Category: ${category}`;

const fnNameList = (category, docs) => docs
  .filter((doc) => doc.category.includes(category))
  .map((doc) => `[${doc.longname}](#fn-heading-${doc.longname})`)
  .join(' | ');

const buildCategorySection = (category, docs) => [
  categoryHeading(category),
  fnNameList(category, docs),
].join(NEW_LINE);

const buildCategoryOverview = (docs) => getAllCategories(docs)
  .map((category) => `- [${category}](#category-heading-${category})`)
  .join('\n');

const buildFullDocs = (docs) => docs
  .map((doc) => [
    `<a name="fn-heading-${doc.longname}"></a>`,
    `### ${doc.longname}\n`,
    `${doc.description}\n`,
    (doc.examples || []).map((example) => `\`\`\`javascript\n ${example} \n\`\`\``).join('\n'),
  ].join('\n'))
  .join(NEW_LINE);

const parsedDocs = parseDocs();
const categoryList = buildCategoryOverview(parsedDocs);
const categoryOverview = getAllCategories(parsedDocs)
  .reduce((output, category) => output + buildCategorySection(category, parsedDocs), '');


console.log([
  '# Pomeranian Durations 🐶\n',
  categoryList,
  categoryOverview,
  buildFullDocs(parsedDocs),
].join(''));

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
  `\n<a name="${category}-category-heading"></a> ${NEW_LINE} ## Category: ${category}`;

const fnNameList = (category, docs) => docs
  .filter((doc) => doc.category.includes(category))
  .map((doc) => `- ${doc.longname}`)
  .join('\n');

const examples = (category, docs) => docs
  .filter((doc) => doc.examples && doc.category.includes(category))
  .map((doc) => doc.examples)
  .reduce((acc, examples) => [...acc, ...examples], [])
  .map((example) => `\`\`\`javascript\n ${example} \n\`\`\``)
  .join(NEW_LINE);

const buildCategorySection = (category, docs) => [
  categoryHeading(category),
  fnNameList(category, docs),
  examples(category, docs),
].join(NEW_LINE);

const buildCategoryOverview = (docs) => getAllCategories(docs)
  .map((category) => `- [${category}](#${category}-category-heading)`)
  .join('\n');

const parsedDocs = parseDocs();
const categoryList = buildCategoryOverview(parsedDocs);
const categoryOverview = getAllCategories(parsedDocs)
  .reduce((output, category) => output + buildCategorySection(category, parsedDocs), '');

console.log([
  categoryList,
  categoryOverview,
].join(''));

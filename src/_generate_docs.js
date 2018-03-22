const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs');


const parseCategories = (categories) => categories
  ? categories.split(',').map((category) => category.trim())
  : ['unknown'];

const generateDoc = async () => {
  const jsonDoc = await jsdoc2md.getTemplateData({ files: 'src/*.js' });
  const parsedDoc = jsonDoc.map((doc) => ({ ...doc, category: parseCategories(doc.category) }));
  fs.writeFileSync('./docs.json', JSON.stringify(parsedDoc));
};

generateDoc();

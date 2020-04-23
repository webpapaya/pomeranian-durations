import jsdoc2md from 'jsdoc-to-markdown';
import { assertThat, equalTo } from 'hamjest';
const parsedDocs = jsdoc2md.getTemplateDataSync({ files: 'src/*.js' });

const replace = (string, search, repl = '') =>
  string.replace(new RegExp(search, 'g'), repl);

describe('verify docs', () => {
  const docsWithExamples = parsedDocs.filter((doc) => doc.examples && doc.examples[0].includes('// =>'));
  docsWithExamples.forEach(({ name, examples }) => {
    examples.forEach((example) => {
      it(replace(example, '\n'), () => {
        const [fn, result] = example.split('// =>');
        const index = require('./index') // eslint-disable-line no-unused-vars
        assertThat(eval(replace(fn, name, `index.${name}`)), equalTo(eval(result))); // eslint-disable-line no-eval
      });
    });
  });
});

import jsdoc2md from 'jsdoc-to-markdown';
import { assertThat, equalTo } from 'hamjest';
import * as index from './index'; // eslint-disable-line no-unused-vars
const parsedDocs = jsdoc2md.getTemplateDataSync({ files: 'src/*.js' });

const replace = (string, search, repl = '') =>
  string.replace(new RegExp(search, 'g'), repl);

describe('verify docs', () => {
  const docsWithExamples = parsedDocs.filter((doc) => doc.examples && doc.examples[0].includes('// =>'));
  docsWithExamples.forEach(({ name, examples }) => {
    examples.forEach((example) => {
      it(replace(example, '\n'), () => {
        const [fn, result] = example.split('// =>');
        assertThat(eval(replace(fn, name, `index.${name}`)), equalTo(eval(result))); // eslint-disable-line no-eval
      });
    });
  });
});

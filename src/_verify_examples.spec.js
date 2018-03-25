import jsdoc2md from 'jsdoc-to-markdown';
import { assertThat, equalTo } from 'hamjest';
import * as index from './index'; // eslint-disable-line no-unused-vars
const parsedDocs = jsdoc2md.getTemplateDataSync({ files: 'src/*.js' });

describe('verify docs', () => {
  const docsWithExamples = parsedDocs.filter((doc) => doc.examples && doc.examples[0].includes('// =>'));
  docsWithExamples.forEach(({ examples }) => {
    examples.forEach((example) => {
      it(example, () => {
        const [fn, result] = example.split('// =>');
        assertThat(eval(`index.${fn}`), equalTo(eval(result))); // eslint-disable-line no-eval
      });
    });
  });
});

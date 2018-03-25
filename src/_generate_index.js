const fs = require('fs');
const DIRECTORY = './src';
const files = fs.readdirSync(DIRECTORY).filter((file) =>
  file[0] !== '_' && !file.includes('.spec.js') && file !== 'index.js');

const indexContent = files.map((file) => `export * from './${file}';`).join('\n');

// eslint-disable-next-line no-console
console.log(indexContent);

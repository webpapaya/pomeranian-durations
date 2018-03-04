const fs = require('fs');
const DIRECTORY = './src';
const INDEX_PATH = `${DIRECTORY}/index.js`;

fs.unlinkSync(INDEX_PATH);

const files = fs.readdirSync(DIRECTORY).filter((file) => file[0] !== '_' && !file.includes('.spec.js'));

const indexContent = files.map((file) => `export * from './${file}';`).join('\n');
fs.writeFileSync(INDEX_PATH, `${indexContent}\n`);

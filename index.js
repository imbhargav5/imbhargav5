
const fs = require('fs').promises
const Mustache = require('mustache');

const MUSTACHE_MAIN_DIR = './main.mustache';

const DATA = {};

async function generateReadMe() {
  const template = await fs.readFile(MUSTACHE_MAIN_DIR);
  const output = Mustache.render(template.toString(), DATA);
  await fs.writeFile('README.md', output);
}

generateReadMe();
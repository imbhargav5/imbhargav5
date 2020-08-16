
const fs = require('fs').promises
const Mustache = require('mustache');

const MUSTACHE_MAIN_DIR = './main.mustache';

async function generateReadMe({githubContributions, githubSummary}) {  
  const template = await fs.readFile(MUSTACHE_MAIN_DIR);
  const [topContributions, notableContributions] = githubContributions;
  const DATA = {
      topContributions,
      notableContributions,
      githubSummary
  }
  const output = Mustache.render(template.toString(), DATA);
  await fs.writeFile('README.md', output);
}

module.exports = generateReadMe
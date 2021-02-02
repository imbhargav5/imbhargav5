
const fs = require('fs').promises
const Mustache = require('mustache');

const MUSTACHE_MAIN_DIR = './main.mustache';

async function generateReadMe({githubContributions, githubSummary, mostRecentBlogPosts, hashnodeProfile}) {  
  const template = await fs.readFile(MUSTACHE_MAIN_DIR);
  const [topContributions, notableContributions] = githubContributions;
  try{
    const hashnodePosts = hashnodeProfile.user.publication.posts
    console.log(hashnodePosts)
  }catch(err){
    console.log(hashnodePosts)
  }
  const DATA = {
      topContributions,
      notableContributions,
      githubSummaryMarkdown: githubSummary.markdown || "",
      mostRecentBlogPosts,
      hashnodeProfile
  }
  const output = Mustache.render(template.toString(), DATA);
  await fs.writeFile('README.md', output);
}

module.exports = generateReadMe
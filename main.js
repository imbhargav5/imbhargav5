
const fs = require('fs').promises
const Mustache = require('mustache');
const fetch = require('isomorphic-fetch');
const partition = require('lodash.partition')

const MUSTACHE_MAIN_DIR = './main.mustache';



async function getTopContributions(token){
  try{
    const TOP_CONTRIBUTIONS_QUERY = `
    query{
      viewer {       
        name
        topRepositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {         
          nodes{
            id
            name
            description
            url
            owner {
              login
            }
            isPrivate
            stargazers{
              totalCount
            }
          }      
          totalCount
        }
      }  
    }
  `;
    const response = await fetch(`https://api.github.com/graphql`, {
          method: 'POST',
          body: JSON.stringify({
              query: TOP_CONTRIBUTIONS_QUERY
          }),
          headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
          }
    })
    const json = await response.json();
    const {topRepositories} = json.data.viewer;
    const EXCLUDE_OWNERS = ['theblitzapp']    
    const MIN_STAR_COUNT = 11
    const FAVORITE_REPOS = ['rooks','styled-components','gatsby','nodejs.dev', 'graphql-faker', 'reactour']
    const filteredRepositories = topRepositories.nodes
        .filter(repository => !repository.isPrivate && repository.stargazers.totalCount >= MIN_STAR_COUNT && !EXCLUDE_OWNERS.includes(repository.owner.login))
        .sort((a,b)=> b.stargazers.totalCount - a.stargazers.totalCount)        
        .slice(0,20);    
    return partition(filteredRepositories, repository => {
      return FAVORITE_REPOS.includes(repository.name);
    });    
  }catch(err){
    console.log(err);
  }
  return [[], []];
}

async function generateReadMe(token) {
  const [topContributions, notableContributions] = await getTopContributions(token);
  const template = await fs.readFile(MUSTACHE_MAIN_DIR);
  const DATA = {
      topContributions,
      notableContributions
  }
  const output = Mustache.render(template.toString(), DATA);
  await fs.writeFile('README.md', output);
}

module.exports = generateReadMe
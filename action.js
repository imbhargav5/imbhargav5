const main = require("./main");
const TOP_CONTRIBUTIONS = JSON.stringify(process.env.TOP_CONTRIBUTIONS);
const NOTABLE_CONTRIBUTIONS = JSON.stringify(process.env.NOTABLE_CONTRIBUTIONS)
const githubContributions = [TOP_CONTRIBUTIONS,NOTABLE_CONTRIBUTIONS ]
main({githubContributions});
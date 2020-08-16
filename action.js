const main = require("./main");
const TOP_CONTRIBUTIONS = JSON.parse(process.env.TOP_CONTRIBUTIONS);
const NOTABLE_CONTRIBUTIONS = JSON.parse(process.env.NOTABLE_CONTRIBUTIONS)
const GITHUB_SUMMARY = JSON.parse(process.env.GITHUB_SUMMARY)
const githubContributions = [TOP_CONTRIBUTIONS,NOTABLE_CONTRIBUTIONS ]
main({githubContributions});
require('dotenv').config();
const main = require("./main");
const TOP_CONTRIBUTIONS = [];
const NOTABLE_CONTRIBUTIONS = []
const githubSummary = `<h3>Hi I am Bhargav.</h3>`
const githubContributions = [TOP_CONTRIBUTIONS,NOTABLE_CONTRIBUTIONS ]
main({githubContributions, githubSummary});
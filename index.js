require('dotenv').config();
const main = require("./main");
const TOP_CONTRIBUTIONS = [];
const NOTABLE_CONTRIBUTIONS = []
const githubContributions = [TOP_CONTRIBUTIONS,NOTABLE_CONTRIBUTIONS ]
main({githubContributions});
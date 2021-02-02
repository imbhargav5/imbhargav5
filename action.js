const main = require("./main");
const TOP_CONTRIBUTIONS = JSON.parse(process.env.TOP_CONTRIBUTIONS);
const NOTABLE_CONTRIBUTIONS = JSON.parse(process.env.NOTABLE_CONTRIBUTIONS)
const githubSummary = JSON.parse(process.env.GITHUB_SUMMARY)
const mostRecentBlogPosts = JSON.parse(process.env.BLOG_POSTS)
const hashnodeProfile = JSON.parse(process.env.HASHNODE_PROFILE)
const githubContributions = [TOP_CONTRIBUTIONS,NOTABLE_CONTRIBUTIONS ]
main({githubContributions, githubSummary, mostRecentBlogPosts, hashnodeProfile});
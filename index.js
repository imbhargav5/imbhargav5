require('dotenv').config();
const main = require("./main");
const token = process.env.TOKEN;
main(token);
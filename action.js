const main = require("./main");
const token = process.env.TOKEN;
console.log(token.substr(0,5));
main(token);
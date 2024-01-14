const http = require("http");
const library = require("./libaray/fun");
// const toProperUpper = require("proper-upper-case");
const popeke = require("./index");
const slugify = require("slugify");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  // let result1 = toProperUpper("tidnedjdnjd");
  // let result = library.convertString("hello from nepal");

  // res.end(result + result1);
  result1 = popeke.title("The Back End");
  result = popeke.slugify("The Back End");
  res.end(result + result1);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

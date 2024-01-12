const http = require("http");
const libaray = require("./libaray/fun");
const toProperUpper = require("proper-upper-case");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    let result = libaray.convertString("heloo form nepal");
    let result1 = toProperUpper("tidnedjdnjd");
    res.end(result + result1);
  })
  .listen(8000);
console.log("Server is running on http://localhost:8000/");

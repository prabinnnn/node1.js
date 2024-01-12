const http = require("http");
const libaray = require("./libaray/fun");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    let result = libaray.convertString("heloo form nepal");
    res.end(result);
  })
  .listen(8000);
console.log("Server is running on http://localhost:8000/");

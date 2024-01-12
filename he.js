const http = require("http");
http
  .createServer((req, res) => {
    get;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello to me");
    res.end();
  })
  .listen(8000);

console.log("Server is running on http://localhost:8000/");

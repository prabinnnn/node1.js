const http = require("http");
const libaray = require("./libaray/fun");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const modul = write("hello world");
    const modul1 = libaray.convertString("heloo prabin");
  })
  .listen(8000);
console.log("Server is running on http://localhost:8000/");

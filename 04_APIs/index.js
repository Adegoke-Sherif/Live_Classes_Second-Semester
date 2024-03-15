const http = require("http");
const books = require("./books")
const books = require("./authors")

const server = http.createServer((req, res) => {
  if(req.url === "/books") {
    books(req, res);
  }
  if(req, res === "authors") {
    authors(req, res);
  }
  res.write("Hello World");
  res.end();
})

server.listen(3000)
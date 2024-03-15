//Create a simple Server in Nodejs

//import http server
const http = require("http");
const path = require("path")
const fs = require("fs")
const os = require("os")

//create server
const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log(req.method)
  // console.log(path.dirname(__filename) + "/index.js");
  if(req.url ==="/") {
    res.write("Hello World")
    res.end()
  } else if (req.url ==="/hello" && req.method === "POST") {
    res.write("Hello Juma")
    res.end()
  } else if (req.url === "/read") {
    fs.readFile("./hello.txt", (err, data) => {
      if(err) {
        console.log(err);
      } else{
        res.write(data);
        res.end();
      }
    })
  } else {
    res.write("404 not found- We don't know what you are looking for")
    res.end()
  }
  // res.end("Welcome AltSchoolers!");
}) 

server.listen(8000, null, null, () => {
  console.log("Server is running");
})
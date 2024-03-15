//Create a simple Server in Nodejs

//import http server
const http = require("http");


//create server
const behavior = (req, res) => {

  console.log(req.method);
  console.log(req.url);
  if(req.method === "GET" && req.url === "/books") {
    res.write(JSON.stringify({ title: "The Alchemist", pages: 200})); 
  }
  if (req.method === "POST" && req.url === "/books") {
    res.write("Hello from POST /Books")
  }
  if (req.method === "PUT" && req.url === "/books/author") {
    res.write("Hello From PUT /books/author")
  }
  res.write("Hello frm page" + req.url);
  res.end()
}
const server = http.createServer(behavior)
  
server.listen(8000, null, null, () => {
  console.log("Server is running on Port 8000");
})
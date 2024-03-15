const http = require("http");
const behavior = require("./behavior")
//create server
const server = http.createServer(behavior)
  
server.listen(5000, () => {
  console.log("Server is running on Port 5000");
})
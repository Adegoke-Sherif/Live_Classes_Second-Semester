const { generateRandomString } = require("./Utils/helper.util");

function books(req, res) {
  console.log(generateRandomString(10))
  if(req.method === "POST") {

  }
  if(req.method === "GET") {

  }
  if(req.method === "GET") {
    //get book by ID
  }
  if(req.method === "PUT") {
 
  }
  res.write("BOOKS API")
}

module.exports = books;
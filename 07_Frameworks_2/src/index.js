const express = require("express")
const bookRoute = require("./routes/books.route")
const authorRoute = require("./routes/author.route")
const port = 3000

const app = express()
app.use(express.json())
app.use("/books", bookRoute);
app.use("/authors", authorRoute);

app.get("/", (req, res) => {
  res.jsonp({message: "Hello World"})
})

app.all("*/", (req, res) => {
  res.status(404).jsonp({ message: "page not found"})
})

app.listen(port, () => {
  console.log("server is listening on port 3000: Express.js")
})
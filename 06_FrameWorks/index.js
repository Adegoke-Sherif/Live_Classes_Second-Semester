const  express = require("express");
const app = express();
const bookRoute = require("./books.route")
const logger = require("./logger")
const Port = 3000;

app.use(express.json());
app.use(logger)
app.use(express.static("public"))

app.use("/books", bookRoute)

app.get("/", (req, res) => {
  res.send("Hello World")
})
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
})

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`)
})
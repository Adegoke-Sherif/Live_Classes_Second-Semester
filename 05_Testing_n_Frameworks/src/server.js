const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.header("Content-Type", "text/html")
  res.write("<h2>Hello World!<h2>")
  res.end()
})

app.post("/", (req, res) => {
  res.status(201).json({
    message: "Hello World", more: true });
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
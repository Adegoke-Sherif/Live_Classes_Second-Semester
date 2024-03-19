const express = require("express");
const { getBooksController, getSomethingController } = require("../Controller/book.controller");
const router = express.Router();

router.use((req, res, next) => {
  console.log("request from books");
  console.log("authentication", req.headers["authentication"]);
  next();
})
const lastLayerMiddleware = (req, res, next) => {
  console.log("last layer middleware");
  next();
}
router.get("/",lastLayerMiddleware, (req, res) => {
  getBooksController(req, res)
})

router.get("/something", (req, res) => {
  getSomethingController(req, res)
})

router.get("/:booksId", (req, res) => {
  console.log(req.params);
  console.log(req.query)
  res.json({ name: "Harry potter", pages: 760})
})

router.post("/", (req, res) => {
  res.json({ message: "Book created", books: req.body})
})

module.exports = router;
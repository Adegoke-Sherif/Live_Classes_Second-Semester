const express = require("express");
const booksController = require("../Controller/book.controller");
const router = express.Router();

router.use((req, res, next) => {
  console.log("request from books");
  console.log("authentification", req.headers["authentification"]);  //global route
  console.log("Content-type", req.headers["Content-type"]);
  next();
})
const lastLayerMiddleware = (req, res, next) => {
  console.log("last layer middleware");
  next();
}
router.get("/",lastLayerMiddleware, booksController.getBooks)
router.get("/something", booksController.getSomething)
router.get("/:booksId", booksController.getBookById)

router.get("/:booksId/authors/:authorId", booksController.getBookByIdAndAuthorId)

router.post("/", (req, res) => {
  res.json({ message: "Book created", books: req.body})
})

module.exports = router;
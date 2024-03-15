const behavior = (req, res) => {
  res.write("Hello from page" + req.url);
  switch (req.url) {
    case "/":
       res.statusCode = 201
      res.write("Hello From root " + req.url);
      break;
    case "/about":
      res.write("Hello from about " + req.url);
      break;
    case "/contact":
      res.write("Hello from contact " + req.url);
      break;
    default:
      res.statusCode = 404
      res.write("Hello from page " + req.url)
      break;
  }
  res.end();
};

module.exports = behavior;
module.exports = { behavior }

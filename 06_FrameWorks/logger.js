//function that takes in req, res and next global middleware
const logger = (req, res, next) => {
  console.log("Request", {
    url: req.url,
    method: req.method,
    time: new Date(),
    body: req.body,
    query: req.query,
    params: req.params,
  })
  next()
}


module.exports = logger;
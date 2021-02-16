function logger(req, res, next) {
  // DO YOUR MAGIC
  const time = new Date().toLocaleString()
  console.log(`Request was made at ${time} using ${req.method} method, using url ${req.url}`)
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
}
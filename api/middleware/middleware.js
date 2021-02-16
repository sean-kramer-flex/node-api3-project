const users = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  const time = new Date().toLocaleString()
  console.log(`Request was made at ${time} using ${req.method} method, using url ${req.url}`)
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  return (req, res, next) => {
users.getById(req.params.id)
.then((user) => {
  if (user) {
    req.user = user
    next()
  } else {
    res.status(404).json({
      message: "No such user in database"
    })
  }
})
  }
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
  validateUserId,
}
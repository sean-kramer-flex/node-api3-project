const users = require('../users/users-model')
const posts = require('../posts/posts-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  const time = new Date().toLocaleString()
  console.log(`Request was made at ${time} using ${req.method} method, using url ${req.url}`)
  next()
}

function validateUserId() {
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

function validatePostId() {
  return (req, res, next) => {
    posts.getById(req.params.id)
    .then((post) => {
      if(post) {
        req.post = post
        next()
      } else {
        res.status(404).json({
          message: "No post with that id"
        })
      }
    })
  }
}

function validateUser() {
  // DO YOUR MAGIC
  return (req, res, next) => {
    if (!req.body.name) {
      return res.status(400).json({
        message: "Missing required data"
      })
    }
    next()
  }

}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePostId
}
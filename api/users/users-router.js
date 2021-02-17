const express = require('express');

const users = require('./users-model')
const { validateUserId, validateUser } = require('../middleware/middleware')
const posts = require('../posts/posts-model')

const router = express.Router();

router.get('/', (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  users.get()
  .then((users) => {
    res.json(users)
  })
  .catch((error) => {
    console.log(error)
    next(error)
  })

});

router.get('/:id', validateUserId(), (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
res.json(req.user)
});

router.post('/', validateUser(), (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  // if (!req.body.name) {
  //   return res.status(400).json({
  //     message: "Missing required data"
  //   })
  // }
  users.insert(req.body)
  .then((user) => {
    res.status(201).json(user)
  })
  .catch(next)
});

router.put('/:id', validateUser(), validateUserId(), (req, res, next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  users.update(req.params.id, req.body)
  .then((user) => {
    res.json(user)
  })
  .catch(next)
});

router.delete('/:id', validateUserId(), (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  users.remove(req.params.id)
  .then((user) => {
    res.json({
      message: `user has been deleted`
    })
  })
  .catch(next)
});

router.get('/:id/posts', validateUserId(), (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  users.getUserPosts(req.params.id)
  .then((posts) => {
    res.json(posts)
  })
  .catch(next)
});

router.post('/:id/posts', validateUserId(), (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
if(!req.body.text) {
  res.status(404).json({
    message: "Text required"
  })
} else {
  posts.insert({
    text: req.body.text,
    user_id: req.params.id,
  })
  .then((post) => {
    res.status(201).json(post)
  })
  .catch(next)
}


});

// do not forget to export the router
module.exports = router
const express = require('express');

const users = require('./users-model')
const { validateUserId } = require('../middleware/middleware')

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

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router
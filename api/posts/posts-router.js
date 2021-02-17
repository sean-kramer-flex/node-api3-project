const express = require('express');
const posts = require('./posts-model')
const { validatePostId } = require('../middleware/middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  posts.get()
  .then((posts) => {
    res.json(posts)
  })
  .catch(next)

});

router.get('/:id', validatePostId(), (req, res, next) => {
  // DO YOUR MAGIC
// if (!)
// console.log('id req:', req);

res.json(req.post)

  // posts.getById(req.params.id)
  // .then ((post) => {
  //   if (post) {
  //     res.json(post)
  //   } else {
  //     res.status(400).json({
  //       message: "No post with this id"
  //     })
  //   }
    
  // })
  // .catch(next)
});

// do not forget to export the router
module.exports = router

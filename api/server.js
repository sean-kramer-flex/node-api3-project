const express = require('express');
const usersRouter = require('./users/users-router')
const postsRouter = require('./posts/posts-router')
const { logger } = require('../api/middleware/middleware')

const server = express();
// console.log('server: ', server);
// remember express by default cannot parse JSON in request bodies
server.use(express.json())
server.use(logger)



// global middlewares and routes need to be connected here
server.use('/users', usersRouter)
server.use('/posts', postsRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong"
  })
})

module.exports = server;

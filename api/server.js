const express = require('express');
const usersRouter = require('./users/users-router')
const { logger } = require('../api/middleware/middleware')

const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json())
server.use(logger)



// global middlewares and routes need to be connected here
server.use('/users', usersRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;

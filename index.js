require('dotenv').config()

// require your server and launch it
const server = require('./api/server')

const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`server listening at port ${port}`)
})
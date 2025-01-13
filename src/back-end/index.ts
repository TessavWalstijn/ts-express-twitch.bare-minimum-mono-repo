import express from 'express'

const server = express()

server.static('./public')

const port = 3030

server.listen(port, () => {
  console.log(`Listening on post ${port}`)
})

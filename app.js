const fastify = require('fastify')

const app = fastify()
app.get('/', (request, reply) => reply.send({ hello: 'this is kamalesh' }))


if (require.main === module) {
  // called directly i.e. "node app"
  app.listen(9000, (err) => {
    if (err) console.error(err)
    console.log('server listening on 9000')
  })
} else {
  // required as a module => executed on aws lambda
  module.exports = app
}
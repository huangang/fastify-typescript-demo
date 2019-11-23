export = ((fastify, opts, next) => {
  fastify.get('/', (request, reply) => {
    reply.send({ root: true })
  })
  next()
});

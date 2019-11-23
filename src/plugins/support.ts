import * as fp from 'fastify-plugin'

export = fp((fastify, opts, next) => {
  fastify.decorate('someSupport', () => {
    return 'hugs'
  })
  next()
});

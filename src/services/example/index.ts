export = ((fastify, opts, next) => {
    fastify.get('/example', (request, reply) => {
       reply.send('this is an example')
    })
    next();
});
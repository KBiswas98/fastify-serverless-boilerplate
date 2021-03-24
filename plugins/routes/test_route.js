function routes(fastify, options, done) {
  fastify.get("/", async (request, response) => {
    return { hello: "this is my hello world" };
  });
  done();
}

module.exports = routes;

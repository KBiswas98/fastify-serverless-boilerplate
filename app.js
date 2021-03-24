const fastify = require("fastify");
const app = fastify();
const secret = require("./secrets.json");

const nodemonDevelopmentWrapper = (path) => {
  return process.env.MODE === "nodemon" ? "development" + path : path;
};

// register a route.
app.register(require("./plugins/routes/test_route"), {
  prefix: nodemonDevelopmentWrapper("/v1"),
});

// default route.
app.get("/", (request, reply) => reply.send({ hello: "Welcome." }));

if (require.main === module) {
  app.listen(secret.LOCAL_PORT, (err) => {
    if (err) console.error(err);
    console.log("server listening on " + secret.LOCAL_PORT);
  });
} else {
  module.exports = app;
}

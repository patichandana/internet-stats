const fastify = require("fastify")({logger: true});
const {getInternetSpeed} = require("./getInternetSpeed");

fastify.get('/metrics', getInternetSpeed);

fastify.listen({port: 3000}, (err) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1);
    }
})
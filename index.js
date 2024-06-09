const fastify = require("fastify")({logger: true});
const {getInternetSpeed} = require("./getInternetSpeed");
const {isInternetAlive} = require("./isInternetAlive");

// fastify.get('/metrics', getInternetSpeed);
fastify.get('/metrics', isInternetAlive);

fastify.listen({port: 3000}, (err) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1);
    }
})
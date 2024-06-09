const FastSpeedtest = require("fast-speedtest-api");

const speedtest = new FastSpeedtest({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
    verbose: false, // default: false
    timeout: 10000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5
    bufferSize: 8, // default: 8
    unit: FastSpeedtest.UNITS.Mbps // default: Bps
});

const getInternetSpeed = async (request, reply) => {
    const internetspeed = await speedtest.getSpeed();
    reply.send(`internet_speed ${internetspeed}`);
}

module.exports = {getInternetSpeed: getInternetSpeed}
const ping = require("ping")

const isInternetAlive = (request, reply) => {
    const hosts = ["nuc.local"]
    hosts.forEach((host) => {
        ping.sys.probe(host, function(isAlive) {
            console.log(`is_internet_alive(domain="${host}") ` +  Number(isAlive));
            reply.send(`is_internet_alive(domain="${host}) ` +  Number(isAlive))        
        })
    });
}

module.exports = {isInternetAlive: isInternetAlive}
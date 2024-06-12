const ping = require("ping")

//function to return a promise when the action is resolved
const getHostStatusLine = (host) => {
    return new Promise((resolve) => {
        ping.sys.probe(host, (status) => {
            resolve(`is_internet_alive{domain="${host}"} ` + Number(status));
        });
    })
};

const isInternetAlive = (request, reply) => {
    const hosts = ["nuc.local", "google.com"]
    
    const pingPromises = hosts.map((host) => getHostStatusLine(host))   

    Promise.all(pingPromises).then((resolvedHostStatuses) => {
        const response = resolvedHostStatuses.join("\n")
        reply.send(response)
    })
    
}

module.exports = { isInternetAlive: isInternetAlive }
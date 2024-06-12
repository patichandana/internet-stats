const ping = require("ping")

const isInternetAlive = (request, reply) => {
    const hosts = ["nuc.local", "google.com"]
    let isAlive = []
    let response = "";
    let pingPromises = []
    hosts.forEach((host, index) => {
        pingPromises.push(new Promise((resolve) => {
            ping.sys.probe(host, resolve);
        }).then((websiteStatus) => {
            isAlive.push(websiteStatus);
            response = response + `is_internet_alive{domain="${host}"} ` + Number(websiteStatus) + "\n";
        }));
    });
    Promise.all(pingPromises).then(() => {
        reply.send(response);
    }).catch(() => {
        reply.send(response)
    })
    // reply.send(response)        
}

module.exports = { isInternetAlive: isInternetAlive }
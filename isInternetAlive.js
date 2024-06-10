const ping = require("ping")

const isInternetAlive = (request, reply) => {
    const hosts = ["nuc.local", "google.com"]
    let isAlive = []
    let response = "";
    hosts.forEach(async (host, index) => {
        await ping.sys.probe(host, function (websiteStatus) {
            // console.log(`is_internet_alive(domain="${host}") ` +  Number(isAlive));
            // console.log(host)
            isAlive.push(websiteStatus);
            response = response + `is_internet_alive{domain="${host}"} ` + Number(websiteStatus) + "\n";
        });
        if(isAlive.length == hosts.length)
            reply.send(response);
    });
    // reply.send(response)        
}

module.exports = {isInternetAlive: isInternetAlive}
const {runProcess} = require("./processor");

function restartNginx() {
    return runProcess('systemctl', ['restart', 'nginx'])
}

function enableSSL(domainName) {

    return runProcess('certbot', ['--nginx', '-d' , domainName,  '-d' , "www." +domainName])
}

module.exports = {
    restartNginx,
    enableSSL
}

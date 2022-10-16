// const {spawn} = require('node:child_process');
const { spawn } = require('child_process')
const isWin = process.platform === "win32";

function getDefaultNginxFolder() {
    return isWin ? "C:\\nginx" : '/etc/nginx';
}


function runProcess(command, args) {
    return new Promise((resolve, reject) => {
        const process = spawn(command, args);
        process.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        process.stderr.on('data', (data) => {
            console.error(data.toString());
        });
        process.on('close', (code) => {
            resolve(code);
        });
    });
}


function isSudo() {

    return isWin ? true : (process.getuid && process.getuid() === 0);
}

module.exports = {
    runProcess,
    isSudo
}

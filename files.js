const fs = require('fs');

async function  writeFile( path ,  content ) {


    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, err => {
            if (err) {
                reject(err);
            }
            resolve();
            // file written successfully
        });
    })



}

async function readFile(filename) {

    return new Promise((resolve, reject) => {
        fs.readFile( filename,"utf8", function(err, data) {

            if (err) {
                reject(err) ;
            }
            resolve(data);

        });
    });


}
async function createFolder(path) {

    return new Promise((resolve, reject) => {

        if (fs.existsSync(path)){
            resolve();
        }

        fs.mkdir(path, { recursive: true }, (err) => {
            if (err) {
                reject(err) ;
            }
            resolve(data);
        });



    });


}


async function createSymbolicLink(path,link) {

    return new Promise((resolve, reject) => {

        if (fs.existsSync(link)){
            resolve();
        }


        fs.symlink(link, path, "file", err => {
            if (err) {
                reject(err) ;
            }
            resolve();
        });

    });


}

module.exports = {
    writeFile,
    readFile,
    createFolder,
    createSymbolicLink

}

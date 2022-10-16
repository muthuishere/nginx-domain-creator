const fs = require('fs');
const {readFile} = require("./files");

async function  parseStaticConfig({domainName,staticDomainPath}){
    let contents = await readFile('./templates/static.conf');
    contents = contents.replaceAll('#DOMAIN_NAME#', domainName)
    contents = contents.replaceAll('#DOMAIN_FOLDER#', staticDomainPath)
    return contents;
}


module.exports = {
     parseStaticConfig


}

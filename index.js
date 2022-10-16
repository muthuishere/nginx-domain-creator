const {createStaticSite} = require("./static-site-creator");
const {isSudo} = require("./processor");


if(isSudo()){

    let filename = process.argv[2];
    console.log(filename);
    const {nginxFolder,domainName, staticDomainPath, useSSL} = require(filename);


    createStaticSite({nginxFolder,domainName, staticDomainPath, useSSL}).then(() => {
        console.log("Done");
        process.exit(0);
    }).catch((err) => {
        console.error(err);
        process.exit(1);
    });


}else{
    console.log('Please run as sudo')
}




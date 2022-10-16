
const path = require('path')
const {createStaticConfig, parseStaticConfig} = require("./configfile");
const {writeFile, createFolder, createSymbolicLink} = require("./files");
const Path = require("path");
const {runProcess, isSudo} = require("./processor");
const {restartNginx, enableSSL} = require("./nginx");
const exec = require('child_process').exec
// const nginxFolder = '/etc/nginx';


async function createStaticSite({nginxFolder, domainName, staticDomainPath, useSSL}) {

    const nginxSitesAvailableFolder = nginxFolder + Path.sep+ 'sites-available'
    const nginxSitesEnabledFolder = nginxFolder + Path.sep+ 'sites-enabled'
    let siteAvailableFolder = path.join(nginxSitesAvailableFolder, domainName + '.conf');
    let siteEnabledLink = path.join(nginxSitesEnabledFolder, domainName + '.conf');


    //Create Domain Folder
    await createFolder(staticDomainPath)


    // create ConfigFile
    const configFileContents = await parseStaticConfig({domainName, staticDomainPath})
    await writeFile(siteAvailableFolder, configFileContents)


    //ln -s /etc/nginx/sites-available/{YOUR_DOMAIN.com}.conf
    await createSymbolicLink(siteAvailableFolder, siteEnabledLink)


    await restartNginx();

    if(useSSL){
        await enableSSL(domainName);
    }

}



if(isSudo()){

    const {nginxFolder,domainName, staticDomainPath, useSSL} = require(process.argv.slice(2));


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




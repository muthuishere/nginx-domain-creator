
const fs = require('fs');
const chai = require('chai');
const {parseStaticConfig} = require("./configfile");
const {createStaticSite} = require("./static-site-creator");
const {nginxFolder, domainName, staticDomainPath, useSSL} = require("./command.json");
const expect = chai.expect;



describe('static site creator test',   () => {

    it('should read the config file', async () => {

        const {nginxFolder,domainName, staticDomainPath, useSSL} = require("./command-win.json");


        await createStaticSite({nginxFolder,domainName, staticDomainPath, useSSL})

    });
})

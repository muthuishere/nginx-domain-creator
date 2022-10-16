
const fs = require('fs');
const chai = require('chai');
const {parseStaticConfig} = require("./configfile");
const expect = chai.expect;



describe('Config tests',   () => {

    it('should read the config file', async () => {
        const result = await parseStaticConfig({domainName:'test.com',path:'/var/www/text'})
        expect(result).to.include('test.com');
        expect(result).to.include('/var/www/text');
        console.log(result);
    });
})

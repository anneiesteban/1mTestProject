const oneMillionPage = require("../pageobjects/one.million.page");


describe('Volvo Logo One Million Page', () => {

    it('should verify volvo logo link successfully opened', async () => { 
         oneMillionPage.clickAcceptCookie();
         await oneMillionPage.volvoLogo.click();
         await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl');
    });
});
const oneMillionPage = require("../pageobjects/one.million.page");


describe('Footer Legal One Million Page', () => {

    it('should verify footer legal link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
       
        await oneMillionPage.footerLegalLink.waitForDisplayed();   
        await oneMillionPage.footerLegalLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/legal/legal');
    });
});
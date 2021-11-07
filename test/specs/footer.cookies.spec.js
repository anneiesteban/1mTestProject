const oneMillionPage = require("../pageobjects/one.million.page");


describe('Footer Cookies One Million Page', () => {

    it('should verify footer cookies link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
       
        await oneMillionPage.footerCookiesLink.waitForDisplayed();   
        await oneMillionPage.footerCookiesLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/legal/cookies');
    });
});
const oneMillionPage = require("../pageobjects/one.million.page");


describe('Footer Privacy One Million Page', () => {

    it('should verify footer privacy link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
        
        await oneMillionPage.footerPrivacyLink.waitForDisplayed();   
        await oneMillionPage.footerPrivacyLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/legal/privacy');
    });
});
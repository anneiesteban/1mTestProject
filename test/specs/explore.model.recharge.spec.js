const oneMillionPage = require("../pageobjects/one.million.page");


describe('Explore Model Recharge One Million Page', () => {

    it('should verify explore model recharge link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
        
        await oneMillionPage.exploreModelRechargeLink.waitForDisplayed();   
        await oneMillionPage.exploreModelRechargeLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/cars/recharge');
       
    });
});
const oneMillionPage = require("../pageobjects/one.million.page");


describe('Explore Model Learn One Million Page', () => {

    it('should verify explore model learn link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
        
        await oneMillionPage.exploreModelLearnLink.waitForDisplayed();   
        await oneMillionPage.exploreModelLearnLink.click();
        await expect(oneMillionPage.shopButton).toBeDisplayed();
    });
});

const oneMillionPage = require("../pageobjects/one.million.page");


describe('Explore Model Mild Hybrid Cars One Million Page', () => {

    it('should verify explore model mild hybrid cars link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
        
        await oneMillionPage.exploreModelMildHybridCarsLink.waitForDisplayed();   
        await oneMillionPage.exploreModelMildHybridCarsLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/cars/other-powertrains');
       
    });
});
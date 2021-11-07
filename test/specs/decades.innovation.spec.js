const oneMillionPage = require("../pageobjects/one.million.page");


describe('Decades of Innovation One Million Page', () => {

    it('should verify decades of innovation link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
        
        await oneMillionPage.menuLink.waitForDisplayed();   
        await oneMillionPage.menuLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/car-safety/safety-heritage');
    });
});
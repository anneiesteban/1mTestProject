const oneMillionPage = require("../pageobjects/one.million.page");


describe('Car Safety One Million Page', () => {

    it('should verify car safety driver assistance link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
       
        await oneMillionPage.carSafetyLink.waitForDisplayed();   
        await oneMillionPage.carSafetyLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/car-safety');

        
        await oneMillionPage.driverAssisyanceLink.waitForDisplayed();   
        await oneMillionPage.driverAssisyanceLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/car-safety/driver-assistance');
    });
});
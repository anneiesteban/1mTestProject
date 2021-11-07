const oneMillionPage = require("../pageobjects/one.million.page");


describe('Car Safety Child Safety One Million Page', () => {

    it('should verify car safety Child Safety link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
  
        await oneMillionPage.carSafetyLink.waitForDisplayed();   
        await oneMillionPage.carSafetyLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/car-safety');

        await oneMillionPage.childSafetyLink.waitForDisplayed();   
        await oneMillionPage.childSafetyLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/why-volvo/human-innovation/future-of-driving/safety/child-safety');
    });
});
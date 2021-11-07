const oneMillionPage = require("../pageobjects/one.million.page");


describe('Our Cars One Million Page', () =>{

    it('should verify our cars sub menu successfully opened', async () =>{  
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
        await oneMillionPage.ourCars.click();
        await oneMillionPage.ourCars.waitForDisplayed();
        await oneMillionPage.ourCarsClose.click();
    });
});
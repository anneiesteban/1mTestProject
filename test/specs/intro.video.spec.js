const oneMillionPage = require("../pageobjects/one.million.page");


describe('Intro Video One Million Page', () => {
    
    it('should play intro video',  async () => {
        oneMillionPage.clickAcceptCookie();
        browser.pause(10000);
       
        await oneMillionPage.introVideoButton.waitForDisplayed();   
        await oneMillionPage.introVideoButton.click();
        await oneMillionPage.introVideoButton.waitForDisplayed({reverse: true});  
    });
});
const oneMillionPage = require("../pageobjects/one.million.page");


describe('Menu One Million Page', () => {

    it('should verify menu successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
  
        await oneMillionPage.menuLink.click();
        await oneMillionPage.menuLinkClose.waitForDisplayed();   
        await oneMillionPage.menuLinkClose.click();
    });
});
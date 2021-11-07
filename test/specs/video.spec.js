const oneMillionPage = require("../pageobjects/one.million.page");


describe('Video One Million Page', () => {
    
    it('should play summer video',  async () => {
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
        
        await oneMillionPage.h2Header.scrollIntoView();
        await oneMillionPage.summerVideoButton.waitForDisplayed();   
        await oneMillionPage.summerVideoButton.click();
        await oneMillionPage.summerVideoButton.waitForDisplayed({reverse: true});  
     
    });

    it('should play amy video',  async () => {
        await oneMillionPage.amyVideoButton.waitForDisplayed();   
        await oneMillionPage.amyVideoButton.click();
        await oneMillionPage.amyVideoButton.waitForDisplayed({reverse: true}); 
    });

    it('should play linda and molly video',  async () => {  
        await oneMillionPage.ourCarslabel.scrollIntoView();
        await oneMillionPage.lindaMollyVideoButton.waitForDisplayed();   
        await oneMillionPage.lindaMollyVideoButton.click();
        await oneMillionPage.lindaMollyVideoButton.waitForDisplayed({reverse: true}); 
    });

    it('should play alex video',  async () => {
        await oneMillionPage.alexVideoButton.waitForDisplayed();   
        await oneMillionPage.alexVideoButton.click();
        await oneMillionPage.alexVideoButton.waitForDisplayed({reverse: true}); 
    });

});
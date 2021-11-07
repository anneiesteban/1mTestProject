const oneMillionPage = require("../pageobjects/one.million.page");


describe('Explore Model Shop One Million Page', () => {

    it('should verify explore model shop link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
       
        await oneMillionPage.exploreModelShopLink.waitForDisplayed();   
        await oneMillionPage.exploreModelShopLink.click();

        await oneMillionPage.labelShop.scrollIntoView();
       
        await oneMillionPage.reviewButton.waitForDisplayed(); 
        await expect(oneMillionPage.reviewButton).toBeDisplayed();
    });
});
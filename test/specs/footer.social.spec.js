const oneMillionPage = require("../pageobjects/one.million.page");


describe('Footer Social Media One Million Page', () => {

    it('should verify footer social media link successfully opened', async () => { 
        oneMillionPage.clickAcceptCookie();
        browser.pause(5000);
    
        await oneMillionPage.footerSocialMediaLink.waitForDisplayed();   
        await oneMillionPage.footerSocialMediaLink.click();
        await expect(browser).toHaveUrlContaining('https://www.volvocars.com/intl/v/legal/social-media');
    });
});
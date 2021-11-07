const oneMillionPage = require("../pageobjects/one.million.page");


describe('Tab Title One Million Page', () => {

    it('should verify correct tab name', async () => { 
        browser.pause(5000);
        await expect(browser).toHaveTitleContaining('A million more | Volvo Cars - International');
    });
});
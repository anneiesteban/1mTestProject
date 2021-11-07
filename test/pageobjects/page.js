/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    get acceptCookie () { return $('//*[@title="Accept"]') }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more/${path}`)
    }
    /**
     * Accepts cookie popup
     */
    async clickAcceptCookie(){
      await this.acceptCookie.waitForDisplayed();
      await this.acceptCookie.click();  
      await this.acceptCookie.waitForDisplayed({reverse: true});
    }
}

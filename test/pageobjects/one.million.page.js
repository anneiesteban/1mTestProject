const Page = require('./page');

class OneMillionPage extends Page {

    get introVideoButton () { return $('#Video-1 > section > div > div > div > button') }
    get volvoLogo () {return $('#site-nav-topbar-wrapper > nav > div._SN-al._SN-am._SN-an._SN-ay._SN-ds._SN-u._SN-w > a')}
    get summerVideoButton () {return $('#VideoTestimonials-1 > section > div > div.ay.bw.bx.by.c.er.jg.jh.ji > div:nth-child(2) > div.a.bz.ck.jm.jn > div > button')}
    get amyVideoButton () {return $('#VideoTestimonials-1 > section > div > div.ay.bw.bx.by.c.er.jg.jh.ji > div:nth-child(1) > div.a.bz.ck.jm.jn > div > button')}
    get lindaMollyVideoButton () {return $('#VideoTestimonials-1 > section > div > div.ay.bw.bx.by.c.er.jg.jh.ji > div:nth-child(3) > div.a.bz.ck.jm.jn > div > button')}
    get alexVideoButton () {return $('#VideoTestimonials-1 > section > div > div.ay.bw.bx.by.c.er.jg.jh.ji > div:nth-child(4) > div.a.bz.ck.jm.jn > div > button')}
    get ourCarsClose () {return $('//*[@id="vcc-site-nav"]/div/div/div[1]/div/div[2]/button')}
    get ourCars () {return $('//*[@id="nav:topNavCarMenu"]')}
    get h2Header () {return $('#VideoTestimonials-1 > section > div > div.ay.bw.bx.by.c.n.o.s > h2')}
    get ourCarslabel () {return $('#VideoTestimonials-1 > section > div > div.ay.bw.bx.by.c.er.jg.jh.ji > div:nth-child(2) > div.ay.bw.bx.by.c.il.jo.n > em')}
    get menuLink () {return $('//*[@id="sitenav-sidenav-toggle"]')}
    get menuLinkClose () {return $('//*[@id="nav:sideNavigation"]/div[2]/div[1]/div[2]/button')}
    get introVideoButton () {return $('#Video-1 > section > div > div > div > button')}
    get footerSocialMediaLink () {return $('#vcc-site-footer > div > footer > div > div > span._SiteFooter-_e0s7r8 > span:nth-child(4) > a')}
    get footerPrivacyLink () {return $('#vcc-site-footer > div > footer > div > div > span._SiteFooter-_e0s7r8 > span:nth-child(3) > a')}
    get footerLegalLink () {return $('#vcc-site-footer > div > footer > div > div > span._SiteFooter-_e0s7r8 > span:nth-child(2) > a')}
    get footerCookiesLink () {return $('#vcc-site-footer > div > footer > div > div > span._SiteFooter-_e0s7r8 > span:nth-child(1) > a')}
    get exploreModelRechargeLink () {return $('//*[@id="ProductListCarousel-1"]/descendant::a[@data-autoid="ProductListCarousel:cta1"]')}
    get labelShop () {return $('#__next > div:nth-child(3) > div.a.b.c.d.dx.e.f.gn.h.l.v.w > h3')}
    get exploreModelShopLink () {return $('//*[@id="ProductListCarousel-1"]/descendant::a[@data-autoid="productListCarouselItem:link2"][1]')}
    get reviewButton () {return $('//*[@id="__next"]/div[1]/descendant::a')}
    get exploreModelMildHybridCarsLink () {return $('//*[@id="ProductListCarousel-1"]/descendant::a[@data-autoid="ProductListCarousel:cta2"]')}
    get exploreModelLearnLink () {return $('//*[@id="ProductListCarousel-1"]/descendant::a[@data-autoid="productListCarouselItem:link1"][1]')}
    get shopButton () {return $('#PdpSubmenu-1 > div.c.d.e.f.g.h.i.j.k.l.m.n.o > div > section > div.at.au.av.aw.c.e.f.g.h.p.q > div.c.e.f.g.h.p.q > div > div > a')}
    get menuLink () {return $('//*[@id="ImageWithText-1"]/descendant::a')}
    get carSafetyLink () {return $('//*[@id="IconCallouts-1"]/descendant::a')}
    get driverAssisyanceLink () {return $('//*[@id="ImageWithText-1"]/descendant::a')}
    get childSafetyLink () {return $('//*[@id="ImageWithText-2"]/descendant::a')}

    open () {
        return super.open('');
    }
   async clickAcceptCookie(){
     return super.clickAcceptCookie();
    }

    async playVideo(element){
        await this.element.waitForDisplayed();   
        await this.element.click();
        await this.element.waitForDisplayed({reverse: true});  
    }

}
module.exports = new OneMillionPage();
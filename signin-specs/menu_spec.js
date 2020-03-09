"use strict";

const Credentials = require('../pageObj/Credentials_page');
const MenuButtons = require('../pageObj/Menu_buttons_page');

describe('Main Menu buttons', function() {
    browser.manage().window().maximize();
    let credentials = new Credentials();
    let menuButtons = new MenuButtons();
    
    it('Should check Dashboard button', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.dashboard.click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://app.staff.com/#/dashboard');
    });

    it('Should check Reports button', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.reports.click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://app.staff.com/#/dashboard');
    });

    it('Should check Screencasts button', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.screencasts.get(0).click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://app.staff.com/#/screenshots');
    });

    it('Should check Edit Time button', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.editTime.get(1).click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://app.staff.com/#/edit-time');
    });

    it('Should check Settings button', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.settings.click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://app.staff.com/#/dashboard');
    });

    it('Should check Invite button', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.invite.get(2).click();
        browser.sleep(1000);
        expect(browser.getCurrentUrl()).toBe('https://app.staff.com/#/invite');
        //$('.md-input').sendKeys('q@q.qq');
        $$('.md-container').get(1).click();
        menuButtons.editTime.get(1).click();
        browser.sleep(1000);
        browser.switchTo().alert().accept();
        browser.sleep(1000);
    });

    it('Should check Download button', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.download.get(3).click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://app.staff.com/new/downloads');
    });
});
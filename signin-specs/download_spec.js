"use strict";

const Credentials = require('../pageObj/Credentials_page');
const MenuButtons = require('../pageObj/Menu_buttons_page');

describe('Download page', function() {
    browser.manage().window().maximize();
    let credentials = new Credentials();
    let menuButtons = new MenuButtons();

    it('Should download the file', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.download.get(3).click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://app.staff.com/new/downloads');
        let downloadButton = $('.download-btn');
        downloadButton.click();
        browser.sleep(3000);
        let warning = $('.rename-file-message');
        expect(warning.getText()).toContain('The download has begun.');
    });
});
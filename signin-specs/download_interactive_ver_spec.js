"use strict";

const Credentials = require('../pageObj/Credentials_page');
const MenuButtons = require('../pageObj/Menu_buttons_page');

describe('Download page interactive app version', function() {
    browser.manage().window().maximize();
    let credentials = new Credentials();
    let menuButtons = new MenuButtons();

    it('Should check the current interactive version', function() {
        credentials.login();
        browser.sleep(2000);
        menuButtons.download.get(3).click();
        browser.sleep(3000);
        let downloadButton = $('.download-btn');
        expect(downloadButton.getText()).toContain('v3.0.52');
    });
});
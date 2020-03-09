"use strict";

const Credentials = require('../pageObj/Credentials_page');
const MenuButtons = require('../pageObj/Menu_buttons_page');

describe('Download page silent app version', function() {
    browser.manage().window().maximize();
    let credentials = new Credentials();
    let menuButtons = new MenuButtons();

    it('Should check the current silent version', function() {
        credentials.loginSilent();
        browser.sleep(2000);
        menuButtons.download.get(3).click();
        browser.sleep(3000);
        let downloadButton = $('.download-btn');
        expect(downloadButton.getText()).toContain('v2.1.0.40');
    });
});
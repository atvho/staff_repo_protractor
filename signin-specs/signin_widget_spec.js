"use strict";

const Credentials = require('../pageObj/Credentials_page');
const EC = protractor.ExpectedConditions;

describe('Sign in and check widget', function() {
    let credentials = new Credentials();

    it('Should sign in and check no tracked time widget', function() {
        let widgetNoTracked = $('widget-user-invitation.widget');
        credentials.login();
        browser.wait(EC.visibilityOf(widgetNoTracked), 2000);
        expect(widgetNoTracked.getText()).toContain('People who haven’t tracked time');
    });
});
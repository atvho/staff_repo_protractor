"use strict";

const Credentials = require('../pageObj/Credentials_page');
const EC = protractor.ExpectedConditions;

describe('Sign in', function() {
    let credentials = new Credentials();

    it('Should sign in user', function() {
        credentials.login();
        expect(browser.wait(EC.urlContains('https://app.staff.com/#/dashboard'), 3000));
    });
});
"use strict";

const CreateCompany = require ('../pageObj/Create_company_page');
const EC = protractor.ExpectedConditions;

describe('Sign up check URL', function() {
    let createCompany = new CreateCompany();

    it('Should sign up and check first login URL', function() {
        createCompany.signup();
        expect(browser.wait(EC.urlIs('https://app.staff.com/#/dashboard?first-login=1'), 2000));
    }); 
});
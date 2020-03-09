"use strict";

const CreateCompany = require('../pageObj/Create_company_page');
const FieldsLocators = require('../pageObj/Fields_locators_page');
const EC = protractor.ExpectedConditions;

describe('Sign up default', function() {
    let createCompany = new CreateCompany();
    let fieldsLocators = new FieldsLocators();

    it('Should sign up with default steps', function() {
        createCompany.signup();
        browser.wait(EC.visibilityOf(fieldsLocators.discountPopup), 4000);
        // browser.sleep(5000);
        fieldsLocators.noDiscount.click();
        createCompany.skipSteps();
        createCompany.inviteDropdown();
        browser.wait(EC.urlIs('https://app.staff.com/#/dashboard'), 4000);
        // expect(browser.getCurrentUrl()).toBe('https://app.staff.com/?first-login=1#/dashboard');
    });
});
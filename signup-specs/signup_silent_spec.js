"use strict";

const CreateCompany = require ('../pageObj/Create_company_page');
const FieldsLocators = require ('../pageObj/Fields_locators_page');
const EC = protractor.ExpectedConditions;

describe('Sign up silent Company', function() {
    let createCompany = new CreateCompany();
    let fieldsLocators = new FieldsLocators();

    it('Should sign up in silent Company', function() {
        createCompany.signupSilent();
        browser.wait(EC.visibilityOf(fieldsLocators.noDiscount), 2000);
        fieldsLocators.noDiscount.click();
        browser.wait(EC.visibilityOf(fieldsLocators.silentRadio));
        fieldsLocators.silentRadio.click();
        browser.wait(EC.visibilityOf(fieldsLocators.officeRadio));
        fieldsLocators.officeRadio.click();
        createCompany.skipStepsSilent();
        expect(browser.wait(EC.urlIs('https://app.staff.com/#/dashboard'), 2000));
    });
});
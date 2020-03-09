"use strict";

const CreateCompany = require ('../pageObj/Create_company_page');
const FieldsLocators = require ('../pageObj/Fields_locators_page');
const EC = protractor.ExpectedConditions;

describe('Sign up tasks mode', function() {
    let createCompany = new CreateCompany();
    let fieldsLocators = new FieldsLocators();

    it('Should sign up with tasks selection', function() {
        createCompany.signup();
        browser.wait(EC.visibilityOf(fieldsLocators.noDiscount), 2000);
        fieldsLocators.noDiscount.click();
        browser.wait(EC.visibilityOf(fieldsLocators.nextButton));
        fieldsLocators.nextButton.click();
        browser.wait(EC.visibilityOf(fieldsLocators.toggleTaskFeature), 2000);
        fieldsLocators.toggleTaskFeature.click();
        browser.wait(EC.visibilityOf(fieldsLocators.nextButton), 2000);
        fieldsLocators.nextButton.click();
        browser.wait(EC.visibilityOf(fieldsLocators.skipButton), 2000);
        fieldsLocators.skipButton.click();
        browser.wait(EC.visibilityOf(fieldsLocators.nextButton), 2000);
        fieldsLocators.nextButton.click();
        createCompany.inviteDropdown();
        expect(browser.wait(EC.urlIs('https://app.staff.com/#/dashboard'), 2000));
    });
});
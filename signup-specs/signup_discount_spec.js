"use strict";

const CreateCompany = require('../pageObj/Create_company_page');
const FieldsLocators = require('../pageObj/Fields_locators_page');
const EC = protractor.ExpectedConditions;

describe('Sign up discount', function() {
    let createCompany = new CreateCompany();
    let fieldsLocators = new FieldsLocators();

    it('Should sign up with discount option', function() {
        createCompany.signup();
        browser.wait(EC.visibilityOf(fieldsLocators.ccNameField), 2000);
        fieldsLocators.ccNameField.sendKeys(createCompany.yourName);
        fieldsLocators.ccNumberField.sendKeys(createCompany.creditCard);
        fieldsLocators.ccExpirationField.sendKeys(345);
        fieldsLocators.ccCvcField.sendKeys(123);
        fieldsLocators.getDiscount.click();
        createCompany.skipSteps();
        createCompany.inviteDropdown();
        expect(browser.wait(EC.urlIs('https://app.staff.com/#/dashboard'), 2000));
    });
});
"use strict";

const CreateCompany = require('../pageObj/Create_company_page');
const FieldsLocators = require('../pageObj/Fields_locators_page');
const EC = protractor.ExpectedConditions;


describe('Sign up offer errors', function() {
    let createCompany = new CreateCompany();
    let fieldsLocators = new FieldsLocators();

    it('Should check trial offer errors', function() {
        let invalidCreditCard = 42424;
        let submit = fieldsLocators.submitDiscount;
        let errorMessage = fieldsLocators.errorMessage;
        createCompany.signup();
        browser.wait(EC.visibilityOf(fieldsLocators.ccNameField), 2000);
        fieldsLocators.getDiscount.click();
        browser.wait(EC.visibilityOf(errorMessage), 2000);
        expect(errorMessage.getText()).toBe('Please enter your card details.');
        fieldsLocators.ccNameField.sendKeys(createCompany.yourName);
        submit.click();
        browser.wait(EC.visibilityOf(errorMessage), 2000);
        expect(errorMessage.getText()).toBe('Card number is required');
        fieldsLocators.ccNumberField.sendKeys(invalidCreditCard);
        submit.click();
        browser.wait(EC.visibilityOf(errorMessage), 2000);
        expect(errorMessage.getText()).toBe('Please enter a valid card number');
        fieldsLocators.ccNumberField.clear();
        fieldsLocators.ccNumberField.sendKeys(createCompany.creditCard);
        submit.click();
        browser.wait(EC.visibilityOf(errorMessage), 2000);
        expect(errorMessage.getText()).toBe('Expiry month/year is required');
        fieldsLocators.ccExpirationField.sendKeys(1111);
        submit.click();
        expect(errorMessage.getText()).toBe('CVC number is required');
        fieldsLocators.ccCvcField.sendKeys(123);
        submit.click();
        browser.wait(EC.visibilityOf(errorMessage), 2000);
        expect(errorMessage.getText()).toBe('Please enter a valid expiration date.');
        fieldsLocators.ccExpirationField.clear();
        fieldsLocators.ccExpirationField.sendKeys(345);  
        submit.click();
        createCompany.skipSteps();
        browser.wait(EC.visibilityOf(fieldsLocators.selectDropdown), 2000);
        expect(fieldsLocators.selectDropdown.isDisplayed()).toBe(true);
    });
});
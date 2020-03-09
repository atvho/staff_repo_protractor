"use strict";

const FieldsLocators = require('./Fields_locators_page');
const EC = protractor.ExpectedConditions;

const CreateCompany = function() {
    let fieldsLocators = new FieldsLocators();

    let ran = Math.floor(Math.random()*100000);
    this.creditCard = 5555555555554444;
    this.companyName = 'Tractor Co ' + ran;
    this.yourName = 'Tractor Name ' + ran;
    this.email = 'alexey.dubchak+auto' + ran + '@staff.dev';
    this.emailSilent = 'alexey.dubchak+autosilent' + ran + '@staff.dev';
    this.pass = '123456';
    
    this.signup = function() {
        fieldsLocators.companyField.sendKeys(this.companyName);
        fieldsLocators.nameField.sendKeys(this.yourName);
        fieldsLocators.emailField.sendKeys(this.email);
        fieldsLocators.passwordField.sendKeys(this.pass);
        fieldsLocators.submit.click();
    };

    this.signupSilent = function() {
        fieldsLocators.companyField.sendKeys(this.companyName);
        fieldsLocators.nameField.sendKeys(this.yourName);
        fieldsLocators.emailField.sendKeys(this.emailSilent);
        fieldsLocators.passwordField.sendKeys(this.pass);
        fieldsLocators.submit.click();
    };

    this.skipSteps = function() {
        let visibilityOfNext = EC.visibilityOf(fieldsLocators.nextButton);
        let visibilityOfSkip = EC.visibilityOf(fieldsLocators.skipButton);
        browser.wait(visibilityOfNext, 1000);
        fieldsLocators.nextButton.click();
        browser.wait(visibilityOfNext, 1000);
        fieldsLocators.nextButton.click();
        browser.wait(visibilityOfSkip, 2000);
        fieldsLocators.skipButton.click();
    };

    this.skipStepsSilent = function() {
        let visibilityOfNext = EC.visibilityOf(fieldsLocators.nextButton);
        browser.wait(visibilityOfNext, 1000);
        fieldsLocators.nextButton.click();
        browser.wait(visibilityOfNext, 1000);
        fieldsLocators.nextButton.click();
    };

    this.inviteDropdown = function() {
        let visibilityOfDropdown = EC.visibilityOf(fieldsLocators.selectDropdown);
        let visibilityOfItems = EC.visibilityOf(fieldsLocators.dropdownItem);
        browser.wait(visibilityOfDropdown, 1000);
        fieldsLocators.selectDropdown.click();
        browser.wait(visibilityOfItems, 1000);
        fieldsLocators.dropdownItem.click();
        browser.sleep(1000);
        fieldsLocators.submitDiscount.click();
    };
};

module.exports = CreateCompany;
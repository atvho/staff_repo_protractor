"use strict";

const Credentials = function() {
    this.email = ('alexey.dubchak+intertest@staff.dev');
    this.emailSilent = ('alexey.dubchak+qq17@staff.dev');
    this.password = 123456;
    this.signinButton = $('a[href="https://app.staff.com/#/signin"]');
    this.emailField = $('input[type="email"]');
    this.passwordField = $('input[type="password"]');
    this.submit = $('button[type="submit"]');
        
        
    this.login = function() {
        this.signinButton.click();
        this.emailField.sendKeys(this.email);
        this.passwordField.sendKeys(this.password);
        this.submit.click();
    };

    this.loginSilent = function() {
        this.signinButton.click();
        this.emailField.sendKeys(this.emailSilent);
        this.passwordField.sendKeys(this.password);
        this.submit.click();
    };
};

module.exports = Credentials;
"use strict";

const FieldsLocators = function() {
    //main page
    this.companyField = $('input[data-ng-model="vm.user.companyName"]');
    this.nameField = $('input[data-ng-model="vm.user.name"]');
    this.emailField = $('input[data-ng-model="vm.user.email"]');
    this.passwordField = $('input[data-ng-model="vm.user.password"]');
    this.submit = $('button.staff-button');

    // Select tracking mode radiobuttons
    this.interactiveRadio = $('md-radio-button[value="interactive"]');
    this.silentRadio = $('md-radio-button[value="silent"]');
    this.remoteRadio = $('md-radio-button[value="remote"]'); // employes own them
    this.officeRadio = $('md-radio-button[value="office"]'); // company own them

    //pop-ups buttons
    this.nextButton = $('.contained-button');
    this.skipButton = $('.skip-button');
    this.toggleTaskFeature = $('md-switch[ng-model="vm.form.tasksEnable"]');

    //discount page
    this.discountPopup = $('div.discount-popup-body')
    this.ccNameField = $('input[ng-model="vm.name"]');
    this.ccNumberField = $('input[ng-model="vm.number"]');
    this.ccExpirationField = $('input[ng-model="vm.expiry"]');
    this.ccCvcField = $('input[ng-model="vm.cvc"]');
    this.getDiscount = $('button.get-discount-button');
    this.noDiscount = $('button.no-discount-button');
    this.errorMessage = $('span.discount-popup-error-down');
    
    // invite members trial
    this.selectDropdown = $('select#number-of-invites');
    this.dropdownItem = $('option[value="0"]');
    this.submitDiscount = $('button.discount-buttons');
    
};

module.exports = FieldsLocators;
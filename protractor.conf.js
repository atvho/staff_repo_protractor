"use strict";

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const AllureReporter = require('jasmine-allure-reporter');

exports.config = {
  baseUrl: 'https://staff.com',  
  specs: [
  // './signup-specs/signup_default_spec.js',
  './signin-specs/signin_ec_spec.js'
  ],

  // browserstackUser: 'rob15',
  // browserstackKey: 'FJsjeGyxWLxvgRi571qn',
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // multiCapabilities: [{
  //   browserName: 'firefox',
  //   enableVNC: true,
  //   enableVideo: false
  // }, {
  //   browserName: 'opera',
  //   enableVNC: true,
  //   enableVideo: false
  // }, {
  //   browserName: 'chrome',
  //   enableVNC: true,
  //   enableVideo: false
  // }],
  capabilities: {
    browserName: 'chrome',
    },
 
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer.from(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

    beforeEach(function () {
      // browser.ignoreSynchronization = true;
      // browser.manage().window().maximize();
      browser.get('/')
    });

    afterEach(function () {
      browser.manage().deleteAllCookies();
      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
      .then(undefined,
      function (err) {
        throw err
      });
    });
  },
};
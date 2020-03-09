"use strict";

const MenuButtons = function() {
    this.dashboard = $('.hide-sm:nth-child(3) > .md-button');
    this.reports = $('.hide-sm:nth-child(4) > .md-button');
    this.screencasts = $$('a.uppercase.md-button');
    this.editTime = $$('a.uppercase.md-button');
    this.settings = $('.hide-sm:nth-child(7) > .md-button');
    this.invite = $$('a.uppercase.md-button');
    this.download = $$('a.uppercase.md-button');   
};

module.exports = MenuButtons;
define([
    'jquery',
    'Spinner'
], function ($, Spinner) {
    'use strict';
    var view = {
        loginRoot: '.login-box',
        loginTrigger: '.login-box__button',
        init: function () {
            var ui = this;
            ui.$loginRoot = $(ui.loginRoot);
            ui.$loginTrigger = ui.$loginRoot.find(ui.loginTrigger);
            ui.spinner = new Spinner();
            delete ui.init;
            return ui;
        }
    };
    return view;
});
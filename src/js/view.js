define([
    'jquery',
    'Spinner'
], function ($, Spinner) {
    'use strict';
    var view = {
        loginRoot: '.login-box',
        loginTrigger: '.login-box__button',
        _loginTriggerActive: 'login-box__button--active',
        init: function () {
            var ui = this;
            ui.$loginRoot = $(ui.loginRoot);
            ui.$loginTrigger = ui.$loginRoot.find(ui.loginTrigger);
            ui.spinner = new Spinner();
            ui.$loginTrigger.setLoading = function(isActive){
                if(!isActive){
                    ui.spinner.stop();
                    return ui.$loginTrigger.removeClass(ui._loginTriggerActive);
                }
                ui.$loginRoot.append(ui.spinner.spin().el);
                return ui.$loginTrigger.addClass(ui._loginTriggerActive);
            };
            delete ui.init;
            return ui;
        }
    };
    return view;
});
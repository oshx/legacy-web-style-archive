define(function () {
    'use strict';
    var ui;
    var _CONSTANTS = {
        FADE_SPEED: 300,
        FADE_ON: .5,
        FADE_OFF: 1,
        LOGIN_DELAY: 1500
    };
    function init(view) {
        ui = view;
        return {
            bindEvent: bindEvent
        }
    }
    function bindEvent() {
        console.log(ui);
        ui.$loginTrigger.on('click', _loginEventHandler);
    }
    function _loginEventHandler(evt) {
        evt.preventDefault();
        _setLoginLoaderActive(true);
        _setLoginTriggerFade(true);
        return setTimeout(_loginSuccess, _CONSTANTS.LOGIN_DELAY);
    }
    function _setLoginLoaderActive(isActive) {
        if (!isActive) {
            return ui.spinner.stop();
        }
        return ui.$loginRoot.append(ui.spinner.spin().el);
    }
    function _setLoginTriggerFade(isFade) {
        return ui.$loginTrigger.stop().fadeTo(_CONSTANTS.FADE_SPEED, ((!isFade) ? _CONSTANTS.FADE_OFF : _CONSTANTS.FADE_ON));
    }
    function _loginSuccess(){
        _setLoginLoaderActive(false);
        _setLoginTriggerFade(false);
    }
    return {
        init: init
    };
});
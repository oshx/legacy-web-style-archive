define([
    'jquery',
    'view',
    'loginHandler'
], function($, view, loginHandler){
    'use strict';
    function init(){
        var ui = view.init();
        loginHandler
            .init(ui)
            .bindEvent();
    }
    return init;
});
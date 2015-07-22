(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate', 'ngSanitize', 'ngCookies',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus'
        ])
        .constant('apiUrl', 'http://siesta-001-site1.smarterasp.net/api/');
})();

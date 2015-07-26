(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('headerService', headerService);

    headerService.$inject = ['$http', '$cookies'];

    function headerService($http, $cookies) {
        return {
            init : function(token) {
                $http.defaults.headers.common['X-Access-Token'] = token || $cookies.token;
            }
        };
    }
})();


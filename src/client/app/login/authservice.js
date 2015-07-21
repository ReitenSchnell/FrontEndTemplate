(function () {
    'use strict';

    angular
        .module('app.login')
        .factory('authservice', authservice);

    authservice.$inject = ['$q', '$http', 'apiUrl'];
    /* @ngInject */
    function authservice($q, $http, apiUrl) {
        var service = {
            signin : signin,
            signup : signup
        };

        var dataUrl = apiUrl;

        return service;

        function signin(credentials) {
            var data = $http.post(dataUrl + 'signin', credentials);
            return $q.when(data);
        }

        function signup(registrationInfo) {
            var data = $http.post(dataUrl + 'signup', registrationInfo);
            return $q.when(data);
        }
    }
})();

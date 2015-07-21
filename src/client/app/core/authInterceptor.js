(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$location'];

    function authInterceptor($q, $location) {
        return {
            response: function(response) {
                if (response.status === 401) {
                    console.log('Response 401');
                }
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                if (rejection.status === 401) {
                    console.log('Response Error 401', rejection);
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        };
    }
})();

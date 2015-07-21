(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger', 'apiUrl'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger, apiUrl) {
        var service = {
            getMessageCount : getMessageCount
        };

        return service;

        function getMessageCount() {
            var data = $http.get(apiUrl + 'messages');
            return $q.when(data);
        }
    }
})();

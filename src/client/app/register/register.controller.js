(function () {
    'use strict';

    angular
        .module('app.register')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$q', '$location', '$cookieStore', 'authservice', 'headerService', '$rootScope'];
    function RegistrationController($q, $location, $cookieStore, authservice, headerService, $rootScope) {
        var vm = this;
        vm.signup = signup;
        vm.error = null;

        var success = function (data) {
            var token = data[0].data.token;
            if (token) {
                headerService.init(token);
                $cookieStore.put('token', token);
                $location.path('/');
                $rootScope.$broadcast('userLoggedIn');
                vm.error = null;
            }
        };

        var error = function (data)
        {
            vm.error = data.statusText;
        };

        function signup() {
            $q.all([authservice.signup(vm.registrationInfo)]).then(success, error);
        }
    }
})();

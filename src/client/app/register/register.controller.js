(function () {
    'use strict';

    angular
        .module('app.register')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$q', '$location', '$cookieStore', 'authservice', 'headerService'];
    function RegistrationController($q, $location, $cookieStore, authservice, headerService) {
        var vm = this;
        vm.signup = signup;

        var success = function (data) {
            var token = data[0].data.token;
            if (token) {
                headerService.init(token);
                $cookieStore.put('token', token);
                $location.path('/');
            }
        };

        function signup() {
            $q.all([authservice.signup(vm.registrationInfo)]).then(success);
        }
    }
})();

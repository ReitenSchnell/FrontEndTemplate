(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$q', '$location', '$cookieStore', 'authservice', 'headerService'];
    function LoginController($q, $location, $cookieStore, authservice, headerService) {
        var vm = this;
        vm.signin = signin;
        vm.signup = signup;

        var success = function (data) {
            var token = data[0].data.token;
            if (token) {
                headerService.init(token);
                $cookieStore.put('token', token);
                $location.path('/');
            }
        };
        var error = function () {

        };

        function signin() {
            $q.all([authservice.signin(vm.credentials)]).then(success);
        }

        function signup() {
//            $q.all([authservice.signin(vm.credentials)]).then(success);
        }
    }
})();

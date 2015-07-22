(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$q', '$location', '$cookieStore', 'authservice', 'headerService'];
    function LoginController($q, $location, $cookieStore, authservice, headerService) {
        var vm = this;
        vm.signin = signin;

        var success = function (data) {
            var token = data[0].data.token;
            if (token) {
                headerService.init(token);
                $cookieStore.put('token', token);
                $location.path('/');
            }
        };

        function signin() {
            $q.all([authservice.signin(vm.credentials)]).then(success);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$q', '$location', '$cookieStore', 'authservice', 'headerService', '$rootScope'];
    function LoginController($q, $location, $cookieStore, authservice, headerService, $rootScope) {
        var vm = this;
        vm.signin = signin;
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

        function signin() {
            $q.all([authservice.signin(vm.credentials)]).then(success, error);
        }
    }
})();

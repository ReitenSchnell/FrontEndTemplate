(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav () {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        TopNavController.$inject = ['$rootScope', '$cookieStore', '$location', 'headerService', '$scope'];
        function TopNavController($rootScope, $cookieStore, $location, headerService, $scope) {
            var vm = this;
            vm.signout = signout;
            vm.isLoggedIn = false;

            function signout() {
                headerService.init();
                $cookieStore.remove('token');
                $location.path('/login');
                vm.isLoggedIn = false;
            }

            $scope.$on('userLoggedIn', function (event, arg) {
                vm.isLoggedIn = true;
            });
        }

        return directive;
    }
})();

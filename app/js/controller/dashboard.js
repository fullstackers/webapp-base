(function(ng) {
    "use strict";

    /**
     * @ngdoc controller
     * @name app.controller:DashboardController
     * @description
     * Dashboard Controller manages the interactions on the dashboard
     */
    ng
        .module('app')
        .controller('DashboardController', DashboardController)
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('dashboard', {
                    controller: 'DashboardController',
                    url: '/dashboard',
                    templateUrl: '../app/template/dashboard.html'
                });
        }]);

    /* @ngInject */
    function DashboardController() {

    }

})(angular);

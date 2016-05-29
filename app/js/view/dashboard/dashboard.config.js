(function(ng) {
    "use strict";

    ng
        .module('app')
        .config(DashboardConfig);

    /* @ngInject */
    function DashboardConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                controller: 'DashboardController',
                url: '/dashboard',
                templateUrl: '../app/js/view/dashboard/dashboard.html'
            });
    }
})(angular);

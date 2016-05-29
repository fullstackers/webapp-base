(function(ng) {
    "use strict";

    ng
        .module('app')
        .config(AppConfig);

    /* @ngInject */
    function AppConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $locationProvider.html5Mode(true).hashPrefix('!');
    }

})(angular);

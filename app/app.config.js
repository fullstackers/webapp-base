(function() {
    "use strict";

    angular
        .module("app")
        .config(AppConfig);

    /* @ngInject */
    function AppConfig($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/dashboard");
        $locationProvider.html5Mode(true).hashPrefix("!");
    }

}());

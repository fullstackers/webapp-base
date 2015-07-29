(function(ng) {
    "use strict";

    ng
        .module('app', ['ui.router', 'templates-generated'])
        .config(['$urlRouterProvider', function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        }]);
})(angular);

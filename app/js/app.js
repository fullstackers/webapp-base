(function(ng) {
    "use strict";

    ng
        .module('app', ['ui.router', 'templates-generated'])
        .run(['$rootScope', '$window', function($rootScope, $window) {
        
            // Scroll to the top of the page each time a new page loads
            $rootScope.$on('$stateChangeSuccess', function() {
                $window.scrollTo(0, 0);
            });
        }])
        .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/dashboard');
            $locationProvider.html5Mode(true).hashPrefix('!');
        }]);

})(angular);

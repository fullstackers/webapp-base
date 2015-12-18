(function(ng) {
    "use strict";

    ng
        .module('app', ['ui.router', 'templates-generated'])
        .run(['$rootScope', '$document', function($rootScope, $document) {
        
            // Scroll to the top of the page each time a new page loads
            $rootScope.$on('$stateChangeSuccess', function() {
                $document.body.scrollTop = $document.documentElement.scrollTop = 0;
            });
        }])
        .config(['$urlRouterProvider', function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');
        }]);
})(angular);

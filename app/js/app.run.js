(function(ng) {
    "use strict";

    ng
        .module('app')
        .run(AppRun);

    /* @ngInject */
    function AppRun($rootScope, $window) {
        // Scroll to the top of the page each time a new page loads
        $rootScope.$on('$stateChangeSuccess', function() {
            $window.scrollTo(0, 0);
        });
    }
})(angular);
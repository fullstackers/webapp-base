(function(ng) {
    "use strict";
    
    /**
     * @ngdoc controller
     * @name app.controller:HeaderController
     * @description
     * Header Controller manages all of the interactions for the Navbar at the top of the page
     *
     * @requires $scope
     * @requires $rootScope
     */
    ng
        .module('app')
        .controller('HeaderController', HeaderController);

    /* @ngInject */
    function HeaderController($scope, $rootScope) {
        $rootScope.$on('$stateChangeStart', function() {
            $scope.showMenu = false;
        });
    }

})(angular);

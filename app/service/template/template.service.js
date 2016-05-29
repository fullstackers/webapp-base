(function(ng) {
    "use strict";

    /**
     * @ngdoc service
     * @name app.service:TestService
     * @description
     * The `TestService` represents a template for creating services within webapp-base
     */
    ng
        .module('app')
        .factory('TestService', TestService);

    /* @ngInject */
    function TestService() {
        var title = "Test";

        // Return the service object at the top of the service. Then,
        // define the functions for the service below the return statement
        return {
            getTitle: _getTitle
        };

        /**
         * @ngdoc method
         * @name getTitle
         * @methodOf app.service:TestService
         * @description
         * Get the title stored in the `TestService`
         */
        function _getTitle() {
            return title;
        }        
    }

})(angular);
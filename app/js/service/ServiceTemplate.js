(function(ng) {
    "use strict";
    
    ng
        .module('app')
        .factory('TestService', [function() {
            var title = "Test";

            function _getTitle() {
                return title;
            }

            return {
                getTitle: _getTitle
            };
        }]);
})(angular);

(function(ng) {
    "use strict";

    ng
        .module('app')
        .controller('TestController', ['$scope', function($scope) {

            $scope.setTitle = function() {
                $scope.title = 'Test';
            };

        }])
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('test', {
                    controller: 'TestController',
                    url: '/',
                    templateUrl: '../app/template/test.html'            
                });
        }]);
})(angular);

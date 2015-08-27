(function(ng) {
    "use strict";

    ng
        .module('app')
        .controller('TestController', ['$scope', 'TestService', function($scope, TestService) {

            $scope.setTitle = function() {
                $scope.title = TestService.getTitle();
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

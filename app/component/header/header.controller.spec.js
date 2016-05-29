describe('HeaderController', function() {
    "use strict";

    var controller, $scope, $rootScope;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();

        controller = _$controller_('HeaderController', {
            $scope: $scope,
            $rootScope: $rootScope
        });
    }));

    it('should close the menu when navigating to another page', function() {
        $scope.showMenu = true;

        $rootScope.$emit('$stateChangeStart');
        
        expect($scope.showMenu).toBe(false);
    });
});
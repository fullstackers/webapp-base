describe('DashboardController', function() {
    "use strict";

    var controller, $scope;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $scope = _$rootScope_.$new();

        controller = _$controller_('DashboardController', {
            $scope: $scope
        });
    }));

    it('should...', function() {

    });
});

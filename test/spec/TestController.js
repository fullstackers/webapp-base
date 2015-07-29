describe("TestController", function() {
    "use strict";
    var controller, scope;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {

        scope = _$rootScope_.$new();

        controller = _$controller_("TestController", {
            $scope: scope
        });
    }));

    it('should set the title', function() {
        scope.setTitle();

        expect(scope.title).toBe('Test');
    });
});

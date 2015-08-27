describe('TestController', function() {
    "use strict";
    var controller, scope, testService;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        testService = jasmine.createSpyObj('TestService', ['getTitle']);

        scope = _$rootScope_.$new();

        controller = _$controller_('TestController', {
            $scope: scope,
            TestService: testService
        });
    }));

    it('should set the title', function() {
        testService.getTitle.and.returnValue('Test');

        scope.setTitle();

        expect(scope.title).toBe('Test');
        expect(testService.getTitle).toHaveBeenCalled();
    });
});

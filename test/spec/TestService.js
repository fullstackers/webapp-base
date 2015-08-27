describe('TestService', function() {
    "use strict";

    var service, $injector;

    beforeEach(module('app'));

    beforeEach(inject(function(_$injector_) {
        $injector = _$injector_;
        service = $injector.get('TestService');
    }));

    it('should provide the title', function() {
        expect(service.getTitle()).toBe('Test');
    });
});

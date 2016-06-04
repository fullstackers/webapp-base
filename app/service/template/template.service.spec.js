describe("TestService", function() {
    "use strict";

    var service;

    beforeEach(module("app"));

    beforeEach(inject(function($injector) {
        service = $injector.get("TestService");
    }));

    it("should provide the title", function() {
        expect(service.getTitle()).toBe("Test");
    });
});

describe("Dashboard Controller", function() {
    "use strict";

    var controller;

    beforeEach(module("app"));
    beforeEach(inject(function($controller) {
        controller = $controller("DashboardController", {});
    }));

    it("should create the controller", function() {
        expect(controller).toBeDefined();
    });
});

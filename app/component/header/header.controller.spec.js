describe("HeaderController", function() {
    "use strict";

    var controller, $rootScope;

    beforeEach(module("app"));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $rootScope = _$rootScope_;

        controller = _$controller_("HeaderController", {
            $rootScope: $rootScope
        });
    }));

    xit("should close the menu when navigating to another page", function() {
        controller.showMenu = true;

        $rootScope.$emit("$stateChangeStart");
        
        expect(controller.showMenu).toBe(false);
    });
});
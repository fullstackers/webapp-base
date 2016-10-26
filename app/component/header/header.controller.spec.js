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

  it("should create the controller", function() {
    expect(controller).toBeDefined();
  });
});

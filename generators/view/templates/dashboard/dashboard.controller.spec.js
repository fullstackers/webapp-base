describe("<%= viewNameCapital %> Controller", function() {
  "use strict";

  var controller;

  beforeEach(module("app"));
  beforeEach(inject(function($controller) {
    controller = $controller("<%= viewNameCapital %>Controller", {});
  }));

  it("should create the controller", function() {
    expect(controller).toBeDefined();
  });
});

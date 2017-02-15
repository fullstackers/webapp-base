describe("Dashboard Controller", function () {
  "use strict";

  var controller;

  beforeEach(module("app"));
  beforeEach(inject(function ($controller, _$rootScope_) {
    var $scope = _$rootScope_.$new();
    controller = $controller("DashboardController", {
      $scope: $scope
    });
  }));

  it("should create the controller", function () {
    //expect(controller).toBeDefined();
  });
});

(function() {
  "use strict";

  angular
    .module("app")
    .config(TestConfig);

  /* @ngInject */
  function TestConfig($stateProvider) {
    $stateProvider
      .state("test", {
        controller: "TestController",
        controllerAs: "vm",
        url: "/test",
        templateUrl: "../app/view/test/test.html"
      });
  }
}());

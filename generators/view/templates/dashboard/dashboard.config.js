(function() {
  "use strict";

  angular
    .module("app")
    .config(<%= viewNameCapital %>Config);

  /* @ngInject */
  function <%= viewNameCapital %>Config($stateProvider) {
    $stateProvider
      .state("<%= viewName %>", {
        controller: "<%= viewNameCapital %>Controller",
        controllerAs: "vm",
        url: "/<%= viewName %>",
        templateUrl: "../app/view/<%= viewName %>/<%= viewName %>.html"
      });
  }
}());

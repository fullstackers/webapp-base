(function() {
  "use strict";

  angular
    .module("app")
    .config(DashboardConfig);

  /* @ngInject */
  function DashboardConfig($stateProvider) {
    $stateProvider
      .state("dashboard", {
        controller: "DashboardController",
        controllerAs: "vm",
        url: "/dashboard",
        templateUrl: "../app/view/dashboard/dashboard.html"
      });
  }
}());

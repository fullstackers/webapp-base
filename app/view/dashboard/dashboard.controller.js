(function () {
  "use strict";

  /**
   * @ngdoc controller
   * @name app.controller:DashboardController
   * @description
   * Dashboard Controller manages the interactions on the dashboard
   */
  angular
    .module("app")
    .controller("DashboardController", DashboardController);

  /* @ngInject */
  function DashboardController($scope) {

    var vm = this;
    vm.survey = [];
    var Survey = Parse.Object.extend("Survey");

    var query = new Parse.Query(Survey);

    query.find({
      success: function (results) {
        // The object was retrieved successfully.
        var list = results;
        vm.survey = [];
        angular.forEach(list, function (data) {
          vm.survey.push(data);
        });
        $scope.$digest();
      },
      error: function (error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
      }
    });


  }

}());
(function () {
  "use strict";

  angular
    .module("app")
    .run(AppRun);

  /* @ngInject */
  function AppRun() {
    Parse.initialize("APPLICATION_ID");

    Parse.serverURL = "http://158.69.200.50:4001/parse";
  }

}());

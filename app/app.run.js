(function () {
  "use strict";

  angular
    .module("app")
    .run(AppRun);

  /* @ngInject */
  function AppRun() {
    Parse.initialize("APPLICATION_ID");

    Parse.serverURL = "http://localhost:1337/parse";
  }

}());

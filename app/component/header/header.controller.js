(function () {
	"use strict";

	/**
	 * @ngdoc controller
	 * @name app.controller:HeaderController
	 * @description
	 * Header Controller manages all of the interactions for the Navbar at the top of the page
	 *
	 * @requires $scope
	 * @requires $rootScope
	 */
	angular
		.module("app")
		.controller("HeaderController", HeaderController);

	/* @ngInject */
	function HeaderController() {
	}

}());
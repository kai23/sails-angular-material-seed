(function() {
	'use strict';

	angular
		.module('app.components.index')
		.controller('IndexController', index)

	index.$inject = ["$state", "$mdToast"];

	function index($state) {
		var vm = this;

		vm.content = "Hello content !";
	}
})();
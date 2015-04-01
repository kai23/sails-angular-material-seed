(function() {
	'use strict';

	angular
		.module('payname_lol')
		.config(appRoutes)

	function appRoutes($stateProvider, $urlRouterProvider) {

		// L'ensemble des routes
		$stateProvider


			.state('home', {
			url: '',
			abstract: true,
			controller: "LayoutController",
			templateUrl: "app/shared/layout/layout.html"
		})

		.state("home.index", {
			url: "/index",
			views: {
				"content": {
					templateUrl: "app/components/index/index.html",
					controller: "IndexController"
				}
			}
		})

		$urlRouterProvider.otherwise('/index');
	}

})();
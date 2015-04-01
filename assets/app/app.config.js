(function() {
	'use strict';

	angular
		.module('payname_lol')
		.config(appConfig)

	function appConfig($mdThemingProvider) {
		$mdThemingProvider
			.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');
	}

})();
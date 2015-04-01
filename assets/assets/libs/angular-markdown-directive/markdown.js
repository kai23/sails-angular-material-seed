/*
 * angular-markdown-directive v0.3.1
 * (c) 2013-2014 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
provider('markdownConverter', function() {
	var opts = {};
	return {
		config: function(newOpts) {
			opts = newOpts;
		},
		$get: function() {
			return new Showdown.converter(opts);
		}
	};
}).
directive('btfMarkdown', ['$sanitize', 'markdownConverter', function($sanitize, markdownConverter) {
	return {
		restrict: 'AE',
		link: function(scope, element, attrs) {
			var element_deux = element.html().replace(/&lt;/g, '<').replace(/&gt;/g, '>')
			var html = markdownConverter.makeHtml(element_deux);
			element.html(html);
		}
	};
}]);
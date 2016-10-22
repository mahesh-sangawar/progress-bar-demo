'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.wrapper',
	'myApp.progressbar'
]).
config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider.otherwise({
		redirectTo: '/progressbar'
	});
}]);
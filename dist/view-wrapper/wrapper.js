'use strict';

angular.module('myApp.wrapper', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/progressbar', {
		templateUrl: 'view-wrapper/wrapper.html',
		controller: 'WrapperCtrl'
	});
}])

.controller('WrapperCtrl', ['$scope', function ($scope) {

	$scope.selectedProgressBar = "1";

	$scope.setProgressBar = function (value) {
		$scope.selectedProgressBar = value;
	};

	$scope.progressValue1 = 10;
	$scope.progressValue2 = 30;
	$scope.progressValue3 = 50;

	$scope.btnClicked = function(value) {
		if($scope.selectedProgressBar == 1) {
			$scope.progressValue1 += value;
		} else if($scope.selectedProgressBar == 2) {
			$scope.progressValue2 += value;
		} else if($scope.selectedProgressBar == 3) {
			$scope.progressValue3 += value;
		}
	};

}]);
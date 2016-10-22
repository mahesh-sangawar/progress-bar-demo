'use strict';

angular.module('myApp.progressbar', [])

.directive('progressBar', function () {
	var directive = {};
	directive.restrict = 'E';
	directive.templateUrl = "components/progress-bar/progress-bar-view.html";
	directive.scope = {
		progress: "=progress"
	}

	directive.link = function ($scope, element, attributes) {
		console.log("progress : " + $scope.progress);
		if ($scope.progress > 100) {
			$scope.maxLimitExceed = true;
		} else {
			$scope.maxLimitExceed = false;
		}


		$scope.$watch('progress', function (newVal, oldVal) {
			if(newVal <= 0) {
				$scope.progress = 0;
			}
			if (newVal > 100) {
				$scope.maxLimitExceed = true;
			} else {
				$scope.maxLimitExceed = false;
			}

		});
	}

	return directive;

});
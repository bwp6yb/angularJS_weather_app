(function() {

	var homeController = function($scope, $resource, dataService, cityService) {

		$scope.city = cityService.city;

		$scope.$watch('city', function() {
			cityService.city = $scope.city;
		});

		// This variable 'gets' the call data
			// include object to store parameters (city, count)
		$scope.weatherResult = dataService.get({ q: $scope.city, cnt: 10 });

		$scope.convertToFahrenheit = function(Kelvin) {
			return Math.round((1.8 * (Kelvin - 273)) + 32);
		};

		$scope.convertToDate = function(dt) {
			return new Date(dt * 1000);
		}

	};
	// $inject helps prevent minification issues
	homeController.$inject = ['$scope', '$resource', 'dataService', 'cityService'];
	
	angular.module('weatherApp')
		.controller('homeController', homeController);

}());
(function() {

	var tableController = function($scope, $resource, dataService, cityService) {

		$scope.newyork = dataService.get({ q: "New York", cnt: 1 })
		$scope.losangeles = dataService.get({ q: "Los Angeles", cnt: 1 })
		$scope.chicago = dataService.get({ q: "Chicago", cnt: 1 })
		$scope.houston = dataService.get({ q: "Houston", cnt: 1 })
		$scope.philadelphia = dataService.get({ q: "Philadelphia", cnt: 1 })
		$scope.phoenix = dataService.get({ q: "Phoenix", cnt: 1 })
		$scope.sanantonio = dataService.get({ q: "San Antonio", cnt: 1 })
		$scope.sandiego = dataService.get({ q: "San Diego", cnt: 1 })
		$scope.dallas = dataService.get({ q: "Dallas", cnt: 1 })
		$scope.sanjose = dataService.get({ q: "San Jose", cnt: 1 })

		$scope.convertToFahrenheit = function(Kelvin) {
			return Math.round((1.8 * (Kelvin - 273)) + 32);
		};

		$scope.convertToDate = function(dt) {
			return new Date(dt * 1000);
		}

		
	};
	// $inject helps prevent minification issues
	
	tableController.$inject = ['$scope', '$resource', 'dataService', 'cityService'];
	angular.module('weatherApp')
		.controller('tableController', tableController);

}());
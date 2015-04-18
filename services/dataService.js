(function () {

	// use $resource to call openweathermap's API and store data in variable
	var dataService = function ($resource) {
		return $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	};

	dataService.$inject = ['$resource'];

	angular.module('weatherApp')
		.service('dataService', dataService);

}());
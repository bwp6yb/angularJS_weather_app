(function () {

	// By default, get data for New York, NY
	var cityService = function () {
		this.city = "New York, NY";
	};

	angular.module('weatherApp')
		.service('cityService', cityService);

}());

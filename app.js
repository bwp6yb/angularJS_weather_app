(function() {

	// Module
	var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

	// Routes
	weatherApp.config(function ($routeProvider) {

		$routeProvider

			.when('/', {
				templateUrl: 'pages/home.html',
				controller: 'homeController'
			})

			.when('/table', {
				templateUrl: 'pages/table.html',
				controller: 'tableController'
			})

			.when('/about', {
				templateUrl: 'pages/about.html'
			})

			.otherwise({ redirectTo: '/' });

	});

}());
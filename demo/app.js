/* global angular */

function Config($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({ enabled: true })

	$routeProvider
		
		.when("/panes/:area", {
			templateUrl: "/paneTest/paneTest.html",
			controller: 'paneTestController',
			controllerAs: 'vm'
		})
        .when("/panes", {
			redirectTo: '/panes/twoPane'
		})
		.when("/pages/fullscreen", {
			templateUrl: "/pageTest/pageTest.html",
			controller: 'pageTestController',
			controllerAs: 'vm'
		})
		.when("/pages", {
			redirectTo: '/pages/fullscreen'
		})
		.otherwise({
			redirectTo: '/panes'
		});
}

Run.$inject = ['$rootScope'];

function Run($rootScope) {
	
}

angular.module("demo", ['ngRoute', 'ngLayoutPage'])
	.config(Config)
	.run(Run);
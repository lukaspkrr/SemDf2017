angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		/*$httpProvider.interceptors.push('tokenInterceptor');*/
    
        $locationProvider.html5Mode(true);
		
		$routeProvider.when('/inicio', {
			templateUrl: 'partials/principal.html'
		});
    
            $routeProvider.when('/map', {
			templateUrl: 'partials/pag-map.html'
		});
    
            $routeProvider.when('/help', {
            templateUrl: 'partials/help.html'
        });
    
        $routeProvider.when('/formulario/:id', {
            templateUrl: 'partials/formulario.html'
        });
    
		$routeProvider.otherwise({redirectTo: '/inicio'});
	});
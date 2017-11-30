angular.module('semdf', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {

        /*$httpProvider.interceptors.push('tokenInterceptor');*/

        $locationProvider.html5Mode(true);

        $routeProvider.when('/inicio', {
            templateUrl: 'partials/principal.html'
        });

        $routeProvider.when('/map', {
            templateUrl: 'partials/pag-map.html',
            controller: 'matriculaController'
        });
        $routeProvider.when('/acompanhamento', {
            templateUrl: 'partials/acompanhamento.html'
        });
    
        $routeProvider.when('/cadastro', {
            templateUrl: 'partials/cadastro.html'
        });

        $routeProvider.when('/help', {
            templateUrl: 'partials/help.html'
        });

        $routeProvider.when('/formulario/:id', {
            templateUrl: 'partials/formulario.html',
            controller:"formularioController"
        });

        $routeProvider.otherwise({
            redirectTo: '/inicio'
        });
    });
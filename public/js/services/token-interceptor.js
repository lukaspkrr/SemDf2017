angular.module('semdf')
    .factory('tokenInterceptor', function($q, $window, $location) {

        var interceptor = {};

        /*interceptor.request = function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                console.log('Enviando token já obtido em cada requisição');
                config.headers['x-access-token'] = $window.sessionStorage.token;
            }
            return config;
        },

        interceptor.response = function (response) {
            var token = response.headers('x-access-token');
            var idUser = response.headers('idUser');
            if (token != null) {
                $window.sessionStorage.token = token;
                $window.sessionStorage.idUser = idUser;
                console.log('Token no session storage: ', token);
            } 
            return response;
        },

        interceptor.responseError = function(rejection) {

            if (rejection != null && rejection.status === 401) {
                console.log('Removendo token da sessão')
                delete $window.sessionStorage.token;
                delete $window.sessionStorage.idUser;
                $location.path("/inicio");
            } 
            return $q.reject(rejection);
        }
*/
    return interceptor;

});
angular.module('semdf')
    .controller('formularioController', function ($scope, $routeParams, $http) {


        $http.get('v1/CidadesUf')
            .success(function (cidadeUF) {
                $scope.cidadesUF = cidadeUF
                    console.log($scope.cidadesUF);
            })
            .error(function (error) {
                console.log(error);
            });




    });

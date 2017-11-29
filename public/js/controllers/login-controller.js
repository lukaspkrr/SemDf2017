angular.module('semdf').controller('LoginController', function($scope, $http, $location) {
    
    $scope.logar = function(){
        $http.post('/autenticar', $scope.user)
        .success(function(){
            console.log('weverton viado');
            $('#login').modal('hide');
        }).error(function(){
            console.log('lucas viado');
        })
    }
    
    $scope.esqueceuSenha = function(){
        $('#login').modal('hide');
        $('#esqueceuSenha').modal('show');
    }
    
    $scope.voltarLogin = function(){
        $('#esqueceuSenha').modal('hide');
        $('#login').modal('show');
    }
    
    $scope.RecSenha = function(){
        
    }
    
    $scope.cadastrar = function(){
        $('#login').modal('hide');
        $location.path('/cadastro');
    }
    
});
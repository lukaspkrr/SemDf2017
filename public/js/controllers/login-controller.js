angular.module('semdf').controller('LoginController', function($scope, $window, $http, $location) {
    
    
    
    $scope.logar = function(){
        
         $http.post('/autenticar', $scope.user)
         .success(function(){
             console.log('sucesso')
             $('#login').modal('hide');
             delete $scope.user;
         }).error(function(){
             $location.path("/inicio");
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
    
    /*$scope.logado = function(){
        if($window.sessionStorage.token){
            console.log('logado');
            return true;
        }else{
            console.log('deslogado');
            return false;
        }
    }*/
    
    $scope.cadastrar = function(){
        $('#login').modal('hide');
        $location.path('/cadastro');
    }
    
    
    /*$scope.sair = function(){
         console.log('exclui');
         delete $window.sessionStorage.token;
         delete $window.sessionStorage.idUser;
         $location.path('/inicio');
     }*/
});
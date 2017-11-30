angular.module('semdf').controller('LoginController', function($scope, $window, $http, $location) {


   /* $scope.autenticar = function() {

        var usuario = $scope.user;

        $http.post('/autenticar', {login: usuario.login, senha: usuario.senha})
        .then(function() {
            $location.path('/');
        }, function(erro) {
            $scope.usuario = {};
            $scope.mensagem = 'Login/Senha incorretos';
        });
        $location.path('/');
    };*/
    
    $scope.logar = function(){
        console.log($scope.user)
        
       /* $http.post('/autenticar', $scope.user)
        .success(function(){
        console.log('sucesso')
            $('#login').modal('hide');
            delete $scope.user;
        }).error(function(){
            $location.path("/inicio");
        })*/
    }
    
    $scope.cadastrar = function(){
        $('#login').modal('hide');
        $location.path('/cadastro');
    }
    
    $scope.sair = function(){
        console.log('exclui');
        delete $window.sessionStorage.token;
        delete $window.sessionStorage.idUser;
        $location.path('/inicio');
    }
    
    $scope.fazerLogin = function(){
        $('#avisoLogin').modal('hide');
        $('#login').modal('show');
    }
    
    
});
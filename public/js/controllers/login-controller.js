
angular.module('semdf').controller('LoginController', function($scope, $http, $location) {


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
        $http.post('/autenticar', $scope.user)
        .success(function(){
            console.log('weverton viado');
            $('#login').modal('hide');
        }).error(function(){
            console.log('lucas viado');
        })
    }
    
    $scope.cadastrar = function(){
        $('#login').modal('hide');
        $location.path('/cadastro');
    }
    
});
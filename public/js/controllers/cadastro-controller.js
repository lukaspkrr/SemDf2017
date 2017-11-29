angular.module('semdf').controller('cadastroController', function($scope){
    
    $scope.cadastro = {};
    
    $scope.cadastrar = function(){
        console.log($scope.cadastro);
    }
    
});
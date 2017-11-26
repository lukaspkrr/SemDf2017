angular.module('alurapic').controller('formularioController', function($scope){
    
    $scope.cadastro = {};
    
    $scope.submitForm = function(){
        console.log($scope.cadastro);
    }
    
});
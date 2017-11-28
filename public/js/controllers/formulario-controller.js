angular.module('semdf').controller('formularioController', function($scope){
    
    $scope.cadastro = {};
    
    $scope.submitForm = function(){
        console.log($scope.cadastro);
    }
    
});
angular.module('semdf').controller('formularioController', function($scope){
    
    $scope.matricula = {};
    
    $scope.submitForm = function(){
        console.log($scope.matricula);
    }
    
});
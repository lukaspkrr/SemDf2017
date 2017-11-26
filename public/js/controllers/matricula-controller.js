angular.module('semdf')
	.controller('matriculaController', function($scope, $routeParams, $http) {


     $http.get('v1/escolas')
        .success(function (escola) {
            $scope.escolas = escola
         console.log($scope.escolas);
        })
        .error(function (error) {
            console.log(error);
        });
    
    $http.get('v1/grupos')
        .success(function (grupo) {
            $scope.grupos = grupo
         console.log($scope.grupos);
        })
        .error(function (error) {
            console.log(error);
        });
    
		/*if($routeParams.fotoId) {
			recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
				$scope.foto = foto; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto'
			});
		}

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {
				cadastroDeFotos.cadastrar($scope.foto)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.foto = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};*/
	});
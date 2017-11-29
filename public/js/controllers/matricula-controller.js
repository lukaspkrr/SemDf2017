angular.module('semdf')
    .controller('matriculaController', function ($scope, $routeParams, $http) {


        $http.get('v1/escolas')
            .success(function (escola) {
                $scope.escolas = escola

            })
            .error(function (error) {
                console.log(error);
            });

        $scope.getGrupos = function () {
            $http.get('v1/grupos')
                .success(function (grupo) {
                    /*  $scope.grupos = grupo*/
                    $scope.cidades = grupo


                })
                .error(function (error) {
                    console.log(error);
                });

        }
        $scope.getGrupos();

        /* $scope.cidades = [
          {nome: 'brasília'},
          {nome: 'Guará I'},
          {nome: 'Sobradinho'}
        ]*/

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

        /*Teste de dados no mapa*/
        $scope.cities = [
            {
                place: 'cef-7',
                desc: 'A country of culture and tradition!',
                lat: -15.791896,
                long: -47.864301
              },
            {
                place: 'New Delhi',
                desc: 'Capital of India...',
                lat: -15.794596,
                long: -47.862301
              },
            {
                place: 'Ruan putinha da w3 norte',
                desc: 'City of Joy...',
                lat: -15.78196,
                long: -47.864301
              },
            {
                place: 'W3',
                desc: 'Commercial city!',
                lat: -15.792896,
                long: -47.884301
              },
            {
                place: 'Weverton Viado',
                desc: 'Silicon Valley of India...',
                lat: -15.799896,
                long: -47.864301
              }
          ];




        $scope.cidadeChange = function (cidade) {
            $scope.cidadeMapFirst = []
            if (cidade != null) {
                for (var i = 0; i < $scope.cidades.length; i++) {
                    if ($scope.cidades[i].nome === cidade.nome) {
                        $scope.cidadeMapFirst[i] = $scope.cidades[i]
                    }
                }
                $scope.ensinos = $scope.cidadeMapFirst.filter(function (item) {
                    return item !== '' && item !== null;
                });
            }
        }

        $scope.ensinoChange = function (ensino) {
            $scope.ensinoMapFirst = []
            if (ensino != null) {
                for (var k = 0; k < $scope.cidades.length; k++) {
                    if ($scope.cidades[k].teste === ensino.teste) {
                        $scope.ensinoMapFirst[i] = $scope.cidades[k]
                    }
                }
                $scope.escolas = $scope.ensinoMapFirst.filter(function (item) {
                    return item !== '' && item !== null;
                });
                console.log($scope.escolas)

            }
        }
        
        $scope.escolaChange = function (escola){
           
            
         
              
                 
                 
                console.log($scope.escolas)

            
          
        }




        /*MAPA*/
        /*Configuração do mapa*/
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(-15.791896, -47.864301),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }


        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);



        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info) {

            var marker = new google.maps.Marker(

                {
                    map: $scope.map,
                    position: new google.maps.LatLng(
                        info.lat,
                        info.long),
                    title: info.place
                });

            marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long + ' N, </div>';

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent('<h2>' + marker.title + '</h2>' +
                    marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }

        for (i = 0; i < $scope.cities.length; i++) {
            createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function (e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

    });

angular.module('semdf')
    .controller('matriculaController', function ($scope, $routeParams, $http, $location) {

        
        $scope.getEscolas = function (){
            $http.get('v1/escolas')
            .success(function (escola) {
                $scope.escolas = escola;
            })
            .error(function (error) {
                console.log(error);
            });
        }
        $scope.getEscolas()

        /*  $scope.enviarBairro = function(dados){
                $http.get('v1/escolas/' + dados.bairro)
                .success(function (escola) {
                    $scope.escolas = escola
                 console.log($scope.escolas);
                })
                .error(function (error) {
                    console.log(error);
                });
            }*/


   

       

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
            
            
                for (var i = 0; i < $scope.escolas.length; i++) {
                    if ($scope.escolas[i].NO_BAIRRO === cidade.NO_BAIRRO) {
                        $scope.cidadeMapFirst[i] = $scope.escolas[i]
                    }
                }
                
                
       
                $scope.ensinos = $scope.cidadeMapFirst.filter(function (item) {
                    return item !== '' && item !== null;
                });
                
     
            
        }

        $scope.ensinoChange = function (ensino) {
         
           
            $scope.ensinoMapFirst = []
            

            if(ensino == "infantil"){    
               for (var k = 0; k < $scope.ensinos.length; k++) {                   
                    if ($scope.ensinos[k].Educação_Infantil == "Sim") {       
                        
                       $scope.ensinoMapFirst[k] = $scope.ensinos[k]
                    }
                }    
                 $scope.escolasFilter = $scope.ensinoMapFirst.filter(function (item) {
                    return item !== '' && item !== null;
                });
                
            }else if(ensino == "fundamental"){
                 for (var k = 0; k < $scope.ensinos.length; k++) {   
                    if ($scope.ensinos[k].Ensino_Fundamental == "Sim") {
                       $scope.ensinoMapFirst[k] = $scope.ensinos[k]
                    }
                }         
                 $scope.escolasFilter = $scope.ensinoMapFirst.filter(function (item) {
                    return item !== '' && item !== null;
                });
              
    
            }else if(ensino == "medio"){
         
                 for (var k = 0; k < $scope.ensinos.length; k++) {
                   
                    if ($scope.ensinos[k].Ensino_Médio == "Sim") {
                    console.log($scope.ensinos[k])
                        
                       $scope.ensinoMapFirst[k] = $scope.ensinos[k]
                    }
                }
                
                 $scope.escolasFilter = $scope.ensinoMapFirst.filter(function (item) {
                    return item !== '' && item !== null;
                });
                
                
            }else if(ensino == "especial"){
             
                  for (var k = 0; k < $scope.ensinos.length; k++) {   
                    if ($scope.ensinos[k].EducaçãoEspecial == "Sim") {
                       $scope.ensinoMapFirst[k] = $scope.ensinos[k]
                    }
                }         
                 $scope.escolasFilter = $scope.ensinoMapFirst.filter(function (item) {
                    return item !== '' && item !== null;
                });
    
                
                
            }
          
              
       
            
        }
        
        $scope.escolaChange = function (escola){
            $scope.escolaId = escola._id

        }
        
        $scope.enviaIdForm = function(){
         
            if($scope.escolaId){
                $location.path("/formulario/" + $scope.escolaId)
            }
            
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





angular.module('alurapic').controller('mapController', function($scope, $http) {
     /*Teste de dados no mapa*/
     $scope.cities = [
              {
                  place : 'India',
                  desc : 'A country of culture and tradition!',
                  lat : -15.791896,
                  long : -47.864301
              },
              {
                  place : 'New Delhi',
                  desc : 'Capital of India...',
                  lat : -15.794596,
                  long : -47.862301
              },
              {
                  place : 'Kolkata',
                  desc : 'City of Joy...',
                 lat : -15.78196,
                  long : -47.864301
              },
              {
                  place : 'Mumbai',
                  desc : 'Commercial city!',
                  lat : -15.792896,
                  long : -47.884301
              },
              {
                  place : 'Bangalore',
                  desc : 'Silicon Valley of India...',
                  lat : -15.799896,
                  long : -47.864301
              }
          ];
    
    
    $scope.cidades = [
      {nome: 'brasília'},
      {nome: 'Guará I'},
      {nome: 'Sobradinho'}
    ]
    
    $scope.escola = [
      {nome: 'Gisno' , lat: '' ,long: ''},
      {nome: 'Cef 7' , lat: '' ,long: ''},
      {nome: 'Juquinha' , lat: '' ,long: ''},
      {nome: 'Golfinho Dolrado' , lat: '' ,long: ''},
    ]
    
    
     
    
    $scope.cidadeChange = function(cidade){
        console.log(cidade);
        
        /*$http.put("/url", data)
            .success(function () {
            
            })
            .error(function () {
            });*/
    } 

 
    
    
        /*MAPA*/
        /*Configuração do mapa*/
      var mapOptions = {
                  zoom: 13,
                  center: new google.maps.LatLng(-15.791896,-47.864301),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }
      
    
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
   
    
    $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker(
                      
                      {
                      map: $scope.map,
                      position: new google.maps.LatLng(
                                                        info.lat, 
                                                        info.long),
                      title: info.place
                  });
                  
                  marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + 
                        marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for(i = 0; i < $scope.cities.length; i++){
                  createMarker($scope.cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }
    
    
});

(function() {
  'use strict';

  angular.module('app')
  .controller('abrirCorridaCtrl', function($scope, $http, $cordovaCamera, $interval, dateFilter, veiculoService, Scopes, criarCorridaService) {




    veiculoService.getVeiculos().then(function(carros){
    if (carros.data != null) {
      $scope.lista = carros.data;
    }
});



  $scope.abrirCorrida = function(){

   var options = {
    quality: 100,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit: false,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 300,
    targetHeight: 300,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: false
  };

  $cordovaCamera.getPicture(options).then(function(imageData) {
    console.log("sucesso" + angular.toJson(imageData));
    $scope.imageCamera = "data:image/jpeg;base64," + imageData;//Função trata a imagem, convertendo de binário para jpeg, renderizando na tela
  }, function(err) {
    // error
    console.log("fracasso" + angular.toJson(imageData));
    error(err);
  });


  };

    $scope.addCorrida = function(){
        var deviceStartDate = new Date();

        var user = Scopes.get('loginCtrl').user;
        var run = {
          deviceStartDate: deviceStartDate,
          mileage: $scope.mileage,
          car: $scope.car.IdVeiculo,
          user: user,
          open:true,
          photo:  'pauiggefbwa987geyh9´4qp8´q4hj4=dx0af4ut-9hgbnv'//$scope.imageCamera,
        }

        criarCorridaService.postCorrida(run).success(function(data){
           window.location.href = "#/page3";
        }).error(function(data,status){
           $scope.message = "Falha ao Registrar Corrida"+data;
        });

  };


})
}());

(function() {
  'use strict';


angular.module('app')
.controller('fecharCorridaCtrl', function($scope, $cordovaCamera, $interval, dateFilter, Scopes, veiculoService, criarCorridaService) {

  veiculoService.getVeiculos().then(function(carros){
    if (carros.data != null) {
      $scope.lista = carros.data;

    }
  });

  $scope.fechaCorrida = function(){

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
    console.log("sucesso");
    $scope.imageCamera = "data:image/jpeg;base64," + imageData;//Função trata a imagem, convertendo de binário para jpeg, renderizando na tela
  }, function(err) {
    // error
    console.log("fracasso");
    error(err);
  });

  };

  $scope.finalizaCorrida = function(){
      var deviceStartDate = new Date();

      var user = Scopes.get('loginCtrl').user;
      var run = {
        deviceStartDate: deviceStartDate,
        mileage: $scope.mileage,
        car: $scope.car.IdVeiculo,
        user: user,
        open:false,
        photo:  $scope.imageCamera,
      }

      criarCorridaService.postCorrida(run).success(function(data){
        $location.path('/page3');
      }).error(function(data,status){
         $scope.message = "Falha ao Registrar Corrida"+data;
      });

};
})
}());

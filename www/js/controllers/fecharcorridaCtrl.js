(function() {
  'use strict';


angular.module('app')
.controller('fecharCorridaCtrl', function($scope, $cordovaCamera, $interval, dateFilter,Scopes, veiculoService,finalizaCorridaService) {

  veiculoService.getVeiculos().then(function(carros){
    if (carros.data != null) {
      $scope.lista = carros.data;
      console.log($scope.lista);
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

      var user = Scopes.get('loginCtrl').user.data.value;
      var data = {
        deviceStartDate: deviceStartDate,
        mileage: $scope.mileage,
        car: $scope.car.IdVeiculo,
        user: user,
        open: false,
        photo:  'pauiggefbwa987geyh9´4qp8´q4hj4=dx0af4ut-9hgbnv'//$scope.imageCamera,
      }
      console.log(data);
      finalizaCorridaService.finalizaCorridaService(data);

      /*var request = {
        method: "POST",
        url: "http://localhost:3000/run/delete",
        data: JSON.stringify(data)
      };


      $http(request).success(function (data) {
        console.log("Request", data);
      }).error(function (data) {
        console.log("Fail", data);
      })*/

        window.location.href = "#/page3";

    };
})
}());

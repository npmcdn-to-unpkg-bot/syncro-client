(function() {
  'use strict';

  angular.module('app')
  .controller('abrirCorridaCtrl', function($scope, $http, $cordovaCamera, $interval, dateFilter, veiculoService) {



    veiculoService.getVeiculos().then(function(carros){
    if (carros.data != null) {
      $scope.lista = carros.data;
      console.log($scope.lista);
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

  //Codigo acima recupera imagem do sistema e o km informado




    $scope.addCorrida = function(){
        var deviceStartDate = new Date();

        var data = {
          deviceStartDate: deviceStartDate,
          mileage: $scope.mileage,
          car: $scope.car.IdVeiculo,
          user: 1,
          photo: "SUAIHDUAHDIDHUAUIDHAUDH",
        }

        console.log(deviceStartDate);

        var request = {
          method: "POST",
          url: "http://localhost:3000/run",
          data: JSON.stringify(data)
        };


        $http(request).success(function (data) {
          console.log("Request", data);
        }).error(function (data) {
          console.log("Fail", data);
        })

          window.location.href = "#/page3";

  };


  })
  
}());
angular.module('app')
.controller('fecharCorridaCtrl', function($scope, $cordovaCamera, $interval, dateFilter) {

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

  //Codigo acima recupera imagem do sistema e o km informado

  $scope.velocimetro = [
    {km: ""}
  ];


  $scope.currentData = dateFilter(new Date(), " 'Data: 'dd/MM/yyyy 'Hora: 'hh:mm a");



})

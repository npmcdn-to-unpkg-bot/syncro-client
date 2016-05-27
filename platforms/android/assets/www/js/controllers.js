angular.module('app.controllers', [])


.controller('loginCtrl', function($scope, userService, Scopes) {

  $scope.entrar = function () {

    var usuario = $scope.usuario;
    var senha = $scope.senha;


    //if (usuario!="" && senha!="" ) {
        userService.getUsers(usuario,senha).then(function(us){
        if (us.data != null) {
            $scope.nome = us.data.Nome;
            $scope.empresa = us.data.Empresa;
            $scope.idUsuario = us.data.IdUsuario;
            Scopes.store('loginCtrl', $scope);
            window.location.href = "#/page3";
        }
        else {
            window.location.href = "#/page2";
            alert('Dados Inválidos!');
        }
        console.log(us);
    });
    //}
    //else {
  //    alert('falha');
  //  }

  }


})

.controller('corridaCtrl', function($scope) {

})



//.controller('dataCtrl', function($scope, $interval, dateFilter, Scopes){

 //$scope.currentData = dateFilter(new Date(), 'dd/MM/yyyy');

 //$scope.currentTime = dateFilter(new Date(), 'hh:mm');

 //$scope.pessoa = get('loginCtrl').nome;

/* var updateTime = $interval(function() {
   $scope.currentTime = dateFilter(new Date(), 'hh:mm');
 }, 1000);
*/

//})




.controller('abrirCorridaCtrl', function($scope, $cordovaCamera, $interval, dateFilter, veiculoService) {



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

$scope.velocimetro = [
  {km: ""}
];



  $scope.currentData = dateFilter(new Date(), " 'Data: 'dd/MM/yyyy 'Hora: 'hh:mm a");


})



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

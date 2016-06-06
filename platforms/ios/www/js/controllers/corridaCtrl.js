angular.module('app')
.controller('corridaCtrl', function($scope, Scopes,verificaCorridaService) {



   var token = Scopes.get('loginCtrl').token;

   $scope.instalador = Scopes.get('loginCtrl').nome;


   verificaCorridaService.getCorrida(token).then(function(runs){

   console.log("corridas!! - "+runs.data);
   if (runs.data != null) {

     $scope.lista = runs.data[0].serverStartDate;

     //var deviceStartDate = new Date();
    // $scope.lista = $scope.corridas.filter(function (item) {
      //          return item.open === true;
        //    });
     $scope.dateStart = runs.data[0].serverStartDate;
   }

   });

})

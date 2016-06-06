angular.module('app')
.controller('corridaCtrl', function($scope, Scopes,verificaCorridaService) {



   var token = Scopes.get('loginCtrl').token;

   $scope.instalador = Scopes.get('loginCtrl').nome;


   verificaCorridaService.getCorrida(token).then(function(runs){

   if (runs.data != null) {
     $scope.corridas = runs.data;
     //$scope.lista = runs.data;

    var data =  new Date().toJSON().substring(0,10);



     $scope.corridaInicio = $scope.corridas.filter(function (item) {
          var dataDev  = item.deviceStartDate.substring(0,10);
          if (item.open==true && dataDev==data) {
              return item;
         }
     });



     $scope.corridaTermino = $scope.corridas.filter(function (item) {
       var dataDev  = item.deviceStartDate.substring(0,10);
       if (item.open==false && dataDev==data) {
           return item;
       }

    });
     $scope.dateStart = $scope.corridaInicio[0].serverStartDate;
     $scope.dateFinish = $scope.corridaTermino[0].serverStartDate;
   }

   });

})

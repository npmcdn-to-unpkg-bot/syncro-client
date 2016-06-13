(function() {
  'use strict';

angular.module('app')
.controller('corridaCtrl', function($scope, Scopes,verificaCorridaService) {

  var token = Scopes.get('loginCtrl').token;

   $scope.instalador = Scopes.get('loginCtrl').nome;

   $scope.abrirCorrida = function(){
     

     window.location.href="#/page4";
     console.log("ENTROU");
   };
   $scope.fecharCorrida = function(){


     window.location.href="#/page5";
     console.log("ENTROU");
   };

})
}());

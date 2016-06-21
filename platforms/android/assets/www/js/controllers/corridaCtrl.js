(function() {
  'use strict';

angular.module('app')
.controller('corridaCtrl', function($scope, Scopes,verificaCorridaService,$location) {

  var token = Scopes.get('loginCtrl').token;

   $scope.instalador = Scopes.get('loginCtrl').nome;

   $scope.abre = false;

   $scope.abrirCorrida = function(){

     $location.path('/page4');
     $scope.abre = function(){
      $scope.abre = true;
     }
   };
   $scope.fecharCorrida = function(){
     $scope.abre = false;
     $location.path('/page5');
   };

})
}());

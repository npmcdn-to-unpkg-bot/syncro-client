angular.module('app')
.controller('corridaCtrl', function($scope, Scopes) {

   $scope.instalador = Scopes.get('loginCtrl').nome;

   
})

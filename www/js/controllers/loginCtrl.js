(function() {
  'use strict';

  angular.module('app')
  .controller('loginCtrl', function($scope) {

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

}());

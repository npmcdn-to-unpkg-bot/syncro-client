(function() {
  'use strict';

  angular.module('app')

  .controller('loginCtrl',function($scope,userServiceToken,userServiceLogin,Scopes) {
      $scope.validarUsuario = function(){

        var parametros = {
          cpf:$scope.usuario,
          password: $scope.senha
        };

      userServiceToken.postToken(parametros).success(function(chave){
          var token =chave.token;

          userServiceLogin.getLogin(token).success(function(user){

              $scope.user = user.value;
              $scope.nome = user.value.name;
              $scope.token = token;
              $scope.usuario = user.value.usuario;

              Scopes.store('loginCtrl',$scope);


              if (user.value != null) {
                if (user.value.password == "" || user.value.password == null) {
                  alert("MSG003 - ESTE USUÁRIO NÃO TEM SENHA DEFINIDA!");
                    window.location.href = "#/page7";
                }else{
                    window.location.href = "#/page3";
                  }
              }else{
                alert("MSG002 - LOGIN INEXISTENTE!");
              }
          }).error(function(user,status){
             $scope.message = "Falha na validação do Login"+user;
          });

        }).error(function(chave,status){
           $scope.message = "Falha na validação do Login"+user;
        });
      }
  })
}());

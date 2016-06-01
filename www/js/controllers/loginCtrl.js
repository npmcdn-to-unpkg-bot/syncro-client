(function() {
  'use strict';

  angular.module('app')

  .controller('loginCtrl',function($scope,userServiceToken,userServiceLogin,Scopes) {
      $scope.validarUsuario = function(){
        var _cpf = $scope.usuario;
        var _password = $scope.senha;




        userServiceToken.postToken(_cpf,_password).then(function(chave){
          var token =chave.data.token;

          userServiceLogin.getLogin(token).then(function(user){

              $scope.user = user;
              $scope.nome = user.data.value.name;
              $scope.usuario = user.data.value.usuario;

              Scopes.store('loginCtrl',$scope);



              if (user.data.value != null) {
                if (user.data.value.password == "" || user.data.value.password == null) {
                  alert("MSG003 - ESTE USUÁRIO NÃO TEM SENHA DEFINIDA!");
                    window.location.href = "#/page7";
                }else{
                    window.location.href = "#/page3";
                  }
              }else{
                alert("MSG002 - LOGIN INEXISTENTE!");
              }
          })
        })
      }
  })
}());

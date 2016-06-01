(function() {
  'use strict';

  angular.module('app')

  .controller('loginCtrl', function($scope,userServiceToken,userServiceLogin) {
      $scope.validarUsuario = function(){
        var _cpf = $scope.usuario;
        var _password = $scope.senha;

        userServiceToken.postToken(_cpf,_password).then(function(chave){
          var token =chave.data.token;

          userServiceLogin.getLogin(token).then(function(user){
              //console.log(user.data.value.password);

              if (user.data.value != null) {
                 console.log(user);
                 if(user.data.value.password == _password){
                    window.location.href = "#/page3";
                 }else{
                    alert("MSG002 - Login Inexistente!")
                 }
              }else{
                 alert("MSG003 - Este usuário não tem senha definida!");
                 window.location.href = "#/page7";
              }
          })
        })
      }
  })
}());

angular.module('app')
.controller('criarSenhaCtrl', function($scope, userServicePass,userServiceLogin,Scopes){
      $scope.criar = function(){

        console.log("Clicado!");

        var _cpf = Scopes.get('loginCtrl').usuario;
        var _password = $scope.novaSenha;
        userServicePass.putPassword(_cpf,_password).then(function(){
           alert('MSG004 - SENHA CRIADA COM SUCESSO!');
           window.location.href = "#/page2";
        });

      };
  })

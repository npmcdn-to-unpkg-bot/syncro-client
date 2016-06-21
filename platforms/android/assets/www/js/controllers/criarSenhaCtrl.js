angular.module('app')
.controller('criarSenhaCtrl', function($scope, userServicePass,userServiceLogin,Scopes,$location){
      $scope.criar = function(){
       var xxx = Scopes.get('loginCtrl').user;
        console.log("Clicado! - "+xxx);

        var _id = Scopes.get('loginCtrl').user.data.value._id;
        var _password = $scope.novaSenha;

        userServicePass.putPassword(_id,_password).then(function(){
           alert('MSG004 - SENHA CRIADA COM SUCESSO!');
          $location.path('/page2');
        });

      };
  })

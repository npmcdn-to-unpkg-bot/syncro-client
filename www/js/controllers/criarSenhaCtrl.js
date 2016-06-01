angular.module('app')
.controller('criarSenhaCtrl', function($scope, userServicePass,userServiceLogin,Scopes){
      $scope.criar = function(){

        console.log("Clicado!");

        var _id = Scopes.get('loginCtrl').user.data.value._id;
        var _password = $scope.novaSenha;

        //$scope.user = Scopes.get('loginCtrl').user.data.value;
        //$scope.user.password = $scope.novaSenha;

        //console.log($scope.user);
        userServicePass.putPassword(_id,_password).then(function(){
           alert('MSG004 - SENHA CRIADA COM SUCESSO!');
           window.location.href = "#/page2";
        });

      };
  })

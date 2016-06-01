angular.module('app')

.factory('userServiceToken', function($http) {

 return {
    postToken: function(_cpf, _password){
      var parametros = {
        cpf:_cpf,
        password: _password
      };

      var _url=  SERVICE_URL+"/session";

       return $http.post(_url,parametros).then(function(response){
             return response;
          }, function(error){
        });
     }
  }
})



.factory('userServiceLogin', function($http) {
 return {
    getLogin: function(_token){

       var _url=  SERVICE_URL+"/session/user?token="+_token;
       return $http.get(_url).then(function(response){
          return response;
       }, function(error){

    });
  }
 }
})


.factory('userServicePass', function($http) {
console.log("Entrou no userServicepass");
 return {
    putPassword: function(_cpf, _password){

      var parametros = {
        cpf:_cpf,
        password:_password
      };
        console.log(" até aqui apenas variaveis");
      var _url=  SERVICE_URL+"/user";
        console.log("a partir daqui será feito o put");
      return $http.put(_url, parametros).then(function(response){
              console.log("executou");
            return response;
            }, function(error){
              console.log("erro!");
            });
              console.log("Ok");


     }
  }
})



.factory('veiculoService', function($http) {
 return {
    getVeiculos: function(){
        var _url="http://www.itserv.com.br/ITServ/api/Veiculo";
        return $http.get(_url).then(function(response){
            return response;
        }, function(error){

                });
        }
 }
})





.factory('Scopes', function ($rootScope) {
    var mem = {};

    return {
      store: function (key, value) {
        mem[key] = value;
      },
      get: function (key) {
         return mem[key];
       }
    };
})



.service('BlankService', [function(){

}]);

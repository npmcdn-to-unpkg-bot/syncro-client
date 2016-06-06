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
 return {
    putPassword: function(_id,_password){

      var parametros = {
        id:_id,
        password:_password
      };
      var _url=  SERVICE_URL+"/user";
      return $http.put(_url,parametros).then(function(response){
              console.log("executou");
            return response;
            }, function(error){
              console.log("erro!");
            });
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


.factory('verificaCorridaService', function($http) {
 return {
    getCorrida: function(_token){

       var _url=  SERVICE_URL+"/run?token="+_token;
       return $http.get(_url).then(function(response){
          return response;
       }, function(error){

    });
  }
 }
})


.factory('iniciaCorridaService', function($http) {
 return {
    postCorrida: function(data){

      var request = {
        method: "POST",
        url: "http://localhost:3000/run",
        data: JSON.stringify(data)
      };


      $http(request).success(function (data) {
        console.log("Request", data);
      }).error(function (data) {
        console.log("Fail", data);
      })
  }
 }
})

.factory('finalizaCorridaService', function($http) {
 return {
    postCorrida: function(data){

      var request = {
        method: "POST",
        url: "http://localhost:3000/run",
        data: JSON.stringify(data)
      };


      $http(request).success(function (data) {
        console.log("Request", data);
      }).error(function (data) {
        console.log("Fail", data);
      })
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

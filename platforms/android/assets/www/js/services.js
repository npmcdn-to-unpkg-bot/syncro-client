angular.module('app.services', [])


.factory('BlankFactory', [function(){

}])

.factory('userService', function($http) {
 return {
    getUsers: function(_usuario,_senha){
        var _url="http://www.itserv.com.br/ITServ/api/Login?usuario="+_usuario+"&senha="+_senha;
        return $http.get(_url).then(function(response){
            return response;
        }, function(error){

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

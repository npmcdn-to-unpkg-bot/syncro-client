angular.module('app')

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider



      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('corrida', {
    url: '/page3',
    templateUrl: 'templates/corrida.html',
    controller: 'corridaCtrl'
  })

  .state('abrirCorrida', {
    url: '/page4',
    templateUrl: 'templates/abrirCorrida.html',
    controller: 'abrirCorridaCtrl'
  })

  .state('fecharCorrida', {
    url: '/page5',
    templateUrl: 'templates/fecharCorrida.html',
    controller: 'fecharCorridaCtrl'
  })

  .state('senha', {
    url: '/page6',
    templateUrl: 'templates/senha.html',
    controller:   'senhaCtrl'
  })
  .state('criarSenha', {
    url: '/page7',
    templateUrl: 'templates/criarSenha.html',
    controller: 'criarSenhaCtrl'
  })

$urlRouterProvider.otherwise('/page2')



});

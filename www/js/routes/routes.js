angular.module('app')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
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

$urlRouterProvider.otherwise('/page2')



});

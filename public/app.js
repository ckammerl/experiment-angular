angular.module('sudoku', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  // for any unmatched route send to /home
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController'
    })

    .state('otherRoute', {
      url: "/other"
    });
});



angular.module('sudoku', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  // for any unmatched route send to /home
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('board', {
      url: '/',
      params: {
        row: 0,
        col: 0
      },
      templateUrl: 'board.html',
      controller: 'BoardController'
    })

    .state('form', {
      url: "/enter-input/:row/:col",
      templateUrl: 'form.html',
      controller: 'FormController'
    });
});



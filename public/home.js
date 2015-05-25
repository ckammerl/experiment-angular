angular.module('sudoku')

.controller('HomeController', function($scope, Board) {
  $scope.board = Board.create();
});
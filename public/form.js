angular.module('sudoku')

.controller('FormController', function($scope, $state, $stateParams, Board) {
  $scope.getNewInput = function() {
    var row = $stateParams.row;
    var col = $stateParams.col;
    Board.board[row][col] = $scope.number;
    $state.go('board');
  };
});
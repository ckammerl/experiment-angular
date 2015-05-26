angular.module('sudoku')

.controller('FormController', function($scope, $state, $stateParams, Board) {
  $scope.numberOptions = [1,2,3];
  $scope.number = 1;
  $scope.board = Board.board;

  $scope.getNewInput = function() {
    var row = $stateParams.row;
    var col = $stateParams.col;

    var oldCellValue = $scope.board[row][col];
    // set new value into clicked cell
    $scope.board[row][col] = $scope.number;

    $state.go('board', {row: row, col: col});
  };
});
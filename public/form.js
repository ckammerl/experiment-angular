angular.module('sudoku')

.controller('FormController', function($scope, $state, $stateParams, Board) {
  $scope.numberOptions = [1,2,3];
  $scope.number = 1;
  $scope.board = Board.board;

  // on submit (form.html) of chosen value
  $scope.getNewInput = function() {
    var row = $stateParams.row;
    var col = $stateParams.col;

    // set new value into clicked cell
    $scope.board[row][col] = $scope.number;

    // go back to board controller and pass params
    $state.go('board', {row: row, col: col});
  };
});
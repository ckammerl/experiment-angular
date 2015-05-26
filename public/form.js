angular.module('sudoku')

.controller('FormController', function($scope, $state, $stateParams, Board) {
  $scope.getNewInput = function() {
    console.log('stateParams col', $stateParams.col);
    console.log(Board.board);
    console.log('scope number', $scope.number);
    var row = $stateParams.row;
    var col = $stateParams.col;
    Board.board[row][col] = $scope.number;
    $state.go('board');
  };
});
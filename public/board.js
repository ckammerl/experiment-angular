angular.module('sudoku')

.controller('BoardController', function($scope, $state, $stateParams, Board) {
  $scope.board = Board.board;
  $scope.getNewInput = function() {
    return $scope.number;
  };
  $scope.update = function($event) {
    var clickedElem = $event.currentTarget;
    var RowAndCol = clickedElem.id.split('');
    var clickedRow = Number(RowAndCol[0]);
    var clickedCol = Number(RowAndCol[1]);
    console.log("row", clickedRow);
    console.log("col", clickedCol);
    // console.log(clickedElem.id);
    // console.log(typeof clickedElem.id); // string
    // console.log(typeof clickedRow); // number

    $state.go('form', {row: clickedRow, col: clickedCol});
  };

  $scope.$watch('board', function() {
    console.log('board', $scope.board);
  });
});

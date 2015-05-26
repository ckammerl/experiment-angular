angular.module('sudoku')

.controller('BoardController', function($scope, $state, $stateParams, Board) {
  $scope.board = Board.board;

  $scope.showRules = false;

  $scope.validNumber = function() {
    for  (var i= 0; i < $scope.board.length; i++) {
      for (var j=0; j <  $scope.board.length; j++) {
        if ($scope.isValid(i,j) === "notvalid") {
          return false;
        }
      }
    }

    return true;
    console.log("winner", $scope.haveWinner);

  };

  $scope.getNewInput = function() {
    return $scope.number;
  };

  $scope.update = function($event) {
    var clickedElem = $event.currentTarget;
    var RowAndCol = clickedElem.id.split('');
    var clickedRow = Number(RowAndCol[0]);
    var clickedCol = Number(RowAndCol[1]);

    $state.go('form', {row: clickedRow, col: clickedCol});
  };

  $scope.isValid = function(row, col) {
    var currentRow = getRowValues(row);
    var currentCol = getColValues(col);
    var valid = isValid(currentRow, currentCol);

    if ( !valid ) {
      return 'notvalid'
    }
      // Board.validEntryCounter++; // update counter in Board factory
      // console.log('counter', Board.validEntryCounter );
    return 'valid';


  };

  var getRowValues = function(clickedRowIdx) {
    var rowValues = {};

    for ( var i = 0; i < $scope.board.length; i++ ) {
      if ( !rowValues.hasOwnProperty($scope.board[clickedRowIdx][i]) ) {
        rowValues[$scope.board[clickedRowIdx][i] ] = true;
      } else if ( rowValues.hasOwnProperty($scope.board[clickedRowIdx][i]) && $scope.board[clickedRowIdx][i] === null ) {
        rowValues[$scope.board[clickedRowIdx][i]] = true;
      } else {
        rowValues[$scope.board[clickedRowIdx][i]] = false;
      }
    }
    return rowValues;
  };

  var getColValues = function(clickedColIdx) {
    var colValues = {};

    for ( var i = 0; i < $scope.board.length; i++ ) {
      if ( !colValues.hasOwnProperty($scope.board[i][clickedColIdx]) ) {
        colValues[$scope.board[i][clickedColIdx]] = true;
      } else if ( colValues.hasOwnProperty($scope.board[i][clickedColIdx]) && $scope.board[i][clickedColIdx] === null ) {
        colValues[$scope.board[i][clickedColIdx]] = true;
      } else {
        colValues[$scope.board[i][clickedColIdx]] = false;
      }
    }
    return colValues;
  };

  var isValid = function(rowValues, colValues) {
    for (var key in rowValues) {
      if (rowValues[key] === false ) {
        return false;
      }
    }

    for (var key in colValues) {
      if (colValues[key] === false) {
        return false;
      }
    }
    return true;
  };

  $scope.$watch('board', function() {
    console.log('board', $scope.board);
  });
});


angular.module('sudoku')

.controller('FormController', function($scope, $state, $stateParams, Board) {
  $scope.numberOptions = [1,2,3];
  $scope.number = 1;
  $scope.board = Board.board;

  $scope.getNewInput = function() {
    var row = $stateParams.row;
    var col = $stateParams.col;

    var oldCellValue = $scope.board[row][col];
    // set new value into cell
    $scope.board[row][col] = $scope.number;

    var currentRow = getRowValues(row);
    var currentCol = getColValues(col);

    var valid = isValid(currentRow, currentCol);

    console.log("valid", valid);

    if ( !valid ) {
      $scope.board[row][col] = oldCellValue;
    }

    $state.go('board', {valid: valid});
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
});
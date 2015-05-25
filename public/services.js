angular.module('sudoku')

.factory('Board', function() {
  var create = function() {
    var board = new Array();
    board.push( [1, 2, 3], [null, null, null], [2, null, null] );
    return board;
  }

  return {
    create: create
  };
})
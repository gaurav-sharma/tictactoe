'use strict';

/**
 * @ngdoc function
 * @name tictactoeApp.controller:MainCtrl
 * @description # MainCtrl Controller of the tictactoeApp
 */
angular.module('tictactoeApp').controller('MainCtrl', function($scope, current, squares) {
	
	$scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];
	
	$scope.squares = squares;
	
	$scope.outcome = '';
	
	$scope.select = function(column, row) {
		
		if(!$scope.squares[column][row].value) {//What has been done cannot be undone
			
			$scope.squares[column][row].value = current;
			
			
			var dimension = $scope.squares.length;
			
			
			for(var i = 0; i < dimension; i++) {// check column
				if($scope.squares[column][i].value !== current) {
					break;
				}
				if(i === (dimension - 1)) {
					$scope.outcome = ['WIN FOR', current].join(' ');
				}
			}
			
			for(var i = 0; i < dimension; i++) {//check row
				if($scope.squares[i][row].value !== current) {
					break;
				}
				if(i === (dimension - 1)) {
					$scope.outcome = ['WIN FOR', current].join(' ');
				}
			}
			
			if(column === row) { // on diagonal
				for(var i = 0; i < dimension; i++) {
					if($scope.squares[i][i].value !== current) {
						break;
					}
					if(i === (dimension - 1)) {
						$scope.outcome = ['WIN FOR', current].join(' ');
					}
				}
			}
			
			for(var i = 0; i < dimension; i++) {//check reverse diagonal
				if($scope.squares[i][(dimension - 1) - i].value !== current) {
					break;
				}
				if(i === (dimension - 1)) {
					$scope.outcome = ['WIN FOR', current].join(' ');
				}
			}
			
			current = (current === 'O') ? 'X' : 'O';
		}
	};
	
	$scope.reset = function() {
		
		var dimension = $scope.squares.length;
		
		for(var i = 0; i < dimension; i++) {
			for(var j = 0; j < dimension; j++) {
				$scope.squares[i][j].value = '';
			}
			
		}
		
		$scope.outcome = '';
	}

});

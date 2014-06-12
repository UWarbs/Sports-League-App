var angular = require('angular');

(function(){
	var app = angular.module('pingPong', []);

	var players = {
		Kyle:
		{
			wins: 0,
			losses:0
		},
		Kevin:
		{
			wins:0,
			losses:0
		},
		SwampGuzller:
		{
			wins: 0,
			losses: 0
		},
		Jeff:{
			wins:0,
			losses: 0
		}
		};
	app.controller('StandingController', function($scope){
		$scope.players = players;


		$scope.addLoss = function(name){
			return $scope.players[name].losses++;
		};
		$scope.addWin = function(name){
			return $scope.players[name].wins++;
		};
		$scope.orderProp = 'player.record';
	});
})();

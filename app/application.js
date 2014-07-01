var angular = require('angular');
var standing = require('./modules/standings/standings-module.js');

(function(){
	var sportApp = angular.module('sportApp', ['ngRoute', 'ngResource', standing.name]); 
	
	sportApp.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/standings', {
			templateUrl:'templates/standingAll.html',
			controller: 'standingsDisplayCtrl'
		});
	}]);
	



	/*app.service('PlayerService', function(){
		var uId = 1;
		var players = [{
			id: 0,
			'name': 'Kyle',
			'wins': 0,
			'losses':0
		}];

		this.save = function(player){
			if(!player.id){
				player.id = uId++;
				players.push(player);
			}else{
				for(var i = 0; i <= players.length; i++){
					if(players[i].id == player.id){
						players[i] = player;
					}
				}
			}
		}; //this.save

		//searches player list for given id returns player object if found
		this.get = function(id){
			for(var i = 0; i <= players.length; i++){
				if(players[i].id == id){
					return players[i];
				}
			}
		}; //this.get

		//delete player if found
		this.delete = function(id){
			for(var i = 0; i <= players.length; i++){
				if(players[i].id == id){
					players.splice(i, 1);
				}
			}
		}; //this.delete

		//returns contact list
		this.list = function(){
			return players;
		};
	});

	
	app.controller('PlayerController', function($scope, PlayerService){
		$scope.players = PlayerService.list();
		$scope.newplayer = {};

		$scope.savePlayer = function(){
			console.log($scope);
			PlayerService.save($scope.newplayer);
			$scope.newplayer = {};
		};

		$scope.delete = function(id){
			if($scope.newplayer.id == id) $scope.newplayer = {};
		};

		$scope.edit = function(id){
			$scope.newplayer = angular.copy(PlayerService.get(id));
		}; 
	});*/


})();

//when updating wins/losses, need to do a db.players.update({name: "playerName"}, {$inc: {wins: 1}})
//automatically creates "win" field in database if none exists

require('angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
var standing = require('./modules/standings/standings-module.js');


var mainApp = angular.module('mainApp', ['ngRoute', 'base64', 'ngCookies']); 

//====CONTROLLERS=====
require('./modules/login/LoginCtrl')(mainApp);
require('./modules/login/SignupCtrl')(mainApp);


mainApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'templates/index.html'
			})
			.when('/login', {
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
			})
			.when('/signup',{
				templateUrl: 'templates/signup.html',
				controller: 'SignupCtrl'
			})
			.when('/standings', {
				templateUrl:'templates/standingAll.html',
				controller: 'StandingsDisplayCtrl'
			})
			.when('/dashboard',{
				templateUrl: 'templates/dashboard.html'
			});
	}
]);
	



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
		}; 

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





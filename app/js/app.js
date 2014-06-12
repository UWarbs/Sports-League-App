var angular = require('angular');

(function(){
	var app = angular.module('pingPong', []);


	app.controller('StandingController', function(){
		this.players = people;
	});

	var people = [
	{
		name: "Kyle",
		wins: 0,
		losses:0
	},
	{
		name:"Swampguzzler",
		wins:0,
		losses:0
	},
	{
		name: "Kevin",
		wins: 0,
		losses: 0
	}
	];


})();

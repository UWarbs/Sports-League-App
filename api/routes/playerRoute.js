var Player = require('../models/player.js');
var Game = require('../models/game.js');

module.exports.standings = function(req, res) {
	console.log(req);


	res.setHeader('Content-Type', 'application/json');

	Player.find(
	{}, null,
	function(err, players) {
		if(err) {
			res.send(500, {'error': err});
			return false;
		};
		res.send(players);
	}); 

};

module.exports.matchHistory = function(req, res){
	console.log(req);
	res.setHeader('Content-Type', 'application/json');

	Game.find(
	{$or: [{"winner.username": req.params.username}, {"loser.username": req.params.username}]},
	function(err, games) {
		if(err) {
			res.send(500, {'error': err});
			return false;
		};
		res.send(games);
	});
};

module.exports.addGame = function(req, res){

};

module.exports.addUser = function(req, res){

};
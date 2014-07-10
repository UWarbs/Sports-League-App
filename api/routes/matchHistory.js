var Player = require('../models/player.js');
var Game = require('../models/game.js');



module.exports.matchHistory = function(req, res){
	console.log(req);
	res.setHeader('Content-Type', 'application/json');


	//how to find a game collection for a specific player?
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

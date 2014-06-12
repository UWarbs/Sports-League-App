var Player = require('../models/player.js');

exports.playerData = function(req, res) {

	console.log(req.params.name)

	res.setHeader('Content-Type', 'application/json');

	Player.find({

		name: req.params.name,

	}, 
	null, 
	function(err, wins) {
		if(err) {
			res.send(500, {'error': err});
			return false;
		};
		res.send(wins);
	});
};
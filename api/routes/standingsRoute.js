var Player = require('../models/player.js');

module.exports = function(app) {
	app.get('/api/standings', function(req, res){
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

	});

};
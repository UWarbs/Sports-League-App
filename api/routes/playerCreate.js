var Player = require('../models/player.js');

module.exports = function(app){
	app.post('/api/add-user', function(req, res){
		console.log(req.body);

		Player.create(
			{
				username: req.body.username,
				basic:{
					email: req.body.email,
					password: req.body.password
				},
				leagues:[{
					leagueName: req.body.leagueName,
					wins: req.body.wins,
					losses: req.body.losses
				}]
			}, 
		function(err, player){
			if(err){return res.send(500, 'Error adding player' + err);}
			return res.json(200, player.toJSON());
		});
	});
};
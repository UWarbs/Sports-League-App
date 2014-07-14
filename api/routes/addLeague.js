var Player = require('../models/player.js');
module.exports = function(app, jwtauth){
	app.post('/api/leagues', jwtauth, function(req, res){
		var newLeague = req.body;

    req.player.leagues.push(newLeague);
    req.player.save(function(err) {
      if (err) { return res.send(500, err); }
      res.send(req.player);
    });
	});
};
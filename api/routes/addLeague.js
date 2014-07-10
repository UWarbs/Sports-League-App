var Player = require('../models/player.js');	
module.exports = function(app){
	app.post('/api/leagues', function(req, res){
		var newLeague = req.body;

    req.player.leagues.push(newLeague);
    req.player.save(function(err) {
      if (err) { return res.send(500, err); }
      res.send(req.player);
    });
	});
};
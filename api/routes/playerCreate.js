var Player = require('../models/player.js');
var passport = require('passport');

module.exports = function(app){
	app.post('/api/add-user', function(req, res){
		Player.findOne({'basic.email': req.body.email}, function(err, user){
			if(err){
				req.send(500, err);
				return false;
			}
			if(user){
				res.send(409, {'msg': 'A user with this email already exists'});
			}
		
			var newUser = new Player({});
			newUser.basic.email = req.body.email;
			newUser.basic.password = newUser.generateHash(req.body.password);
			newUser.username = req.body.username;
			newUser.leagues = [];
	
			newUser.save(function(err, resNewUser){
				if(err){return res.send(500, 'Error adding player' + err);}
				res.json({'jwt_token': resNewUser.createToken(app)});
			});
		});
	});

	app.get('/api/players',
        passport.authenticate('basic', {
          session: false,
          failureRedirect: '/login'
        }),
        function (req, res) {
            res.json({'jwt_token': req.user.createToken(app)});
        }
    );
};
var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
	username: String,
	basic:{
		email: String,
		password: String
	},
	leagues: [{
		leagueName: String,
		wins: Number,
		losses: Number
	}]
});

//add methods here

module.exports = mongoose.model('Player', playerSchema);
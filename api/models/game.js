var mongoose = require('mongoose');

//might use object ids instead of usernames
var gameSchema = new mongoose.Schema({
	winner:{username: String, score: Number}, 
	loser: {username: String, score: Number},
	date: Date
});

module.exports = mongoose.model('Game', gameSchema);
var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
	winner:{username: String, score: Number}, 
	loser: {username: String, score: Number},
	date: Date
});

module.exports = mongoose.model('Game', gameSchema);
var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
	username: String,
	wins: Number,
	losses: Number
});

module.exports = mongoose.model('Player', playerSchema);
var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
	name: String,
	wins: Number,
	losses: Number
});

module.exports = mongoose.model('Player', playerSchema);
var mongoose = require('mongoose');

var leagueSchema = new mongoose.Schema({
	leagueName: String,
	owner: String,

	//solo or team
	leagueType: String, 
	pubPrive: Boolean,
	usesPoints: Boolean,
	description: String,
	startDate: Date   
	players:[{
		name: String,
		wins: Number,
		losses: Number,
		
		//like soccer/hockey
		points: Number
	}]
});

module.exports = mongoose.model('League', leagueSchema);
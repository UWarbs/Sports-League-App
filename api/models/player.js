var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var moment = require('moment');

var playerSchema = new mongoose.Schema({
	username: String,
	basic:{
		email: String,
		password: String
	},
	leagues: [{
		leagueName: String,
		wins: Number,
		losses: Number,
		startDate: Date,
		owner: String
	}]
});

playerSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

playerSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.basic.password);
};

playerSchema.methods.createToken = function (app) {
  var expires = moment().add('days', 7).valueOf();
  var that = this;
  var token = jwt.encode({
    iss: that._id,
    expires: expires
  }, app.get('jwtTokenSecret'));
  return token;
};

module.exports = mongoose.model('Player', playerSchema);
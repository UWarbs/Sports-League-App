var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var consolidate = require('consolidate');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var RedisStore = require('connect-redis')(session);
var passport = require('passport');

var pongRoutes = require('./api/routes/matchHistory');

mongoose.connect('mongodb://localhost/players');

var app = express();
var ttl = (1000 * 60 * 60 * 24 * 7);

//app.engine('angular', consolidate.angular); //Don't kow what this does
app.use(cookieParser('SECRETSTRING(CHANGETHIS)(foreman(download))')); //EX: process.env.COOKIE_SECRET
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

//===================
//Redis as a temporary data store
var sessionOptions = {
	host: "127.0.0.1",
	port: 6379, //standard redis default port
	ttl: ttl   //time to live
};
var redisSession = session({
	store: new RedisStore(sessionOptions),
	secret: 'wakka wakka',
	cookie:{
		maxAge: ttl
	}
});
app.use(redisSession);
//==================

//JWT AUTH
var jwtauth = require('./api/lib/jwtAuth')(app);
app.set('jwtTokenSecret', process.env.JWT_SECRET || 'changeme-CHANGEME');


//PASSPORT
app.use(passport.initialize());
require('./api/lib/passport')(passport);

app.set('port', process.env.PORT || 3000);


//app.post('/api/v1/add-user', file);
//app.post('/api/v1/add-game', file);
app.get('./api/match-history/:username', pongRoutes.matchHistory);
require('./api/routes/playerCreate')(app, passport, jwtauth.auth); //Player creater
require('./api/routes/standingsRoute')(app); //Shows standings
require('./api/routes/addLeague')(app);//adds league to player account




var server = http.createServer(app);

server.listen(app.get('port'), function () {
	console.log('Server start on:' + app.get('port'));
});

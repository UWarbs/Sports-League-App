var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var consolidate = require('consolidate');
var bodyParser = require('body-parser');

var pongRoutes = require('./api/routes/playerRoute');

mongoose.connect('mongodb://localhost/players');

var app = express();

//app.engine('angular', consolidate.angular); //Don't kow what this does
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.set('port', process.env.PORT || 3000);



//app.post('/api/v1/add-user', file);
//app.post('/api/v1/add-game', file);
app.get('./api/match-history/:username', pongRoutes.matchHistory);
require('./api/routes/playerCreate')(app); //Player creater
require('./api/routes/standingsRoute')(app); //Shows standings



//app.get('/api/v1/:name', players.playerData);



var server = http.createServer(app);

server.listen(app.get('port'), function () {
	console.log('Server start on:' + app.get('port'));
});

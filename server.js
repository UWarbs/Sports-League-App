var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var consolidate = require('consolidate');
var bodyParser = require('body-parser');

//var players = require('./api/routes/playerRoute');

//mongoose.connect('mongodb://localhost/players');

var app = express();
//app.engine('angular', consolidate.angular); //Don't kow what this does

app.use(express.static(__dirname + '/dist'));
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res, next){
	res.send("Kyle");
});

//app.get('/api/v1/:name', players.playerData);



var server = http.createServer(app);

server.listen(app.get('port'), function () {
	console.log('Server start on:' + app.get('port'));
});

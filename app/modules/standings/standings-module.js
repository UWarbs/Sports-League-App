var controllers = require('./standings-ctrl.js');
var services = require('./standings-services.js');

//define standings module

var standingsMod = angular.module('standingsMod', []);

//register resource function

standingsMod.factory('Standings', ['$resource', services.resource]);

//import and register controller functions

standingsMod.controller(
	'standingsInputCtrl',
	['$scope', '$location', 'Standings', controllers.standingsInputCtrl]
);

standingsMod.controller(
	'standingsDisplayCtrl',
	['$scope', 'Standings', controllers.standingsDisplayCtrl]
);

module.exports = standingsMod;
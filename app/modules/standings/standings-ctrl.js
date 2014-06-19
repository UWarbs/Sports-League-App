module.exports.standingsInputCtrl = function($scope, $location, Standings){
	
	$scope.standingInput = new Standings({});

	$scope.standingEntered = function(){
		$scope.standingInput.$save(function(input, respHeaders){
			console.log(respHeaders);
			$location.path('/api/standings');
		});
	};

};

module.exports.standingsDisplayCtrl = function($scope, Standings){
	$scope.allStandings = Standings.getAll({});
};
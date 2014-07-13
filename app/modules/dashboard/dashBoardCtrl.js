var getPlayerData = require('../../getPlayerData');

module.exports = function(mainApp){
  mainApp.controller('DashboardCtrl', [ '$scope', '$cookies', '$http', '$base64', '$location',
                      function ($scope, $cookies, $http, $base64, $location) {
	  //======SET VIEW=====
    $scope.rightSideUrl = '';
    
    //======COOKIE/USER STUFF======
    //send user to login page if no token
    if (!$cookies.jwt_token){
        $location.path('/login');
    }
    //all requests should send token
    $http.defaults.headers.common.jwt_token = $cookies.jwt_token;
    $scope.loggedIn = $cookies.jwt_token;
  
    //This is a good idea for a service I can connect to any
    //controller that needs the current player's data	
		getPlayerData($http, function(playerData) {
      setPlayer(playerData);
      console.log($scope.player);
    });
    function setPlayer(playerDoc){
      $scope.player = playerDoc;
    }
    
    //=====ADDING NEW LEAGUES
    $scope.addLeague = function(){
      $scope.hideMid = true;
      $scope.rightSideUrl = '/templates/addLeague.html';
    };

    $scope.saveLeague = function(name){
      //POST request to add to database
      var player = $scope.player;
      player.leagues.push({leagueName: name, wins: 0, losses: 0});
      console.log(player);
    };



  }]);
};
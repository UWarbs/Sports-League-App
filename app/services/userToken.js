/*var getPlayerData = require('../getPlayerData');

module.exports = function(mainApp){
  mainApp.factory('token', [ '$scope', '$cookies', '$http', '$base64', '$location',
                      function ($scope, $cookies, $http, $base64, $location) {

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

  }]);
}*/

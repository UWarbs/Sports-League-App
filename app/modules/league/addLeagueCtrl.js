var postNewLeague = require('../../postNewLeague');
var getPlayerData = require('../../getPlayerData');

module.exports = function(mainApp){
  mainApp.controller('AddLeagueCtrl', [ '$scope', '$cookies', '$http', '$base64', '$location',
                      function ($scope, $cookies, $http, $base64, $location) {
    
    getPlayerData($http, function(playerData) {
      setPlayer(playerData);
      console.log($scope.player);
    });
    function setPlayer(playerDoc){
      $scope.player = playerDoc;
    }
   
    $scope.newLeague = {};
    
    $scope.saveLeague = function(){
      console.log('saveLeague');
      postNewLeague($http, $scope.newLeague, function(newPlayerDoc) {
      
      setPlayer(newPlayerDoc);
      $scope.newLeague = {};
      });
    };
  }]);
};
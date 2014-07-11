module.exports = function getPlayerData($http, callback) {
  $http({
    method: 'GET',
    url: '/api/players/data'
  }).success(function(playerDoc) {
    callback(playerDoc);
  });
};
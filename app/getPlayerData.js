module.exports = function getPlayerData($http, callback) {
  $http({
    method: 'GET',
    url: '/api/player/data'
  }).success(function(playerDoc) {
    callback(playerDoc);
  });
};
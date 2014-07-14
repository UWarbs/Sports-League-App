module.exports = function postNewLeague ($http, league, callback) {

  //convert from raw date into JavaScript date object
  //raw date is in form YYYY-MM-DD
  //but need YYYY, MM -1 , DD for JavaScript date constructor
  //var rawDate = league.startDateRaw.split('-');
  league.startDate = new Date();

  //build post object from default crop record
  league.wins = 0;
  league.losses = 0;

  $http({
    method: 'POST',
    url: '/api/leagues',
    data: league,
  }).success(function (newPlayerDoc) {
    callback(newPlayerDoc);
  }).error(function(data){
    console.log('post error', data);
  });

};
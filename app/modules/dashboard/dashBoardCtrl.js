module.exports = function(mainApp){
  mainApp.controller('DashboardCtrl', [ '$scope', '$cookies', '$http', '$base64', '$location',
                      function ($scope, $cookies, $http, $base64, $location) {
		
		//logout by deleting jwt and 
    //sending user to login page
    $scope.logout = function () {
      console.log("LOGOUT");
      delete $cookies.jwt_token;
      $location.path('/login');
    };
  }]);
};
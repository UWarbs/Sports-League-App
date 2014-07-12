 module.exports = function(mainApp){
  mainApp.controller('HeaderCtrl', [ '$scope', '$cookies', '$http', '$base64', '$location',
                      function ($scope, $cookies, $http, $base64, $location) {  

    //logout by deleting jwt and 
    //sending user to login page
    $scope.logout = function () {
      delete $cookies.jwt_token;
      $location.path('/login');
    };

    //all requests should send token
    $http.defaults.headers.common.jwt_token = $cookies.jwt_token;
    $scope.loggedIn = $cookies.jwt_token;
  }]);
};
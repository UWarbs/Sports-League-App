module.exports = function(mainApp){
  mainApp.controller('LoginCtrl', [ '$scope', '$cookies', '$http', '$base64', '$location',
                      function ($scope, $cookies, $http, $base64, $location) {
  	if ($cookies.jwt_token){
      $location.path('/dashboard');
    }
    $scope.player = {};

  	$scope.login = function(){
  	  console.log($base64.encode($scope.player.email + ':'+ $scope.player.password));
      $http.defaults.headers.common.Authorization = 
      'Basic ' + $base64.encode($scope.player.email + ':' + $scope.player.password);
     
			$http.get('/api/players')
       	.success(function (data) {
          if (data.jwt_token){
            $cookies.jwt_token = data.jwt_token;
            $location.path('/dashboard');
          } else {
            console.log('failed login');
            $scope.failedLogin = 'Incorrect username/password combination';
            //$scope.user.email = null;
            //$scope.user.password = null;
          }
          }).error(function (data) {
              console.log('err', data);
          });
    };
  }]);
};
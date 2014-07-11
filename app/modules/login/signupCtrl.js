module.exports = function(mainApp){
  mainApp.controller('SignupCtrl', [ '$scope', '$cookies', '$http', '$location',
                      function ($scope, $cookies, $http, $location) {
  	$scope.player = {};
  	
  	$scope.save = function(){
  	  
      //ERROR HANDLING
      var error = false;
      $scope.postError = '';
      $scope.error = []; 

      /*if(!scope.player.password !== $scope.player.password){
        $scope.error.push('Passwords do not match');
        error = true;
      }*/
      if(error){
        return;
      }  
      $http.post('/api/add-user', $scope.player)
        .success(function (data) {
          if (data.jwt_token){
            $cookies.jwt_token = data.jwt_token;
            $location.path('/dashboard');
          } else {
            $scope.error = 'successfull post request but no token';
          }
        }).error(function (data) {
          $scope.postError = data.msg;
        });
  	};
  }]);
};

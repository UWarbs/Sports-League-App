module.exports = function(mainApp){
  mainApp.controller('SignupCtrl', [ '$scope', '$cookies', '$http', '$location',
                      function ($scope, $cookies, $http, $location) {
  	$scope.master = {};
  	

  	// $scope.reset = function(){
  	// 	$scope.field = angular.copy($scope.master);
  	// };

  	$scope.isUnchanged = function(){
  		return angular.equals(field, $scope.master);
  	};

  	$scope.update = function(field){
  		$scope.master = angular.copy(field);
  		console.log($scope.master);
  		return $scope.master;   
  	};									     

  	$scope.reset();
  });

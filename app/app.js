bigrock = angular.module('BigRock', []);

bigrock.controller('homeCtrl', ['$scope',
  function($scope) {

		$scope.welcome= "Hello to Big Rock";

}]);

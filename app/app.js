var bigrock = angular.module('BigRock', ['ngRoute']);

bigrock.controller('homeCtrl', ['$scope',
  function($scope) {

    $scope.welcome = "Hello to Big Rock";

}]);

bigrock.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider.
    when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'homeCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

}]);

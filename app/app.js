var bigrock = angular.module('BigRock', ['ngRoute']);

bigrock.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider.
    when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'homeCtrl'
    }).
    when('/domain-registration', {
      templateUrl: 'app/views/domain-registration.html',
      controller: 'homeCtrl'
    }).
    when('/checkout', {
      templateUrl: 'app/views/checkout.html',
      controller: 'homeCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

}]);

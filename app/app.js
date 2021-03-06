var bigrock = angular.module('BigRock', ['ngRoute']);

bigrock.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider.
    when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'homeCtrl'
    }).
    when('/search', {
      templateUrl: 'app/views/search.html',
      controller: 'homeCtrl'
    }).
    when('/checkout', {
      templateUrl: 'app/views/checkout.html',
      controller: 'homeCtrl'
    }).
    when('/purchasedone', {
      templateUrl: 'app/views/done.html',
      controller: 'homeCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

}]);

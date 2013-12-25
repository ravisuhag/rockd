bigrock.controller('homeCtrl', ['$scope',
  function($scope) {

    $scope.welcome = "Hello to Big Rock";

    angular.element('.selectpicker').selectpicker();

}]);
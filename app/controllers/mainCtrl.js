bigrock.controller('homeCtrl', ['$scope', '$location',
  function($scope, $location) {

    $scope.welcome = "Hello to Big Rock";
    $scope.extensions= {};
    $scope.search= {};

    angular.element('.selectpicker').selectpicker();

    $('.dropdown-menu').on('click', function(e) {
      if ($(this).hasClass('dropdown-menu-form')) {
        e.stopPropagation();
      }
    });

    $scope.formsubmit = function() {
      $location.path('/search');
    };

}]);
